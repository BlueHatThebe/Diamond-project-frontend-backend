import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "Gmail", // You can use other services like SendGrid, Mailgun, etc.
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

export const sendVerificationEmail = async (to, token) => {
	const verificationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/verify?token=${token}`;

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to,
		subject: "Verify your email address",
		html: `<p>Please verify your email address by clicking the link below:</p>
           <p><a href="${verificationUrl}">Verify Email</a></p>`,
	};

	await transporter.sendMail(mailOptions);
};
