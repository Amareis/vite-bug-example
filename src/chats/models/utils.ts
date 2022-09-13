import '/shared/utils/dispose'
import '/api-types/operation'
import '/client'
import '/client/pubsub'

const t: any = 'var20006799804602626'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
