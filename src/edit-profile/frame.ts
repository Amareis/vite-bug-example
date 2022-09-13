import 'lodash-es'
import 'mobx'
import 'mobx-keystone'
import 'react'
import '/shared/actions-service'
import '/shared/locales'
import '/shared/modals/confirmation'
import '/shared/utils/dispose'
import '/api-types'
import '/client'
import '/env-actions'
import '/image-file'
import '/nav-service'
import '/process-avatar'
import '/report-content'
import '/server-settings'
import '/user-info'
import '/user-profile/sammy-log-out.png'
import './models'
import './ops'
import './select-job'
import './select-location'

const t: any = 'var3563266926140847'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
