import 'libphonenumber-js'
import 'libphonenumber-js/examples.mobile.json'
import '/shared/locales'

const t: any = 'var6471758285044402'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
