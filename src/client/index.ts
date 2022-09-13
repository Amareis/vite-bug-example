import 'graphql'
import 'graphql-http'
import 'graphql-ws'
import 'mobx'
import '/shared/utils/backoff'
import '/shared/utils/unwrapPromise'
import '/api-types/operation'
import './apisub'
import './pubsub'

const t: any = 'var7533522286464669'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
