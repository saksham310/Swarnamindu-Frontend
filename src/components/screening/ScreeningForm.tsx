import { useFormContext } from 'react-hook-form';

export const ScreeningForm = () => {
    const { register } = useFormContext();

    return (
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b bg-gray-50/50">
                <h2 className="font-bold text-gray-800">Screening Form</h2>
            </div>

            <div className="p-6 space-y-8">
                <section className="space-y-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Screening Details</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-semibold text-gray-600 mb-1 block">Screening Date *</label>
                            <input type="date" {...register('screeningDate')} className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-emerald-500/20" />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-gray-600 mb-1 block">Screening Type *</label>
                            <select {...register('screeningType')} className="w-full p-2 border rounded-md outline-none">
                                <option value="Follow-up">Follow-up</option>
                                <option value="Initial">Initial</option>
                            </select>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Anthropometric Measurements</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <label className="text-[10px] font-bold text-gray-500 mb-1 block uppercase">Weight (kg)</label>
                            <input type="number" step="0.1" {...register('weight')} className="w-full p-2 border rounded-md bg-gray-50/30" placeholder="0.0" />
                        </div>
                        <div>
                            <label className="text-[10px] font-bold text-gray-500 mb-1 block uppercase">Height (cm)</label>
                            <input type="number" step="0.1" {...register('height')} className="w-full p-2 border rounded-md bg-gray-50/30" placeholder="0.0" />
                        </div>
                        <div>
                            <label className="text-[10px] font-bold text-gray-500 mb-1 block uppercase">MUAC (cm)</label>
                            <input type="number" step="0.1" {...register('muac')} className="w-full p-2 border rounded-md bg-gray-50/30" placeholder="0.0" />
                        </div>
                        <div>
                            <label className="text-[10px] font-bold text-gray-500 mb-1 block uppercase">Temp (°F)</label>
                            <input type="number" step="0.1" {...register('temp')} className="w-full p-2 border rounded-md bg-gray-50/30" />
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Clinical Findings</p>
                    <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1 block">Health Status</label>
                        <select {...register('healthStatus')} className="w-full p-2 border rounded-md outline-none">
                            <option value="Normal">Normal</option>
                            <option value="At Risk">At Risk</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1 block">Observations & Notes</label>
                        <textarea {...register('observations')} rows={4} className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="Document any findings..." />
                    </div>
                </section>

                <section className="space-y-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Dose Administration</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-semibold text-gray-600 mb-1 block">Doctor *</label>
                            <select {...register('assignedDoctor')} className="w-full p-2 border rounded-md">
                                <option value="dr-rajesh">Dr. Rajesh Bhushal</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-gray-600 mb-1 block">Dose Amount (drops)</label>
                            <input type="number" {...register('doseAmount')} className="w-full p-2 border rounded-md bg-gray-50/30" />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1 block">Batch Number</label>
                        <input {...register('batchNumber')} className="w-full p-2 border rounded-md outline-none" placeholder="SB260..." />
                    </div>
                </section>
            </div>

            <div className="p-6 bg-gray-50 border-t flex flex-col md:flex-row gap-3 justify-end">
                <button type="button" className="px-10 py-2 border rounded-md font-semibold text-gray-600 bg-white hover:bg-gray-50 order-2 md:order-1">Cancel</button>
                <button type="submit" className="px-10 py-2 bg-emerald-600 text-white rounded-md font-semibold hover:bg-emerald-700 transition-all order-1 md:order-2">Save Screening</button>
            </div>
        </div>
    );
};