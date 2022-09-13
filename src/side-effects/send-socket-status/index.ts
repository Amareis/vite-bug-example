import 'mobx'
import '/shared/page-status'
import '/shared/utils/dispose'
import '/client'
import '/server-settings'
import '/session-service'
import './ops'

const t: any = 'var6645474824132505'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
