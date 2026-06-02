"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { memo } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider, githubProvider } from '@/lib/firebase-client'
import { toastError } from '@/lib/toast'
import { sanitizeErrorMessage } from '@/utils/firebase-auth-code'

function SocialMediaLogin() {
    const router = useRouter()

    async function handleGoogleLogin() {
        try {
            await signInWithPopup(auth, googleProvider)
            router.push('/')
        } catch (error) {
            console.error('Google login failed', error)
            const message = `Google login failed ${sanitizeErrorMessage(error)}`
            toastError(message)
        }
    }

    async function handleGithubLogin() {
        try {
            await signInWithPopup(auth, githubProvider)
            router.push('/')
        } catch (error) {
            console.error('GitHub login failed', error)
            const message = `GitHub login failed ${sanitizeErrorMessage(error)}`
            toastError(message)
        }
    }

    return (
        <div className="relative container m-auto px-6">
            <div className="m-auto md:w-5/12">
                <div className="rounded-xl bg-white shadow-lg">
                    <div className="p-8">
                        <div className="space-y-4">
                            <h2 className="mb-4 text-2xl text-black font-bold text-center">Log in to access your playgrounds and save your code.</h2>
                            <div className="mb-4 text-gray-600 text-center">
                                <p className="text-xs">Secure authentication to sync your playgrounds. No marketing emails, no personal data sharing.</p>
                            </div>
                        </div>
                        <div className="mt-5 grid space-y-4">
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                className="cursor-pointer group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-black focus:bg-blue-50 active:bg-blue-100">
                                <div className="flex items-center space-x-4 justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 48" className="w-5">
                                        <path fill="#FBBC05" d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.77 23.77 0 0 0 .214 24c0 3.737.867 7.261 2.406 10.388l7.905-6.051A13.95 13.95 0 0 1 9.827 24z" />
                                        <path fill="#EB4335" d="M23.714 10.133c3.311 0 6.302 1.173 8.652 3.093L39.202 6.4C35.036 2.773 29.695.533 23.714.533c-9.287 0-17.269 5.311-21.091 13.071l7.909 6.04c1.822-5.532 7.017-9.511 13.182-9.511z" />
                                        <path fill="#34A853" d="M23.714 37.867c-6.165 0-11.359-3.979-13.182-9.511l-7.909 6.038c3.822 7.761 11.804 13.072 21.091 13.072 5.732 0 11.204-2.035 15.311-5.848l-7.507-5.804c-2.118 1.334-4.785 2.053-7.804 2.053z" />
                                        <path fill="#4285F4" d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804C43.339 37.614 46.145 31.649 46.145 24z" />
                                    </svg>
                                    <span
                                        className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">Continue
                                        with Google
                                    </span>
                                </div>
                            </button>
                            <button
                                type="button"
                                onClick={handleGithubLogin}
                                className="cursor-pointer group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-black focus:bg-blue-50 active:bg-blue-100">
                                <div className="flex items-center space-x-4 justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        className="w-5 text-gray-700" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                        </path>
                                    </svg>
                                    <span
                                        className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">Continue
                                        with Github
                                    </span>
                                </div>
                            </button>
                        </div>
                        <div className="mt-2 space-y-4 py-3 text-gray-600 text-center">
                            <p className="text-xs">By proceeding, you agree to our{" "}
                                <Link href="/terms-of-use" className="underline">Terms of Use</Link>
                                {" "}and confirm you have read our{" "}
                                <Link href="/privacy-policy" className="underline">Privacy and Cookie Statement</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(SocialMediaLogin)