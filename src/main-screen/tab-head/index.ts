import 'mobx'
import '/shared/locales'
import '/shared/page-status'
import '/shared/utils/dispose'
import './alert_favicon.png'

const t: any = 'var8823679286366626'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
