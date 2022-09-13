import 'mobx'
import '/shared/locales'
import '/shared/utils/dispose'
import '/shared/utils/signal'
import '/invite-user/actions'
import '/nav-service'
import '/phone-book'
import '/phone-book/filter-contacts'
import '/phone-book/select-contact'
import '/user-profile'

const t: any = 'var7847084436077387'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
