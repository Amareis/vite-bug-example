import 'mobx'
import '/shared/event-emitter'
import '/shared/utils/_other'

const t: any = 'var7216226800342387'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
