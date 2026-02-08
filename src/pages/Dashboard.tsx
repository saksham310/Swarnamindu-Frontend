import { useNavigate } from "react-router-dom";
import { RecentDataTable } from "../components/dashboard/RecentDataTable";
import { DashboardStatCard } from "../components/dashboard/DashboardStatCard";
import { registrationColumns, screeningColumns } from "../constants/table-columns.constants";
import type { RecentRegistration, RecentScreening } from "../interface/recent-data.interface";
import { UserPlus, Search } from "lucide-react";
import { useGetRecentActivity } from "@/hooks/useGetRecentActivity";

const Dashboard = () => {
    const navigate = useNavigate();

    const {
        data,
        isLoading,
        isError,
    } = useGetRecentActivity();


    const registrations = data?.registrations ?? [];
    const screenings = data?.screenings ?? [];

    const handleRegisterNewPatient = () => {
        navigate("/register");
    };

    const handleSearchPatient = () => {
        navigate("/patients/search");
    };

    const handleRecentRegistrationClick = (patient: RecentRegistration) => {
        navigate(`/patient/${patient.id}`);
    };

    const handleRecentScreeningClick = (screening: RecentScreening) => {
        navigate(`/screening/${screening.id}`);
    };

    if (isLoading) {
        return <p className="text-sm text-gray-500">Loading dashboard...</p>;
    }

    if (isError) {
        return <p className="text-sm text-red-600">Failed to load dashboard data</p>;
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500">Screening operations overview</p>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-4">
                <button
                    onClick={handleRegisterNewPatient}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-colors"
                >
                    <UserPlus size={20} /> Register New Patient
                </button>

                <button
                    onClick={handleSearchPatient}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-800 font-semibold rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                    <Search size={20} /> Search Patient & Screen
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <DashboardStatCard
                    title="PATIENTS REGISTERED TODAY"
                    value={12}
                    unit="patients"
                    subText="+12 today"
                    valueColorClass="text-emerald-600"
                />
                <DashboardStatCard
                    title="SCREENINGS COMPLETED TODAY"
                    value={8}
                    unit="screenings"
                    subText="8 pending"
                    valueColorClass="text-gray-900"
                />
                <DashboardStatCard
                    title="PENDING SYNC ITEMS"
                    value={0}
                    unit="items"
                    subText="All synced"
                    valueColorClass="text-gray-500"
                />
            </div>

            <RecentDataTable
                title="Recent Registrations"
                data={registrations}
                columns={registrationColumns}
                getRowKey={(row) => row.id}
                onRowClick={handleRecentRegistrationClick}
            />

            <RecentDataTable
                title="Recent Screenings"
                data={screenings}
                columns={screeningColumns}
                getRowKey={(row) => row.id}
                onRowClick={handleRecentScreeningClick}
            />
        </div>
    );
};

export default Dashboard;
