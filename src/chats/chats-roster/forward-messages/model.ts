import 'mobx'
import '/shared/locales'
import '/shared/modals/confirmation'
import '/shared/utils/dispose'
import '/chats/models'
import '/client'
import '/server-settings'
import '../frame'
import './ops'

const t: any = 'var5422128312112124'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
