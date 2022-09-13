import '/nav-service'
import '../details'
import('./block')

const t: any = 'var23918227659222135'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
