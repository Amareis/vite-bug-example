import 'lodash-es'
import 'mobx'
import '/shared/locales'
import '/shared/utils/wait'
import '/chats/models'
import '/client'
import '/image-file'
import '/user-info'
import './ops'

const t: any = 'var7920294616873313'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
