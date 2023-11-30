import uniqid from 'uniqid';

(function() {
    const payloadBase = {
        id: uniqid(),
        title: document.title,
        url: document.location.href,
        referrer: document.referrer,
    }

    const payloadString = (extra) => {
        return JSON.stringify({ ...payloadBase, ...extra })
    }

    const sendPayload = (extra) => {
        const url = '/!/analytics/event'
        const payload = payloadString(extra)

        if ('sendBeacon' in navigator) {
            navigator.sendBeacon(url, payload)
        } else {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: payload,
            });
        }
    }

    window.addEventListener('load', () => {
        sendPayload({ type: 'load' })
    })

    if ('hidden' in document) {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                sendPayload({ type: 'unload' })
            }
        })
    } else {
        window.addEventListener('pagehide', () => {
            sendPayload({ type: 'unload' })
        })
    }
})()
