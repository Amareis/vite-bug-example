import '/nav-service'
import './frame'
import './list'

const t: any = 'var44833844567212067'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
