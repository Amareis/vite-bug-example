import 'firebase/app'
import('firebase/app')
import('firebase/messaging')

const t: any = 'var029767417596249235'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
