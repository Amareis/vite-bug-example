import 'lodash-es'
import 'mobx'
import '/shared/locales'
import '/shared/modals/confirmation'
import '/shared/show-snack'
import '/shared/utils/dispose'
import '/nav-service'
import '/user-profile/details'
import '/user-profile/sammy-log-out.png'

const t: any = 'var3223941460282702'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
