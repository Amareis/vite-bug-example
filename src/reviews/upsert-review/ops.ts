import '../../api-types/types.js'
import '/api-types/operation'
import '../../phone-book/ops'
import '../../api-types/ops'
import '../../user-profile/ops'

const t: any = 'var15115288928605408'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
