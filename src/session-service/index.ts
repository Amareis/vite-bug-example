import 'date-fns'
import 'mobx'
import 'mobx-utils'
import '/shared/utils/dispose'
import '/client'
import './ops'

const t: any = 'var8729252446765592'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
