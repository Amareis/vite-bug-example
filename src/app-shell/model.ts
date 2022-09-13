import 'broadcast-channel'
import 'mobx'
import '/shared/permanent-key/clear'
import '/shared/utils/wait'
import '/app-shell/guest-links'
import '/client'
import '/env-actions'
import '/main-screen'
import '/nav-service'
import '/reviews/reviews-list'
import '/reviews/upsert-review'
import '/sentry'
import '/session-service'
import '/user-profile'
import './login-flow'
import './send-push-token'

const t: any = 'var007040245530709921'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
