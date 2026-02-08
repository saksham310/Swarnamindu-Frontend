type StatusColorMap = Record<string, string>

interface StatusBadgeProps {
    status: string
    colors: StatusColorMap
}

export function StatusBadge({ status, colors }: StatusBadgeProps) {
    const colorClasses =
        colors[status] ?? 'bg-gray-100 text-gray-800'

    return (
        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClasses}`}>
            {status}
        </span>
    )
}
