import 'lodash-es'
import 'mobx'
import '/shared/actions-service'
import '/api-types'
import '/client'
import '/env-actions'
import '/phone-book/manual-contact'
import '/user-info'
import './ops'

const t: any = 'var5935341344476492'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
