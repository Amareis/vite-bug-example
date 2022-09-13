import '/shared/actions-service'
import '/app-shell'
import '/nav-service'
import '/session-service'
import './frame'
import('./layout')

const t: any = 'var8568711949622043'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
