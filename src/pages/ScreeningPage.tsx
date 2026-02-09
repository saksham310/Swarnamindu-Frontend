import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from 'lucide-react';
import { ScreeningSidebar } from '../components/screening/Sidebar';
import { ScreeningForm } from '../components/screening/ScreeningForm';
import { screeningSchema, type ScreeningFormData } from '../schemas/screening.schema';
import { useParams } from 'react-router-dom';
import { useGetScreening } from '@/hooks/useGetScreening';
import { PatientNotFound } from '@/components/screening/PatientNotFound';


const ScreeningPage = () => {
    const { id } = useParams();
    const { data: patient } = useGetScreening({ id });
    const methods = useForm({
        resolver: zodResolver(screeningSchema),
        mode: "onTouched",
        defaultValues: {
            screeningDate: "2026-02-09",
            screeningType: "Follow-up",
            weight: 0,
            height: 0,
            muac: 0,
            temp: 98.6,
            healthStatus: "Normal",
            observations: "",
            assignedDoctor: "",
            doseAmount: 4,
            batchNumber: "",
        },
    });

    const onSubmit = (data: ScreeningFormData) => {
        console.log("Saving Screening to Offline Queue:", data);
    };

    if (!id || !patient) {
        return <PatientNotFound />;
    }
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
            <header className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft size={20} className="text-gray-500" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">New Screening</h1>
                    <p className="hidden md:block text-sm text-gray-500 font-medium">Conduct follow-up screening for patient</p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                    <ScreeningSidebar patient={patient} />
                </div>

                <div className="lg:col-span-3">
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <ScreeningForm />
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};

export default ScreeningPage;