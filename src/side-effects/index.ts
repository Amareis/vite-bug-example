import './send-socket-status'
import './show-offline-alarm'

const t: any = 'var5847056879571471'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
