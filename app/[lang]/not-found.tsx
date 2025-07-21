import Link from 'next/link';
import { getDictionary } from './dictionaries';

export default async function NotFound({ params }: {
    params: { lang: string }
}) {
    const lang = (await params)?.lang;
    const dictionary = await getDictionary(lang);

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                {dictionary.notFound.title}
            </h2>
            <p className="text-gray-600 mb-8 text-center">
                {dictionary.notFound.description}
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
                {dictionary.notFound.backHome}
            </Link>
        </div>
    );
} 