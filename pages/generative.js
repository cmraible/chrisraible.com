import React, { useState } from 'react'
import { Button, Box } from 'grommet'; 
import { DateTime } from 'luxon';

var sha512 = require('js-sha512');

function generative() {

    const regenerate = () => {
        return sha512(DateTime.now().toISO()).replace(/\D/g,'')
    }
    const initial = regenerate()
    const [seed, setSeed] = useState(initial)

    let array = []
    for (let index = 0; index < seed.length; index++) {
        array.push([seed.charAt(index), seed.charAt(index+1), seed.charAt(index+3), seed.charAt(index+4)])
    }
    


    return (
        <Box width="500px">

            <svg height="500px" width="500px">
                <g style={{filter: "blur(50px)"}}>
                {
                    array.map((value, index) => {
                        return <circle style={{filter: `blur(${value[3]+1*2}px)`, animation: "hideshow 10s 1.5s ease infinite"}} cx={value[0]*50} cy={value[1]*50} r={value[2]*15} key={index} fill={`rgb(${value[0]*28},${value[1]*28},${value[2]*28})`} />
                    })
                }
                </g>
            </svg>
            <Button label="Regenerate" onClick={() => {setSeed(regenerate())}}/>

        </Box>
    )
}

export default generative
