import 'mobx'
import '/shared/utils/_other'
import '/env'
import './history-stack'
import './matcher'

const t: any = 'var6232295962205099'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
