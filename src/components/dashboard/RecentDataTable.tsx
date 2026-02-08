import React from "react";

export interface TableColumn<T> {
    header: string;
    accessor: keyof T | ((row: T) => React.ReactNode);
    className?: string;
}

export interface RecentDataTableProps<T> {
    title: string;
    data: T[];
    columns: TableColumn<T>[];
    getRowKey: (row: T) => React.Key;
    emptyMessage?: string;
    onRowClick?: (row: T) => void;
}

export const RecentDataTable = <T,>({
    title,
    data,
    columns,
    getRowKey,
    emptyMessage = "No data available",
    onRowClick,
}: RecentDataTableProps<T>) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                {title}
            </h2>

            {data.length === 0 ? (
                <p className="text-gray-500 text-sm italic">
                    {emptyMessage}
                </p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {columns.map((column, index) => (
                                    <th
                                        key={index}
                                        className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${column.className ?? ""}`}
                                    >
                                        {column.header}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {data.map((row) => (
                                <tr
                                    key={getRowKey(row)}
                                    onClick={() => onRowClick?.(row)}
                                    className={`transition-colors hover:bg-gray-50 ${onRowClick ? "cursor-pointer" : ""
                                        }`}
                                >
                                    {columns.map((column, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`px-6 py-4 whitespace-nowrap text-sm text-gray-800 ${column.className ?? ""}`}
                                        >
                                            {typeof column.accessor === "function"
                                                ? column.accessor(row)
                                                : (row[column.accessor] as React.ReactNode)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
