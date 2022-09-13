import 'lodash-es'
import '/shared/utils/_other'

const t: any = 'var8156742870732889'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
