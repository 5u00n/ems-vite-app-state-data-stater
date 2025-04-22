// src/components/loaders/PageLoader.jsx
export function PageLoader() {
    return (
        <div className="fixed top-0 left-0 right-0 h-1 z-50">
            <div className="h-full bg-blue-500 animate-progressBar"></div>
        </div>
    );
}