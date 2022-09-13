import 'lodash-es'
import 'mobx'
import '/shared/utils/dispose'

const t: any = 'var39724157841771834'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
