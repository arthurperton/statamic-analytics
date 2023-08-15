import Analytics from 'analytics'

/* Initialize analytics */
const analytics = Analytics({
    // app: 'Statalytics',
    // version: 100,
    // plugins: []
})

/* Track a page view */
analytics.page()

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
