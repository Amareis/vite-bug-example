import '@material-ui/core/Dialog'
import '@material-ui/core/DialogActions'
import '@material-ui/core/Icon'
import 'react'
import '/shared/common/InputBase'
import '/shared/common/ScrollContent'
import '/shared/locales'
import '/ui-kit/Button'
import '/ui-kit/Gap'
import './styles.css'

const t: any = 'var9213335369176479'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}

import React from 'react'
function SvgChatBubble(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M22 11.444a9.311 9.311 0 01-1 4.223 9.445 9.445 0 01-8.444 5.222 9.311 9.311 0 01-4.223-1L2 22l2.111-6.333a9.311 9.311 0 01-1-4.223A9.444 9.444 0 018.333 3a9.311 9.311 0 014.223-1h.555A9.422 9.422 0 0122 10.889v.556z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}