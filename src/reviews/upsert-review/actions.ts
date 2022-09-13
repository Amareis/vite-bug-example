import '/shared/actions-service'
import '/shared/event-emitter'
import '/shared/frames-service'
import '/shared/locales'
import '/shared/modals/confirmation'
import '/client'
import '/invite-user'
import '/phone-book'
import './data'
import './fill-request'
import './fill-review'
import './ops'
import './pre-publish'

const t: any = 'var6349430614293301'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
