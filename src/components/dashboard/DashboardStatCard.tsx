interface DashboardStatCardProps {
    title: string;
    value: number | string;
    unit: string;
    subText?: string;
    valueColorClass?: string;
}

export const DashboardStatCard = ({
    title,
    value,
    unit,
    subText,
    valueColorClass = "text-gray-900",
}: DashboardStatCardProps) => {
    return (
        <div className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xs font-semibold uppercase text-gray-500">{title}</h3>
            <div className="flex items-baseline gap-1">
                <span className={`text-4xl font-bold ${valueColorClass}`}>{value}</span>
                <span className="text-base text-gray-600">{unit}</span>
            </div>
            {subText && <p className="text-xs text-gray-500">{subText}</p>}
        </div>
    );
};