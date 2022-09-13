import 'mobx'
import '/client'
import './ops'

const t: any = 'var5611553867774122'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
