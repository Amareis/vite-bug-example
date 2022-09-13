import 'mobx'
import '/shared/locales'
import '/shared/refs'
import '/shared/utils/signal'
import '/api-types'
import '/client'
import '/nav-service'
import '/reviews/full-review'
import '/reviews/upsert-review'
import '/user-info'
import '/user-profile'
import './ops'

const t: any = 'var925321130816104'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
