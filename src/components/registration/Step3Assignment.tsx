import { useFormContext } from 'react-hook-form';

const Step3Assignment = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Program Assignment</h2>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Assigned Doctor *</label>
                <select
                    {...register('assignedDoctor')}
                    className={`w-full p-2.5 border rounded-lg outline-none ${errors.assignedDoctor ? 'border-red-500' : 'border-gray-300'}`}
                >
                    <option value="">Select a doctor</option>
                    <option value="dr-rajesh">Dr. Rajesh Bhushal</option>
                    <option value="dr-meena">Dr. Meena Shrestha</option>
                    <option value="dr-kapil">Dr. Kapil Devkota</option>
                </select>
                {errors.assignedDoctor && <p className="text-red-500 text-[10px] mt-1">{errors.assignedDoctor.message as string}</p>}
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Batch Number (optional)</label>
                <input
                    {...register('batchNumber')}
                    placeholder="SB2602077..."
                    className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                />
            </div>

            {/* Confirmation Box */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                <h3 className="text-emerald-800 font-semibold text-sm">Ready to register?</h3>
                <p className="text-emerald-700 text-xs mt-1">
                    This child will be registered in the Swarnavindu Prashan program and can receive doses immediately.
                </p>
            </div>

            <div className="space-y-3 pt-4 border-t">
                <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        {...register('isAccurate')}
                        className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                        I confirm the information is accurate
                    </span>
                </label>
                {errors.isAccurate && <p className="text-red-500 text-[10px]">{errors.isAccurate.message as string}</p>}

                <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        {...register('hasConsent')}
                        className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                        I have obtained guardian consent
                    </span>
                </label>
                {errors.hasConsent && <p className="text-red-500 text-[10px]">{errors.hasConsent.message as string}</p>}
            </div>
        </div>
    );
};

export default Step3Assignment;