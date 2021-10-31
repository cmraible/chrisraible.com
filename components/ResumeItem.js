import React from 'react';
import { Box, Heading, Text } from 'grommet';

const ResumeItem = ({ heading, institution, dates, items }) => {
    return (
        <Box fill="horizontal" pad={{left: "xsmall", top: "xsmall"}}>
            <Box direction="row" justify="between" fill="horizontal">
                <Heading style={{whiteSpace: "nowrap"}} level={5} size="xsmall" margin="none">{heading} - {institution}</Heading>
                <Heading style={{whiteSpace: "nowrap"}} level={5} fill size="xsmall" margin="none">{dates}</Heading>
            </Box>
            <Box>
                <ul class="resume-list">
                {items.map((item) => {
                    return (
                        <li><Text size="resume" margin={{vertical: "xxsmall"}}>{item}</Text></li>
                    )
                })}
                </ul>
            </Box>
        </Box>
    )
}

export default ResumeItem;