import 'mobx'
import '/shared/ua'
import '/shared/utils/_other'
import '/env'

const t: any = 'var29149775836985437'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
