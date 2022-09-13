import 'react-dom'
import '/analytic'
import '/client'
import '/env'
import '/nav-service'
import './model'
import './screen'
import '/side-effects'

const t: any = 'var5842624794180875'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
