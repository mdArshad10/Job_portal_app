const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "full Name is required"],
    },
    email: {
      type: String,
      require: [true, "email is required"],
      unique: [true, "Email is already exist"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    phoneNumber: {
      type: String,
      required: [true, "phone number is required"],
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: [true, "role is required"],
    },
    profile: {
      bio: { type: String },
      skills: [{ type: String }],
      resume: { type: String }, // url to resume file
      resumeOriginalName: { type: String },
      company:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company'
      }],
      profilePhoto:{
        type:String,
        default:"",
        required:[true,"profile photo is required"]
      }
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
