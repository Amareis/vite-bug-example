import '/nav-service'
import './block'
import './frame'

const t: any = 'var20840747373415303'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
