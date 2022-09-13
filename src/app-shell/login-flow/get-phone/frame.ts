import 'mobx'
import '/shared/actions-service'
import '/shared/event-emitter'
import '/shared/locales'
import '/shared/modals/select-country'
import '/shared/utils/dispose'
import '/shared/utils/phones'
import '/app-info'
import '/nav-service'

const t: any = 'var4483388058374609'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
