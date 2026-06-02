import SocialMediaLogin from '@/components/core/SocialMediaLogin'
import Footer from '@/components/ui/Footer'
import DynamicBackgroundPattern from '@/components/ui/GridBackground'
import Navbar from '@/components/ui/Navbar'
import { Metadata } from 'next'
import { memo } from 'react'

export const metadata: Metadata = {
    title: 'Log In to JSLeetCode - Access Your Playgrounds and Save Your Code',
    description: 'Sign in to your JSLeetCode account to securely save your coding playgrounds, track your JavaScript interview preparation progress, and sync your workspace across devices.',
};

function Login() {
    return (
        <DynamicBackgroundPattern patternType="Dot">
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <SocialMediaLogin />
                </main>
                <Footer />
            </div>
        </DynamicBackgroundPattern>
    )
}

export default memo(Login);
