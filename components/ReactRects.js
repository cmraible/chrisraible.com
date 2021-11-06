import React, { useState } from 'react'
import { Button, Box } from 'grommet'
import { DateTime } from 'luxon'

var sha512 = require('js-sha512');

function ReactRect() {

    const regenerate = () => {
        return sha512(DateTime.now().toISO()).replace(/\D/g,'')
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
        <Box width="500px" gap="small">
            <svg height="500px" width="500px" xmlns="http://www.w3.org/2000/svg">
                
            <defs>
            <filter id="f1" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>
            </defs>
                <g filter="url(#f1)">
                {
                    array.map((value, index) => {
                        return (
                            <rect 
                                height={value[0]*25} 
                                width={value[1]*25}
                                x={value[2]*50}
                                y={value[3]*50}
                                key={index} 
                                fill={`rgb(${value[0]*25},${value[1]*25},${value[2]*25})`}
                                stoke={`rgb(${value[0]*25+100},${value[1]*25+100},${value[2]*25+100})`}

                                fillOpacity={`${value[3]*10}%`}
                            >
                                <animate 
                                    attributeName="x" 
                                    values={`${value[2]*35};${value[0]*35};${value[2]*35}`} 
                                    dur={`${value[3]*5}s`} 
                                    repeatCount="indefinite" 
                                />
                                <animate 
                                    attributeName="y" 
                                    values={`${value[3]*35};${value[1]*35};${value[3]*35}`} 
                                    dur={`${value[2]*5}s`} 
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

export default ReactRect;
