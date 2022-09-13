import 'mobx'
import '/shared/utils/_other'
import './ru'
import('./ru')

const t: any = 'var793489603431389'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
