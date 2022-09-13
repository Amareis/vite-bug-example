import '/client'
import '/env-actions'
import './ops'

const t: any = 'var668475601714722'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
