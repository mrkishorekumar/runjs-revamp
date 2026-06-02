import { IJSCheatSheet } from '@/types/Json'
import { memo } from 'react'

function Table({ renderData, showSearchInput }: { renderData: IJSCheatSheet; showSearchInput?: boolean }) {

    return (
        <section className="mb-10 pb-10">
            <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
                <div>
                    {renderData.tableTitle ? <h3 className="text-lg font-bold text-black">{`${renderData.tableTitle} Methods`}</h3> : null}
                    {renderData.tableDescription ? <p className="text-slate-500">{renderData.tableDescription}</p> : null}
                </div>
                {showSearchInput && <div className="ml-3">
                    <div className="w-full max-w-sm min-w-50 relative">
                        <div className="relative">
                            <input
                                className="w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                placeholder="Search for methods..."
                            />
                            <button
                                className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                                type="button"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-8 h-8 text-slate-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>}
            </div>

            <div className="relative flex flex-col w-full h-full overflow-auto text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            {
                                renderData?.columns?.map((column) => (
                                    <th key={column?.key} className="p-4 border-b border-slate-300 bg-slate-50">
                                        <p className="block text-sm font-normal leading-none text-slate-500">
                                            {column?.label}
                                        </p>
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {renderData?.rows?.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-slate-50 border-b border-slate-200">
                                {renderData.columns.map((column) => (
                                    <td key={column.key} className="px-4 py-3 text-sm text-slate-700 whitespace-normal">
                                        {row[column.key] != null ? String(row[column.key]) : '—'}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default memo(Table)