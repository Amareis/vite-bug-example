import 'clipboard-polyfill'
import '/shared/show-snack'
import '/env-actions/media_picker'
import '/env-actions/web-push'

const t: any = 'var8562933608991086'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
