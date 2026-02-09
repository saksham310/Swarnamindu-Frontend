import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema, type RegistrationFormData } from '../schemas/registration.schema';

import Step1Info from '../components/registration/Step1Info';
import Step2Health from '../components/registration/Step2Health';
import Step3Assignment from '../components/registration/Step3Assignment';

const RegistrationPage = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const methods = useForm({
        resolver: zodResolver(registrationSchema),
        mode: 'onTouched',
        defaultValues: {
            sex: undefined,
            weight: 0,
            height: 0,
            muac: 0,
        }
    });

    const nextStep = async () => {
        const fields = getFieldsForStep(step);
        const isValid = await methods.trigger(fields);
        if (isValid) setStep((s) => Math.min(s + 1, totalSteps));
    };

    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    const onSubmit = (data: RegistrationFormData) => {
        console.log("Final Data for Sync:", data);
        alert("Patient Registered Locally!");
    };

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Patient Registration</h1>
                <p className="text-gray-500 text-sm">Swarnavindu Prashan Program</p>

                {/* Progress Bar */}
                <div className="flex gap-2 mt-6">
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            className={`h-2 flex-1 rounded-full transition-colors ${s <= step ? 'bg-emerald-600' : 'bg-gray-200'}`}
                        />
                    ))}
                </div>
                <p className="text-xs text-gray-500 mt-2 font-medium">Step {step} of 3</p>
            </div>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="bg-white border rounded-xl shadow-sm p-6 md:p-8">
                    {step === 1 && <Step1Info />}
                    {step === 2 && <Step2Health />}
                    {step === 3 && <Step3Assignment />}

                    {/* Navigation Buttons */}
                    <div className="mt-10 pt-6 border-t flex justify-between">
                        <button
                            type="button"
                            onClick={prevStep}
                            disabled={step === 1}
                            className="px-6 py-2 border rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                        >
                            Previous
                        </button>

                        {step < totalSteps ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="px-8 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 flex items-center gap-2 transition-all"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="px-8 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-semibold"
                            >
                                Complete Registration
                            </button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

const getFieldsForStep = (step: number): (keyof RegistrationFormData)[] => {
    switch (step) {
        case 1: return ['childName', 'dob', 'sex', 'guardianName', 'phone'];
        case 2: return ['weight', 'height', 'muac', 'allergies', 'medicalHistory'];
        case 3: return ['assignedDoctor', 'batchNumber', 'isAccurate', 'hasConsent'];
        default: return [];
    }
};

export default RegistrationPage;