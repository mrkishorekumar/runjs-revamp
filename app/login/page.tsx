import SocialMediaLogin from '@/components/core/SocialMediaLogin'
import Footer from '@/components/ui/Footer'
import DynamicBackgroundPattern from '@/components/ui/GridBackground'
import Navbar from '@/components/ui/Navbar'
import { memo } from 'react'
import { loginMetadata } from '@/lib/metadata'

export const metadata = loginMetadata;

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
