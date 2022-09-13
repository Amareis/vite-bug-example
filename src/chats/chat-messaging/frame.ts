import 'date-fns'
import 'linkifyjs'
import 'lodash-es'
import 'mobx'
import 'mobx-keystone'
import 'uuid'
import '/shared/actions-service'
import '/shared/locales'
import '/shared/modals/confirmation'
import '/shared/refs'
import '/shared/show-snack'
import '/shared/user-status'
import '/shared/utils/_other'
import '/shared/utils/dispose'
import '/shared/utils/signal'
import '/shared/utils/split-unicode'
import '/api-types'
import '/chats/chat-details'
import '/chats/fragments'
import '/chats/models'
import '/client'
import '/nav-service'
import '/report-content'
import '/server-settings'
import '/session-service'
import '/user-info'
import './ops'
import './save-permanent'
import './sending-alert'
import './upload-message-file'

const t: any = 'var6990872690869572'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
