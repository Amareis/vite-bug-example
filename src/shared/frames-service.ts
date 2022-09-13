import 'mobx'
import 'uuid'
import '/shared/event-emitter'
import '/shared/utils/dispose'
import '/shared/utils/signal'
import '/shared/utils/wait'

const t: any = 'var06171031311442143'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
