import { uuid } from 'analytics-utils'

const key = '__session'

export function getSession(create = true, extend = true, ttl = 30) {
    const value = sessionStorage.getItem(key)

    const session = parseSession(value, ttl)

    if (!session) {
        if (!create) {
            return undefined
        }

        const fresh = createSession()

        setSession(fresh)

        return fresh
    }
    
    if (!extend) {
        return session
    }

    const extended = extendSession(session)

    setSession(extended)

    return extended
}

export function clearSession() {
    sessionStorage.removeItem(key)
}

function setSession(session) {
    sessionStorage.setItem(key, JSON.stringify(session))
}

function parseSession(value, ttl) {
    if (!value) {
        return undefined
    }

    try {
        const session = JSON.parse(value)

        const expired = unixTimestamp() >= session.modified + ttl * 60
        
        return expired ? undefined : session
    } catch {
        return undefined
    }
}

function createSession() {
    const timestamp = unixTimestamp()

    return ({
        id: uuid(),
        created: timestamp,
        modified: timestamp,
    })
}

function extendSession(session) {
    return {
        ...session,
        modified: unixTimestamp(),
    }
}

function unixTimestamp() {
    return Math.floor(Date.now() * 1e-3)
}
