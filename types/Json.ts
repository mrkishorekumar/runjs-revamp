export interface IJSCheatSheet {
    tableTitle: string
    tableDescription?: string
    columns: Column[]
    rows: Row[]
}

export interface Column {
    key: keyof Row
    label: string
}

export interface Row {
    method: string
    description: string
    syntax: string
    example: string
}
