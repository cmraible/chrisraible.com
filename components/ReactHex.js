import React, { useState } from 'react'
import { Button, Box } from 'grommet'
import { hexbin } from 'd3-hexbin'


var sha256 = require('js-sha256');

function ReactHex() {

    const height = 500
    const width = 500

    const regenerate = () => {
        return sha256(new Date().toString())
    }
    const initial = regenerate()
    const [seed, setSeed] = useState(initial)
    const fill = `rgb(${parseInt(seed.charAt(0), 16)*15}, ${parseInt(seed.charAt(1), 16)*15}, ${parseInt(seed.charAt(2), 16)*15})`;


    let array = []
    for (let index = 0; index < seed.length; index++) {
        array.push({
            x: parseInt(seed.charAt(index), 16), 
            y: parseInt(seed.charAt(index+1), 16),
        })
    }
    const scale = 32
    const bin = hexbin()
        .x(d => d.x*scale)
        .y(d => d.y*scale)
        .radius(scale)
        .extent([0,0], [width, height])

    const bins = bin(array)
    
    return (
        <Box width={`${width}px`} gap="small">
            <svg height={`${height}px`} width={`${width}px`} xmlns="http://www.w3.org/2000/svg">
                <g>
                {
                    bins.map((value, index) => {
                        return (
                            <g
                                transform={`translate(${value.x}, ${value.y})`}>
                                    <path
                                        stroke={fill}
                                        fill={fill}
                                        d={bin.hexagon()}
                                        fillOpacity={parseInt(seed[index+1], 16)*6/100}
                                    >
                                        <animate 
                                            attributeName="fill-opacity"
                                            values={`${parseInt(seed[index+1], 16)*6/100};${parseInt(seed[index+2], 16)*6/100};${parseInt(seed[index+1], 16)*6/100}`} 
                                            dur={`5s`} 
                                            repeatCount="indefinite" 
                                        />
                                    </path>
                            </g>
                        )
                    })
                }
                </g>
            </svg>
            <Button label="Regenerate" onClick={() => {setSeed(regenerate())}}/>
        </Box>
    )
}

export default ReactHex;
