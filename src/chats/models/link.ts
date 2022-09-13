import 'mobx'
import 'mobx-keystone'
import '/shared/utils/dispose'
import '/chats/fragments'
import './internal'
import './ops'

const t: any = 'var38657714152653955'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
