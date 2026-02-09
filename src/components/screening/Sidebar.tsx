interface SidebarProps {
    patient: {
        name: string;
        id: string;
        age: string;
        sex: string;
        phone: string;
        dosesAdministered: number;
        totalDoses: number;
        lastDoseDate: string;
    };
}

export const ScreeningSidebar = ({ patient }: SidebarProps) => {
    const progress = (patient.dosesAdministered / patient.totalDoses) * 100;

    return (
        <div className="bg-white border rounded-xl p-6 shadow-sm h-fit space-y-8">
            <section className="space-y-4">
                <h3 className="font-bold text-gray-800 border-b pb-2">Patient Information</h3>
                <div className="space-y-3">
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Name</p>
                        <p className="text-sm font-semibold text-gray-700">{patient.name}</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">ID</p>
                        <p className="text-sm font-semibold text-gray-700">{patient.id}</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-bold">Age</p>
                            <p className="text-sm font-semibold text-gray-700">{patient.age}</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-bold">Sex</p>
                            <p className="text-sm font-semibold text-gray-700">{patient.sex}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Phone</p>
                        <p className="text-sm font-semibold text-gray-700">{patient.phone}</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h3 className="font-bold text-gray-800 border-b pb-2">Dose Information</h3>
                <div className="space-y-4">
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Doses Administered</p>
                        <p className="text-3xl font-bold text-emerald-600">{patient.dosesAdministered}</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Last Dose</p>
                        <p className="text-sm font-semibold text-gray-700">{patient.lastDoseDate}</p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-bold">
                            <span className="text-gray-400 uppercase">Progress</span>
                            <span className="text-emerald-600">{patient.dosesAdministered}/{patient.totalDoses} (100%)</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full transition-all" style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};