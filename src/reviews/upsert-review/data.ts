import 'mobx'
import 'uuid'
import '/api-types'
import '/phone-book'
import '/phone-book/select-contact'
import '/server-settings'

const t: any = 'var8993802776988198'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
