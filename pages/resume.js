import "animate.css/animate.min.css";
import { Anchor, Avatar, Box, Heading, Text } from 'grommet';
import Head from 'next/head';
import React from 'react';
import ResumeItem from '../components/ResumeItem';


const Resume = () => {

  return (
      <React.Fragment>
        <Head>
          <title>Chris Raible Resumé</title>
          <meta name="description" content="Chris Raible's Resumé" />
        </Head>
        <Box align="center" id="resume">
          <Box width="8.5in" flex={false}>
            <Box justify="between" direction="row" align="center">
              <Text size="large" weight="bold">Chris Raible</Text>
              <Text><Anchor href="mailto:chris@chrisraible.com">chris@chrisraible.com</Anchor></Text>
            </Box>
            <Heading level={4} size="xsmall" margin={{vertical: "xsmall"}}>Education</Heading>
            <ResumeItem 
              heading="BS Industrial and Systems Engineering" 
              institution="Virginia Tech"
              dates="May 2017"
              items={["Cumulative GPA: 3.31"]}
            />
            <Heading level={4} size="xsmall" margin={{vertical: "xsmall"}}>Professional Experience</Heading>
            <ResumeItem
              heading="Sr. Quality Systems Engineer" 
              institution="Tesla, Inc."
              dates="July 2021 - Present"
              items={[
                "Leading the roll-out of custom developed work instruction software to Tesla vehicle manufacturing facilities globally."
              ]}
            />
            <ResumeItem 
              heading="Associate, Global Sales Operations BI" 
              institution="LinkedIn"
              dates="Jan 2021 - July 2021"
              items={[
                "Lead requirements gathering, documentation, and change management for the development of 70+ dashboards and CRM views to align with a comprehensive restructuring of the Global Sales organization.",
                "Effectively managed stakeholders, resource constraints and communicated project status and risks to the executive leadership team for support on a regular basis."
              ]}
            />
            <ResumeItem 
              heading="Senior Project Manager - Model 3 General Assembly" 
              institution="Tesla, Inc."
              dates="Jan 2019 - Jun 2020"
              items={[
                "Lead weekly cross-functional improvement meetings with production, process and equipment engineering teams to increase the capacity and reliability of GA3, ultimately resulting in a ~10% increase in capacity over 6 months.",
                "Developed visual management dashboards to be displayed on TVs in-station and in common areas to give front line workers and supervisors live feedback with respect to first pass yield and cycle time performance.",
                "Created a basic process planning application allowing process engineers to edit standard work, view planned versus actual cycle times, and publish work instructions and headcount requirements to the production team.",
                "Facilitated weekly operational review meetings with the VP of Manufacturing to review progress on SPQRC metrics for General Assembly."
              ]}
            />
            <ResumeItem 
              heading="Operations Analyst - Model 3 General Assembly" 
              institution="Tesla, Inc."
              dates="Nov 2017 - Jan 2019"
              items={[
                "Developed Tableau dashboards with key rate and quality metrics for the process engineering team during the early ramp of GA3 to reduce cycle times and increase production while driving quality improvements.",
                "Authored live updating ad-hoc reports by writing SQL queries, blending data from multiple sources including Excel and Active Directory, manipulating data server-side in Python and visualizing in the browser via SVG and Canvas with D3.js.",
                "Coded and deployed a layered audit system using Python and JavaScript that allowed quality and process technicians to perform audits on the production line using smart phones.",
              ]}
            />
            <ResumeItem 
              heading="Industrial Engineer" 
              institution="Wolverine Advanced Materials"
              dates="May 2017 - Nov 2017"
              items={[
                "Generated an executive dashboard in Excel that monitored all aspects of plant operations – production, productivity, sales, inventory, rework and scrap – and to track progress toward goals set by the plant manager and corporate management team.",
                "Developed a script that traced scrap events recorded in downstream operations back to where they were originally created. This produced an accurate accounting of when and where defects were created in our processes and encouraged faster problem solving and enhanced accountability of the operators and supervisors.",
              ]}
            />
            <ResumeItem 
              heading="Quality Intern" 
              institution="Wolverine Advanced Materials"
              dates="Nov 2016 - May 2017"
              items={[
                "Developed a web-scraping script in Python to pull and analyze scrap data from the company’s dated ERP system.",
                "Created daily scrap Pareto charts detailing the quantity scrapped on each line by reason to be posted at production lines and in breakrooms to promote operator awareness and foster competition among shifts."
              ]}
            />
            <ResumeItem 
              heading="Senior Data Reductionist" 
              institution="Virginia Tech Transportation Institute"
              dates="Sep 2016 - Jan 2017"
              items={[
                "Lead a computer lab of 10-15 data reductionists performing data labelling activities on a number of different research projects.",
              ]}
            />
            <ResumeItem 
              heading="QA Data Reductionist" 
              institution="Virginia Tech Transportation Institute"
              dates="Aug 2016 - Sep 2016"
              items={[
                "Collaborated with other QA Reductionists and the research coordinators to ensure accurate and uniform data coding with a team of about 100 reductionists across all shifts.",
              ]}
            />
            <ResumeItem 
              heading="Data Reductionist" 
              institution="Virginia Tech Transportation Institute"
              dates="Jul 2015 - Aug 2016"
              items={[
                "Performed detailed data labeling on video and parametric vehicle data to identify environmental conditions, traffic flow, and driver behaviors that contribute to causing safety critical events, like collisions."
              ]}
            />
          </Box>
        </Box>
      </React.Fragment>
  )
}

export default Resume;
