import Link from 'next/link';

export default function RootNotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Page Not Found
            </h2>
            <p className="text-gray-600 mb-8 text-center">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark/90 transition-colors"
            >
                Try again later.
            </Link>
        </div>
    );
} 