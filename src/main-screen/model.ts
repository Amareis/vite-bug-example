import 'date-fns'
import 'mobx'
import '/shared/utils/dispose'
import '/api-types'
import '/chats/chat-messaging'
import '/chats/chats-roster'
import '/client'
import '/edit-profile'
import '/nav-service'
import '/reviews/search-reviews'
import '/trusted-users'
import '/user-profile'
import './ops'
import './tab-head'

const t: any = 'var10018509707342615'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
