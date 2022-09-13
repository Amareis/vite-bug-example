import 'mobx'
import 'mobx-react'
import 'react'
import 'uuid'
import '/shared/utils/dispose'

const t: any = 'var7770654648177295'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
