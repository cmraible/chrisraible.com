import React from 'react'
import { CodeBlock } from 'react-code-blocks'

function ReactRects() {
    return (
        <div>
            <CodeBlock
                text={`import React, { useState } from 'react'
import { Button, Box } from 'grommet'; 
import { DateTime } from 'luxon';

// require sha512 hashing function to create a random string of hexadecimal characters
var sha512 = require('js-sha512');

function ReactChroma() {

  // generates a random seed based on the exact current timestamp
  const regenerate = () => {
      return sha512(DateTime.now().toISO()).replace(/\D/g,'')
  }

  // generate initial seed and store it in react state
  const initial = regenerate()
  const [seed, setSeed] = useState(initial)

  // create an array of arrays of 4 hexadecimal characters
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
      <svg height="500px" width="500px">
        <g style={{filter: "blur(50px)"}}>
        {
          // loop over the array and create a circle for each item
          array.map((value, index) => {
            return (
              <circle 
                style={{filter: \`blur(\${value[3]+1*2}px)\`}} 
                cx={value[0]*50} 
                cy={value[1]*50} 
                r={value[2]*15} 
                key={index} 
                fill={\`rgb(\${value[0]*25},\${value[1]*25},\${value[2]*25})\`}
              >
                  <animate 
                    attributeName="r" 
                    values={\`\${value[2]*15};\${value[0]*15};\${value[2]*15}\`} 
                    dur={\`\${value[3]*5}s\`} 
                    repeatCount="indefinite" 
                  />
                  <animate 
                    attributeName="cx" 
                    values={\`\${value[0]*50};\${value[3]*50};\${value[0]*50}\`} 
                    dur={\`\${value[0]*5}s\`} 
                    repeatCount="indefinite" 
                  />
                  <animate 
                    attributeName="cy" 
                    values={\`\${value[1]*50};\${value[2]*50};\${value[1]*50}\`} 
                    dur={\`\${value[1]*5}s\`} 
                    repeatCount="indefinite" 
                  />
              </circle>
            )
          })
        }
        </g>
      </svg>
      <Button 
        label="Regenerate" 
        onClick={() => {setSeed(regenerate())}}
      />

    </Box>
  )
}

export default ReactChroma;`}    
                language="javascript"
                theme="Github"
            />
        </div>
    )
}

export default ReactRects
