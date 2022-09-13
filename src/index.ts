import 'mobx'
import '/shared/locales'
import '/shared/utils/emulate-context-menu'
import '/client'
import '/env'
import '/sentry'
import '/sync-time'
import('/app-shell')

const t: any = 'var7169003992822862'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
