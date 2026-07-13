import mongoose, {Schema} from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String, // cloudinary URL hoga
      required: true,
    },
    coverImage: {
      type: String, // cloudinary URL hoga
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function(next){
    this.password = await(bcrypt.hash(this.password));
    next();
})



export const User = mongoose.model("User", UserSchema);
