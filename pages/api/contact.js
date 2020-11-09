// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailer = require('../../mailer');

export default (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body.value
    // Send email with nodemailer
    mailer({ email, name, text: message }).then(() => {
      res.status(200).send('success')
    }).catch((error) => {
      res.status(500).send('failed')
    })
  }
}
