import { Box } from 'grommet';

const Pre = (props) => {
    const filename = props.children.props.filename
    if (props.children.props.filename !== undefined) {
        return (
            <Box>
                <Box 
                    alignSelf="end"
                    pad="small"
                    background="background-contrast"
                    round={{size: "small", corner: "top"}}
                >
                    {filename}
                </Box>
                <Box
                    pad="small" 
                    width="100%" 
                    background="background-contrast"
                    overflow={{"horizontal": "auto"}}
                >
                    <pre>{props.children}</pre>
                </Box>
            </Box>
           
        )
    } else {
        return (
            <Box
                pad="medium" 
                width="100%" 
                background="background-contrast"
                overflow={{"horizontal": "auto"}}
            >
                <pre>{props.children}</pre>
            </Box>
        )
    }
}
export default Pre;
