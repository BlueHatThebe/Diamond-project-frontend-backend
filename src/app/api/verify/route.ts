import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: { url: string | URL }) => {
	const { searchParams } = new URL(request.url);
	const token = searchParams.get("token");

	await connect();

	try {
		const user = await User.findOne({ verificationToken: token });

		if (!user) {
			return new NextResponse("Invalid verification token", { status: 400 });
		}

		user.verified = true;
		user.verificationToken = undefined; // Clear the verification token
		await user.save();

		return new NextResponse("Email verified successfully", { status: 200 });
	} catch (err) {
		return new NextResponse(err.message, {
			status: 500,
		});
	}
};
