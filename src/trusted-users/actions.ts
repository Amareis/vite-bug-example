import '/shared/actions-service'
import '/client'
import './ops'
import './view'

const t: any = 'var2704756386460312'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
