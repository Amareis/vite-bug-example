import '/shared/event-emitter'
import '/shared/utils/dispose'
import '/shared/utils/signal'
import '/client'
import '/nav-service'
import '/phone-book'
import './data'
import './header'
import './ops'

const t: any = 'var8243322628060152'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
