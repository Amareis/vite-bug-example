import 'mobx'
import '/shared/utils/_other'
import '/shared/utils/dispose'
import './frame'

const t: any = 'var20628365145418837'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
