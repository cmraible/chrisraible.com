import { Box, Text } from 'grommet';


const Pre = (props) => (
    <Box
        width="100%" 
        overflow={{"horizontal": "auto"}}
        round="xsmall"
    >
        <pre>{props.children}</pre>
    </Box>
)
export default Pre;
