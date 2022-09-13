import 'mobx'
import 'mobx-keystone'
import '/shared/permanent-key'
import '/shared/utils/dispose'
import '/chats/models'
import './frame'

const t: any = 'var27571212576265136'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
