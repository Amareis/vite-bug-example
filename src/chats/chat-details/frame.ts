import 'lodash-es'
import 'mobx'
import 'mobx-keystone'
import '/shared/locales'
import '/shared/modals/confirmation'
import '/shared/refs'
import '/shared/utils/dispose'
import '/shared/utils/signal'
import '/api-types'
import '/chats/fragments'
import '/chats/models'
import '/client'
import '/env-actions'
import '/nav-service'
import '/server-settings'
import '/ui-kit/action'
import './edit-details'
import './ops'

const t: any = 'var019600933267327925'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
