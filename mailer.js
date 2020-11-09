const nodemailer = require('nodemailer')
const nodemailerSendgrid = require('nodemailer-sendgrid-transport')

const sendgrid_key = process.env.SENDGRID_API_KEY

console.log(`Sendgrid API Key: ${sendgrid_key}`)

const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        auth: {
            api_key: sendgrid_key
        }
    })
)

const send = ({ email, name, text }) => {
    const message = {
      from: 'chris@chrisraible.com',
      to: 'chris@chrisraible.com',
      subject: `New message from ${name}`,
      text: text,
      replyTo: email
    }

    return new Promise((resolve, reject) => {
      transport.sendMail(message, (error, info) =>
        error ? reject(error) : resolve(info)
      )
    })
}

module.exports = send