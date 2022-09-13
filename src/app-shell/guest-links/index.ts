import '/client'
import '/nav-service'
import './guest-info'

const t: any = 'var3981023432204487'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
