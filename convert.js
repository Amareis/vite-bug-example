import {Project, SyntaxKind} from "ts-morph"

const project = new Project({
    tsConfigFilePath: "./tsconfig.json",
    compilerOptions: {
        noEmit: false,
        outDir: 'dist',
    },
})

const t = new Map()

for (const sf of project.getSourceFiles()) {
    const imports = sf.getImportDeclarations().map(i => i.getModuleSpecifier().getLiteralValue())

    const dyn = sf.getDescendantsOfKind(SyntaxKind.CallExpression).flatMap(call =>
        call.getChildren()[0]?.getKind() === SyntaxKind.ImportKeyword
            ? call.getText()
            : []
    )

    t.set(sf, `${imports.map(i => `import '${i}'`).concat(dyn).join('\n')}\n` + (sf.getBaseName().endsWith('css.ts') ? '' : `
const t: any = 'var${Math.random().toString().slice(2)}'

if (window[t])
    throw new Error('Already imported!')

window[t] = t

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        delete window[t]
    })
}
`))
}

const bigCode = `
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
}`

for(const [sf, text] of t) {
    sf.replaceWithText(text + (sf.getBaseName().endsWith('tsx') ? bigCode : ''))
}

project.saveSync()