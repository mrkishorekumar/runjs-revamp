export function getFirebaseAuthCode(err: unknown) {
    if (err && typeof err === 'object') {
        const code = (err as any).code
        if (typeof code === 'string') {
            const parts = code.split('/')
            return parts.length > 1 ? parts[1] : code
        }
        // try to extract from message like "Firebase: Error (auth/xxx)."
        const msg = (err as any).message
        if (typeof msg === 'string') {
            const m = msg.match(/auth\/[A-Za-z0-9-_.]+/)
            if (m) return m[0].split('/')[1]
        }
    }
}


export function sanitizeErrorMessage(err: unknown): string {
    const raw = err instanceof Error ? err.message : String(err ?? '')
    // Try to extract auth code from parentheses: "(auth/code)"
    const authMatch = raw.match(/\(auth\/[A-Za-z0-9-_.]+\)/)
    if (authMatch) {
        const m = authMatch[0].replace(/[()]/g, '')
        const parts = m.split('/')
        return parts.length > 1 ? parts[1] : m
    }
    // Strip common prefixes like "Firebase: Error" and leading separators
    let s = raw.replace(/^Firebase:\s*Error\s*/i, '')
    s = s.replace(/^[:\-–—\s]+/, '')
    return s || 'An error occurred'
}