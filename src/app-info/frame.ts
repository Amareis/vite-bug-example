import '/shared/locales'
import '/shared/utils/dispose'
import '/nav-service'

const t: any = 'var3586283303825424'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
