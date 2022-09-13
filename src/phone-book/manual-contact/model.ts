import 'mobx'
import '/shared/locales'
import '/shared/modals/select-country'
import '/shared/utils/dispose'
import '/shared/utils/phones'
import '/env-actions'
import '../select-contact'

const t: any = 'var6656504277893585'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
