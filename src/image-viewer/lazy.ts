import '/shared/overlays-service'
import './modal'
import './model'

const t: any = 'var8079006942013018'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
