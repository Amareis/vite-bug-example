import '/shared/utils/dispose'
import '/shared/utils/signal'

const t: any = 'var35252322847940887'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
