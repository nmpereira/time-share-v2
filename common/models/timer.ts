import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

const timerSchema = new mongoose.Schema({
	roomName: {
		type: String,
		required: true,
	},
	isPaused: {
		type: Boolean,
		required: true,
	},
	isBreak: {
		type: Boolean,
		required: true,
	},
	endTimestamp: {
		type: Date,
		required: true,
	},
	pausedAt: {
		type: Date,
		required: false,
	},
	originalDuration: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		required: true,
	},
	messageHistory: {
		type: [messageSchema],
		required: false,
	},
});

const Timer = mongoose.model("Timer", timerSchema);

export default Timer;
