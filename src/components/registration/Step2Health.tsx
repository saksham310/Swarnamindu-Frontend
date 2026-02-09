import { useFormContext } from 'react-hook-form';

const Step2Health = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Health Information</h2>

            {/* Information Box */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                <h3 className="text-blue-800 font-semibold text-sm">Anthropometry Measurements</h3>
                <p className="text-blue-600 text-xs mt-1">Please provide accurate measurements for the child</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Weight (kg) *</label>
                    <input
                        type="number"
                        step="0.1"
                        {...register('weight')}
                        placeholder="0.0"
                        className={`w-full p-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 ${errors.weight ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.weight && <p className="text-red-500 text-[10px] mt-1">{errors.weight.message as string}</p>}
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Height (cm) *</label>
                    <input
                        type="number"
                        step="0.1"
                        {...register('height')}
                        placeholder="0.0"
                        className={`w-full p-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 ${errors.height ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.height && <p className="text-red-500 text-[10px] mt-1">{errors.height.message as string}</p>}
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">MUAC (cm) *</label>
                    <input
                        type="number"
                        step="0.1"
                        {...register('muac')}
                        placeholder="0.0"
                        className={`w-full p-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 ${errors.muac ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.muac && <p className="text-red-500 text-[10px] mt-1">{errors.muac.message as string}</p>}
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Allergies (if any)</label>
                    <textarea
                        {...register('allergies')}
                        rows={3}
                        placeholder="List any known allergies..."
                        className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Medical History</label>
                    <textarea
                        {...register('medicalHistory')}
                        rows={3}
                        placeholder="Previous health conditions, medications, etc..."
                        className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default Step2Health;