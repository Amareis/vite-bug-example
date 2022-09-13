import 'date-fns'
import 'mobx'
import 'mobx-utils/lib/now'
import '/shared/utils/_other'
import '/shared/utils/dispose'
import '/client'
import '/edit-profile'
import '/nav-service'
import '/session-service'
import '../invite-needed'
import './model'
import './ops'

const t: any = 'var20750327004505809'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
