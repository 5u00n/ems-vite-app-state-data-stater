// src/components/loaders/InitialLoader.jsx
export function InitialLoader() {
    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
                <div className="mt-4 text-xl font-semibold text-gray-700">
                    Loading EduSoft...
                </div>
            </div>
        </div>
    );
}