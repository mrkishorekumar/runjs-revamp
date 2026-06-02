import Footer from "@/components/ui/Footer";
import DynamicBackgroundPattern from "@/components/ui/GridBackground";
import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import { memo } from "react";
import { notFoundMetadata } from "@/lib/metadata";

export const metadata = notFoundMetadata;

function NotFound() {
    return (
        <DynamicBackgroundPattern patternType="Mask">
            <section className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex flex-1 items-center justify-center px-4">
                    <div className="max-w-md text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-auto size-20 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"></path>
                        </svg>

                        <h2 className="mt-6 text-2xl font-bold text-gray-900">Page Not Found</h2>

                        <p className="mt-4 text-pretty text-gray-700">
                            The page you are looking for does not exist or has been moved.
                        </p>

                        <Link href="/" type="button" className="mt-6 block w-full rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700">
                            Go to Homepage
                        </Link>

                        <p className="mt-6 text-sm text-gray-700">
                            <Link href="/report-issue" className="underline hover:text-gray-900">Report an issue</Link> or {" "}
                            <Link href="/contact-us" className="underline hover:text-gray-900">Contact Us</Link>
                        </p>
                    </div>
                </main>
                <Footer />
            </section>
        </DynamicBackgroundPattern>
    )
}


export default memo(NotFound);
