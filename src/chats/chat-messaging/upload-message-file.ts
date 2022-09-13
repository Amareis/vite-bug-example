import 'abort-controller'
import 'uuid'
import '/api-types'
import '/chats/fragments'
import '/chats/models'
import '/upload-file'

const t: any = 'var36568257790490244'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
