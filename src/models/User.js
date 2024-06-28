import mongoose from "mongoose";

const { Schema } = mongoose;

const punycode = require('punycode');



const userSchema = new Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: false,
		},
		verificationToken: {
			type: String,
			required: true,
		},
		verified: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
