import Analytics from 'analytics'

/* Initialize analytics */
const analytics = Analytics({
  app: 'Statalytics',
//   version: 100,
//   plugins: []
})

/* Track a page view */
analytics.page()

// analytics.identify(new Date().toISOString())

analytics.on('page', (event) => {
    console.log('page event', event)
    // console.log('payload', payload)
  })
