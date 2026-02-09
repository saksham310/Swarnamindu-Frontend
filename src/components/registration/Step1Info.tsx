import { useFormContext } from 'react-hook-form';

const Step1Info = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Child & Guardian Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Child's Name *</label>
                    <input
                        {...register('childName')}
                        placeholder="Enter child's name"
                        className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none ${errors.childName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.childName && <p className="text-red-500 text-xs mt-1">{errors.childName.message as string}</p>}
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth *</label>
                    <input
                        type="date"
                        {...register('dob')}
                        className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Sex *</label>
                    <select {...register("sex")}>
                        <option value="" disabled>
                            Select sex
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Guardian Name *</label>
                    <input
                        {...register('guardianName')}
                        placeholder="Parent/Guardian name"
                        className="w-full p-2.5 border border-gray-300 rounded-lg outline-none"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Contact Phone *</label>
                <div className="flex gap-2">
                    <div className="w-24 p-2.5 bg-gray-50 border rounded-lg text-gray-500 text-center">+977</div>
                    <input
                        {...register('phone')}
                        placeholder="98xxxxxxxx"
                        className="flex-1 p-2.5 border border-gray-300 rounded-lg outline-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default Step1Info;