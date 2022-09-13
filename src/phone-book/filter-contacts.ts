import 'mobx'
import '/shared/locales'
import './select-contact'

const t: any = 'var3717477763058541'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
