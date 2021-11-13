import React from 'react'
import { CodeBlock } from 'react-code-blocks'

function ReactRects() {
    return (
        <div>
            <CodeBlock
                text={`import React, { useState } from 'react'
import { Button, Box } from 'grommet'
var sha256 = require('js-sha256')

function ReactRect() {

    const regenerate = () => {
        return sha256(new Date().toString())
    }
    const initial = regenerate()
    const [seed, setSeed] = useState(initial)

    let array = []
    for (let index = 0; index < seed.length; index++) {
        array.push([
            parseInt(seed.charAt(index), 16), 
            parseInt(seed.charAt(index+1), 16), 
            parseInt(seed.charAt(index+3), 16), 
            parseInt(seed.charAt(index+4), 16)
        ])
    }
    
    return (
        <Box width="500px" gap="small">
            <svg height="500px" width="500px" xmlns="http://www.w3.org/2000/svg">
                
            <defs>
            <filter id="f1" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>
            </defs>
                <g>
                {
                    array.map((value, index) => {
                        return (
                            <rect 
                                height={value[0]*25} 
                                width={value[1]*25}
                                x={value[2]*30}
                                y={value[3]*30}
                                key={index} 
                                fill={\`rgb(\${parseInt(seed.charAt(0), 16)*17},\${parseInt(seed.charAt(1), 16)*17},\${parseInt(seed.charAt(2), 16)*17})\`}
                                stroke={\`rgb(\${parseInt(seed.charAt(0), 16)*17},\${parseInt(seed.charAt(1), 16)*17},\${parseInt(seed.charAt(2), 16)*17})\`}
                                fillOpacity={\`\${parseInt(seed.charAt(4), 16)}%\`}
                            >
                                <animate
                                    attributeName="x" 
                                    values={\`\${value[1]*35};\${value[0]*35};\${value[1]*35}\`} 
                                    dur={\`\${value[3]*5}s\`} 
                                    repeatCount="indefinite" 
                                />
                                <animate
                                    attributeName="y" 
                                    values={\`\${value[0]*35};\${value[1]*35};\${value[0]*35}\`} 
                                    dur={\`\${value[2]*5}s\`} 
                                    repeatCount="indefinite" 
                                />
                            </rect>
                        )
                    })
                }
                </g>
            </svg>
            <Button label="Regenerate" onClick={() => {setSeed(regenerate())}}/>
        </Box>
    )
}

export default ReactRect;`}    
                language="javascript"
                theme="Github"
            />
        </div>
    )
}

export default ReactRects
