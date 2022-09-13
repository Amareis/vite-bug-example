import 'date-fns'
import 'lodash-es'
import 'mobx'
import 'mobx-keystone'
import 'mobx-utils'
import '/shared/utils/deunion'
import '/shared/utils/dispose'
import '/api-types'
import '/chats/fragments'
import '/server-settings'
import '/session-service'
import './internal'
import './ops'

const t: any = 'var856934504436887'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
