import '/shared/utils/dispose'
import '/shared/utils/signal'
import '/client'
import '/invite-user'
import '/nav-service'
import '/trusted-users'
import '/user-info'
import '/user-profile'

const t: any = 'var6347891019406997'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
