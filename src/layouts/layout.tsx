import type { User } from "@/interface/user.interface";
import { UserRole } from "@/constants/user.constants";
import { DesktopNavbar } from "@/components/navigation/DesktopNavbar";
import { MobileNavbar } from "@/components/navigation/MobileNavbar";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const mockUser: User = { name: "Prem Kumar", role: UserRole.USER };

export const AppLayout = () => {
    const navigate = useNavigate();

    const handleNewRegistration = () => {
        navigate('/register');
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB]">
            <DesktopNavbar user={mockUser} onLogout={() => console.log('logout')} />

            <main className="max-w-7xl mx-auto px-4 py-6 md:px-8 md:py-10 pb-24 md:pb-10">
                <Outlet />
            </main>

            <MobileNavbar user={mockUser} onActionClick={handleNewRegistration} />
        </div>
    );
};