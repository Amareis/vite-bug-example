import 'mobx'
import '/shared/locales'
import '/shared/refs'
import '/shared/utils/dispose'
import '/shared/utils/signal'
import '/api-types'
import '/client'
import '/invite-user'
import '/nav-service'
import '/session-service'
import '/user-info'
import './actions'
import './ops'

const t: any = 'var2922401271553261'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
