
window.addEventListener('load', () => {
    const payload = {
        type: 'load',
        title: document.title,
        url: document.location.href,
        // path: document.location.pathname,
        referrer: document.referrer,
    }
    fetch('/!/analytics/event', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
})
