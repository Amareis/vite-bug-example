import 'mobx'
import 'mobx-keystone'
import '/api-types'
import '/chats/fragments'

const t: any = 'var7667865088767785'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
