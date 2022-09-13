import './types.js'
import '/api-types/operation'

const t: any = 'var22864121850941865'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
