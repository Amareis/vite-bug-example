import '../api-types/types.js'
import '/api-types/operation'

const t: any = 'var6114469016905646'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
