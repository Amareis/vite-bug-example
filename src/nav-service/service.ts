import 'mobx'
import '/shared/frames-service'
import '/shared/frames-service'
import '/shared/overlays-service'
import '/shared/utils/_other'
import '/shared/utils/wait'
import '/client'
import '/env'
import '/sentry'
import './nav-frame'
import './router'

const t: any = 'var8683956535163291'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
