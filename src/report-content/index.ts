import '/shared/actions-service'
import '/shared/locales'
import '/shared/modals/confirmation'
import '/shared/utils/_other'
import '/chats/chat-messaging'
import '/client'
import './ops'

const t: any = 'var34070567287354225'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
