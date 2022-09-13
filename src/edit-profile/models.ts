import 'mobx'
import 'mobx-keystone'
import '/api-types'

const t: any = 'var682309556490516'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
