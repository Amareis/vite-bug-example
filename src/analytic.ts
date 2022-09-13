import 'lodash-es'
import 'mobx'
import '/shared/actions-service'
import '/app-shell'
import '/env'
import '/nav-service'
import '/sentry'
import '/user-info'
import ('amplitude-js')

const t: any = 'var33488353093632384'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
