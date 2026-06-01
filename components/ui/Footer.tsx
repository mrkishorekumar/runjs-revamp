import Link from 'next/link'
import { memo } from 'react'

function Footer() {
    return (
        <footer className="w-full">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-gray-700">
                    JSLeetcode — Built by{' '}
                    <Link
                        href="https://www.linkedin.com/in/mrkishorekumar/"
                        className="underline font-medium transition-colors hover:text-gray-900 cursor-pointer"
                        target="_blank"
                        rel="noreferrer"
                    >
                        M R Kishore Kumar
                    </Link>.
                </p>
            </div>
        </footer>
    )
}

export default memo(Footer)