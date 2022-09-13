import 'lodash-es'
import 'mobx'
import '/shared/locales'
import '/shared/page-status'
import '/shared/refs'
import '/shared/utils/_other'
import '/shared/utils/dispose'
import '/shared/utils/signal'
import '/chats/chat-messaging'
import '/chats/fragments'
import '/chats/models'
import '/chats/users-list'
import '/client'
import '/nav-service'
import '/ui-kit/bottom-list'
import './create-group'
import './ops'
import './search'
import './water_droplet.mp3'
import '.'

const t: any = 'var9291774114604441'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
