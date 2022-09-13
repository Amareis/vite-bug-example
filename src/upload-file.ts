import 'mobx'
import '/shared/utils/_other'
import '/api-types'
import '/client'
import '/server-settings'

const t: any = 'var9070466487503508'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
