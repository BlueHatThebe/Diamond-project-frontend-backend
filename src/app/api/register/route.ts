import User from "@/models/User";
import connect from "@/utils/db";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { sendVerificationEmail } from "@/utils/email";

const algorithm = "aes-256-ctr";
const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3"; // Should be stored securely, e.g., in environment variables

const encrypt = (text: crypto.BinaryLike) => {
	const iv = crypto.randomBytes(16);
	const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
	const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

	return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
};

export const POST = async (request: any) => {
	const { fullName, email, password } = await request.json();

	await connect();

	const existingUser = await User.findOne({ email });

	if (existingUser) {
		return new NextResponse("Email is already in use", { status: 400 });
	}

	const hashedPassword = await bcrypt.hash(password, 5);
	const encryptedFullName = encrypt(fullName);
	const verificationToken = crypto.randomBytes(32).toString("hex");
	const newUser = new User({
		fullName: encryptedFullName,
		email,
		password: hashedPassword,
		verificationToken,
	});

	try {
		await newUser.save();
		await sendVerificationEmail(email, verificationToken);
		return new NextResponse("user is registered", { status: 200 });
	} catch (err: any) {
		return new NextResponse(err, {
			status: 500,
		});
	}
};
