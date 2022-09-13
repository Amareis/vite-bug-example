import '../api-types/types.js'
import '/api-types/operation'

const t: any = 'var32687053802708643'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
