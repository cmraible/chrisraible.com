import React, { useState } from 'react'
import { Button, Box } from 'grommet'
import { hexbin } from 'd3-hexbin'


var md5 = require('js-md5')
var sha256 = require('js-sha256')
var sha512 = require('js-sha512')

function ReactHex({hashFunction}) {

    let hash
    if (hashFunction === 'md5') {
        hash = md5
    } else if (hashFunction === 'sha256') {
        hash = sha256
    } else if (hashFunction === 'sha512') {
        hash = sha512
    } else {
        hash = sha512
    }
    
    const height = 500
    const width = 500

    const [seed, setSeed] = useState(hash(new Date().toString()))
    const fill = `rgb(${parseInt(seed.charAt(0), 16)*14}, ${parseInt(seed.charAt(1), 16)*14}, ${parseInt(seed.charAt(2), 16)*14})`;

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
        .extent([0,0], [width*2, height*2])

    const bins = bin(array)
    
    return (
        <Box focusIndicator={false} width={`${width}px`} gap="small" onClick={() => {setSeed(hash(new Date().toString()))}}>
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
        </Box>
    )
}

export default ReactHex;
