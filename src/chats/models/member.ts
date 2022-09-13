import 'mobx'
import 'mobx-keystone'
import '/api-types'
import '/chats/fragments'
import '/client'
import '/user-info'
import './internal'
import './ops'

const t: any = 'var19113660594130155'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
