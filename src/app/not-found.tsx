import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold">404 | <span className='text-gray-3600 text-3xl'>Not Found</span></h1>
                <p className="text-gray-400 mt-2">Sorry, the page you're looking for does not exist.</p>
                <Link href="/">
                    <span className="text-blue-500 hover:underline mt-4 block">Go back to the home page</span>
                </Link>
            </div>
        </div>
    )
}