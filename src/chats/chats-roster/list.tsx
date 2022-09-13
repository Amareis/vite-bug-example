import '@dnd-kit/core'
import '@dnd-kit/modifiers'
import '@dnd-kit/sortable'
import '@dnd-kit/utilities'
import 'mobx-react'
import 'mobx-react-lite'
import 'react'
import '/shared/locales'
import '/shared/screen-mode'
import '/shared/utils/_other'
import '/chats/chat-messaging'
import '/chats/models'
import '/collection-loader'
import '/ui-kit/Box'
import '/ui-kit/Gap'
import '/ui-kit/Line'
import './empty-archive.png'
import './frame'
import './item'
import './search'

const t: any = 'var5417572861701592'

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