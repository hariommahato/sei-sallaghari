import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import User from "../models/user";
cloudinaryConfig();

//Register User => api/v1/user/register
export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { username, email, password } = req.body;
  let user = User.findOne({ email: email });

  user = await User.create({
    username,
    email,
    password,
  });

  res.status(200).json({ success: true });
});
