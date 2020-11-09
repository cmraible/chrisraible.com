import { Anchor, Box, Button, Form, FormField, TextInput, TextArea, Heading, Paragraph, Text } from 'grommet';
import Head from 'next/head';
import React, { useState } from 'react';
const axios = require('axios').default;


export default function Contact() {

  const [value, setValue] = useState({
    name: '',
    message: '',
    email: ''
  });
  const [success, setSuccess] = useState(undefined);

  const handleSubmit = ({value}) => {
    console.log(value);
    axios.post('/api/contact', {value}).then((response) => {
      if (response.status === 200) {
        setSuccess(true)
      } else {
        setSuccess(false)
      }
    });
  }

  let content

  if (success) {
    content = (
      <Box align="center">
        <Heading margin="none">Contact</Heading>
        <Paragraph>Thanks for reaching out!</Paragraph>
      </Box>
    )
  } else {
    content = (
      <React.Fragment>
        <Box align="center">
          <Heading margin="none">Contact</Heading>
          <Paragraph>If you'd like to get in touch, please reach out using the form below. These get sent straight to my email.</Paragraph>
        </Box>
        <Box fill="horizontal">
          <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onSubmit={handleSubmit}
            validate="blur"
          >
            <FormField name="name" label="Name" required>
              <TextInput name="name" />
            </FormField>
            <FormField name="email" label="Your Email Address" required>
              <TextInput name="email" type="email" />
            </FormField>
            <FormField name="message" label="Message" required>
              <TextArea name="message" rows={6} />
            </FormField>
            <Button type="submit" label="Submit" />
          </Form>
        </Box>
      </React.Fragment>

    )
  }

  return (
    <React.Fragment>
      <Head>
        <title>Chris Raible: Contact</title>
        <meta name="description" content="Contact information for Chris Raible" />
        <link rel="icon" href="/favicon-96x96.png" />
      </Head>
      <Box align="center" justify="start" fill={true}>
        <Box width="large" pad="medium" align="center" margin={{top: "xlarge"}} round={true} gap="medium">
          {content}
        </Box>
      </Box>
    </React.Fragment>
  )
}
