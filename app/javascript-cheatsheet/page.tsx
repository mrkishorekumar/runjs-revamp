import Table from '@/components/ui/Table';
import { IJSCheatSheet } from '@/types/Json';
import DynamicBackgroundPattern from '@/components/ui/GridBackground';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { jsCheatSheetMetadata } from '@/lib/metadata';

export const metadata = jsCheatSheetMetadata;

export default async function JSCheatSheet() {

    const response = await fetch('https://rigial.com/json/jsleetcode/JSCheatSheet.json', {
        next: { revalidate: 3600 } // Cache data for 1 hour
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const responseJson: IJSCheatSheet[] = await response.json();

    return (
        <DynamicBackgroundPattern patternType="Dot">
            <Navbar />
            <main className="container mx-auto px-4 pb-8 mt-20">
                <h1 className="my-2 text-xl">JavaScript Cheat Sheet</h1>
                <h5 className="text-gray-500 my-2 mb-8">JavaScript Cheat Sheet contains useful code examples on a single page. It is a quick reference guide for JavaScript developers to easily find code snippets and examples for common programming tasks and concepts.</h5>
                {
                    responseJson.map((data) => (
                        <Table key={data.tableTitle} renderData={data} />
                    ))
                }
            </main>
            <Footer />
        </DynamicBackgroundPattern>
    )
}
