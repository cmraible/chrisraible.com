import Highlight from 'react-highlight'

const Code = (props) => {
    const language = props.className.split('-')[1]
    return (
        <Highlight style="margin: 0" language={language}>{props.children}</Highlight>
    )

}
export default Code;
