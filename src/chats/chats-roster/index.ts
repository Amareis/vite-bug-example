import '/nav-service'
import('./list')
import('./list')
import('./forward-messages')

const t: any = 'var729397639809036'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
