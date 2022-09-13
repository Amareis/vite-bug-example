import 'mobx'
import '/shared/locales'
import '/shared/utils/dispose'
import '/shared/utils/signal'
import '/api-types'
import '/app-info'
import '/app-shell'
import '/client'
import '/edit-profile'
import '/env-actions'
import '/invite-user'
import '/nav-service'
import '/report-content'
import '/reviews/full-review'
import '/reviews/upsert-review'
import '/session-service'
import '/trusted-users'
import '/ui-kit/action'
import '/user-info'
import './details'
import './edit-detail'
import './logout'
import './ops'

const t: any = 'var6922658147011651'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
