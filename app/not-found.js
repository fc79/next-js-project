import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center">
            <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
            <p className="mb-4 text-lg text-gray-600">صفحه‌ای که به دنبال آن هستید پیدا نشد 😪</p>
            <div className="animate-bounce">
                <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
            </div>
            <button className="mt-5">
                <Link
                    href="/"
                    className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                        برگشت به خانه
                    </span>
                </Link>
            </button>
            </div>
    );
}