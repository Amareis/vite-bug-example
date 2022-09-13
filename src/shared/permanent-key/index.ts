import 'lodash-es'
import 'mobx'
import 'mobx-keystone'
import '/shared/utils/_other'
import '/shared/utils/dispose'
import './clear'
import './shared-key'

const t: any = 'var8904359941230171'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
