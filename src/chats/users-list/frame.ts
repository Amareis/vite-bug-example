import 'mobx'
import 'mobx-utils'
import '/shared/event-emitter'
import '/shared/locales'
import '/shared/modals/confirmation'
import '/shared/utils/dispose'
import '/api-types'
import '/chats/models'
import '/client'
import '/nav-service'
import '/session-service'
import '/trusted-users'
import '/user-info'
import './ops'
import('./invite-and-select')

const t: any = 'var22326862921449964'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
