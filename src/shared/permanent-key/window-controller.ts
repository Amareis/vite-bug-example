import 'broadcast-channel'
import '/shared/event-emitter'

const t: any = 'var32394540688573414'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
