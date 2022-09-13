import '@material-ui/core/ClickAwayListener'
import 'mobx'
import 'mobx-react'
import 'react'
import '/shared/locales'
import '/shared/modals/confirmation'
import '/shared/screen-mode'
import '/api-types'
import '/chats/chat-message'
import '/chats/models'
import '/server-settings'
import '/ui-kit/Box'
import '/ui-kit/Line'
import '/user-info'
import './EditHeader'
import './files-area'
import './Input'
import './styles.css'
import './typing-block'
import './users-list'
import '../frame'

const t: any = 'var0819977942814063'

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