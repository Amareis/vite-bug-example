import 'mobx'
import '/shared/refs'
import '/client'
import '/image-file'
import './ops'

const t: any = 'var5390754260667827'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
