import '/shared/actions-service'
import '/shared/event-emitter'
import '/nav-service'
import './check-sms'
import './get-phone'
import './onboarding'

const t: any = 'var7849173030330983'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
