import '@dessert-box/react'
import 'react'
import './atoms.css'

const t: any = 'var1728618627750269'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
