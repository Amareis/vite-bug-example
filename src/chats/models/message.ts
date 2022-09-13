import 'date-fns'
import 'lodash-es'
import 'mobx'
import 'mobx-keystone'
import 'mobx-utils'
import '/shared/utils/_other'
import '/shared/utils/dispose'
import '/chats/fragments'
import '/image-file'
import '/server-settings'
import '/user-info'
import './internal'
import './ops'

const t: any = 'var2235700390941131'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
