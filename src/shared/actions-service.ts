import 'mobx-react'
import 'react'
import '/shared/event-emitter'

const t: any = 'var5124023035046192'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
