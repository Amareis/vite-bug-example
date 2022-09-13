import 'date-fns'
import 'date-fns/locale/ru'
import './date-type'

const t: any = 'var174697351962241'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
