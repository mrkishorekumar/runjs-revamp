import React from 'react'

const patterTypeObj: Record<string, string> = {
    Grid: 'absolute inset-0 h-full w-full pointer-events-none bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]',
    Dot: 'absolute inset-0 h-full w-full pointer-events-none bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]',
    Mask: 'absolute inset-0 h-full w-full pointer-events-none bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]',
    BigGrid: 'absolute inset-0 -z-10 h-full w-full pointer-events-none bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'
}

export default function DynamicBackgroundPattern({
    children,
    patternType
}: Readonly<{
    children: React.ReactNode;
    patternType?: keyof typeof patterTypeObj;
}>) {
    return (
        <div className="relative">
            <div className={patterTypeObj[patternType || 'Grid']} />
            {children}
        </div>
    )
}


