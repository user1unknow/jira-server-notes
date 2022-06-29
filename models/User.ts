import mongoose, { Model, Schema } from "mongoose";

export interface IUser {
	id: string;
	name: string;
	email: string;
	password: string;
	columnsJira: string[];
}

const userSchema = new Schema({
	name: { type: String, requiered: true },
	email: { type: String, requiered: true, unique: true },
	password: { type: String, requiered: true },
	columnsJira: { type: [String], default: ["Todo", "In - Progress", "Done"] },
});

const UserModel: Model<IUser> =
	mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;
