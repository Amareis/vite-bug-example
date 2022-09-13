import 'lodash-es'
import 'mobx'
import '/shared/utils/_other'

const t: any = 'var2603941613500198'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
