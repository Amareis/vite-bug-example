import '../api-types/types.js'
import '/api-types/operation'
import '../api-types/ops'

const t: any = 'var4931064194140089'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
