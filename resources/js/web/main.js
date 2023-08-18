import Analytics from 'analytics'
import { getSession } from './session'

const analytics = Analytics({
    app: 'Statamic Analytics',
})

analytics.page({
    session: getSession(),
    referrer: document.referrer,
})

analytics.on('page', ({ payload }) => {
    fetch('/!/analytics/event', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
})
