import '/shared/locales'
import '/shared/show-snack'
import '/api-types'
import '/env-actions'
import '/upload-file'
import './select-image-area'
import './wrong-avatar-alert'

const t: any = 'var5842207408142821'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
