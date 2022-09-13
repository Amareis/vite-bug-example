import '/nav-service'
import('./block')
import('./create-profile')

const t: any = 'var5737845234435874'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
