import { useNavigate } from 'react-router-dom';
import { Search, UserPlus, ArrowLeft, AlertCircle } from 'lucide-react';

export const PatientNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 animate-in fade-in zoom-in duration-300">
            <div className="relative mb-6">
                <div className="bg-gray-100 p-8 rounded-full">
                    <Search size={64} className="text-gray-300" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md border border-gray-100">
                    <AlertCircle size={24} className="text-orange-500" />
                </div>
            </div>

            <div className="text-center max-w-md space-y-3">
                <h2 className="text-2xl font-bold text-gray-800">Patient Not Found</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                    We couldn't find any patient record matching
                    Please check the ID or QR code and try again.
                </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                <button
                    onClick={() => navigate(-1)}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                >
                    <ArrowLeft size={18} />
                    Go Back
                </button>

                <button
                    onClick={() => navigate('/register')}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl shadow-md hover:bg-emerald-700 active:scale-95 transition-all"
                >
                    <UserPlus size={18} />
                    Register New
                </button>
            </div>

            {/* Optional Help Text */}
            <p className="mt-8 text-xs text-gray-400">
                Need help? Contact the <span className="underline cursor-pointer">Admin Support</span>
            </p>
        </div>
    );
};