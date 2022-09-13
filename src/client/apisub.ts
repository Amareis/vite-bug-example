import 'mobx'
import '/api-types/operation'
import '/client'
import './pubsub'

const t: any = 'var8380162993962297'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
