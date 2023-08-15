import Analytics from 'analytics'
import { getSession } from './session'

/* Initialize analytics */
const analytics = Analytics({
    app: 'Statamic Analytics',
    // version: 100,
    // plugins: []
})

const session = getSession()

/* Track a page view */
analytics.page({ session })

// analytics.identify(new Date().toISOString())

analytics.on('page', ({ payload }) => {
    // console.log('page event', event)
    console.log('payload', JSON.stringify(payload))

    fetch('/!/analytics/event', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

})
