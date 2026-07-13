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
    if(!this.isModified("password")) return next();
    this.password = await(bcrypt.hash(this.password, 10));
    next();
})

UserSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}

export const User = mongoose.model("User", UserSchema);
