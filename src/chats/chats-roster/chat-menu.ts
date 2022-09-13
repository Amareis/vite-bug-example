import 'scroll-into-view-if-needed'
import '/shared/locales'
import '/shared/modals/confirmation'
import '/shared/show-snack'
import '/chats/models'
import '/ui-kit/action'
import '/ui-kit/bottom-list'
import './disable-notifications'
import './frame'
import './leave.png'

const t: any = 'var3672530071718514'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
