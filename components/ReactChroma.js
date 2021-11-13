import { Box, Paragraph } from 'grommet';
import React, { useState } from 'react';

var sha512 = require('js-sha512');

function ReactChroma() {

    const regenerate = () => {
        return sha512(new Date().toString()).replace(/\D/g,'')
    }
    const initial = regenerate()
    const [seed, setSeed] = useState(initial)

    let array = []
    for (let index = 0; index < seed.length; index++) {
        array.push([
            seed.charAt(index), 
            seed.charAt(index+1), 
            seed.charAt(index+3), 
            seed.charAt(index+4)
        ])
    }
    
    return (
        <Box focusIndicator={false} width="500px" gap="small" onClick={() => {setSeed(regenerate())}}>
            <svg height="500px" width="500px">
            <defs>
            <filter id="f1" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
            </filter>
            </defs>
                <g filter="url(#f1)">
                {
                    array.map((value, index) => {
                        return (
                            <circle 
                                style={{filter: `blur(${value[3]+1*2}px)`}} 
                                cx={value[0]*50} 
                                cy={value[1]*50} 
                                r={value[2]*15} 
                                key={index} 
                                fill={`rgb(${value[0]*25},${value[1]*25},${value[2]*25})`}
                            >
                                <animate 
                                    attributeName="r" 
                                    values={`${value[2]*15};${value[0]*15};${value[2]*15}`} 
                                    dur={`${value[3]*5}s`} 
                                    repeatCount="indefinite" 
                                />
                                <animate 
                                    attributeName="cx" 
                                    values={`${value[0]*50};${value[3]*50};${value[0]*50}`} 
                                    dur={`${value[0]*5}s`} 
                                    repeatCount="indefinite" 
                                />
                                <animate 
                                    attributeName="cy" 
                                    values={`${value[1]*50};${value[2]*50};${value[1]*50}`} 
                                    dur={`${value[1]*5}s`} 
                                    repeatCount="indefinite" 
                                />
                            </circle>
                        )
                    })
                }
                </g>
            </svg>
        </Box>
    )
}

export default ReactChroma;
