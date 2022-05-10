import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
	  user: "858ff2df3372d3",
	  pass: "43541c4fb8ff35"
	}
})

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			from: 'Equipe Feedget <oi@feedget.com>',
			to: 'Guilherme Canella <guycanella@gmail.com>',
			subject,
			html: body
		})
	}
}
