import User from "../models/user";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";


cloudinaryConfig();
//Get All Users - Admin => /api/v1/admin/users
export const getUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  if (!users)
    return res.status(404).json({
      message: "No user found",
    });

  res.status(200).json({
    success: true,
    users,
  });
});

export const getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.query.id);

  if (!user)
    return res.status(404).json({
      message: "No user found",
    });

  res.status(200).json({
    success: true,
    user,
  });
});

export const updateProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.query.id);
  const { username, email, password } = req.body;

  if (!user)
    return res.status(404).json({
      message: "User not found",
    });
  if (user) {
    user.username = username;
    user.email = email;

    if (password) user.password = password;
  }

  await user.save();

  res.status(200).json({
    success: true,
  });
});
export const deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.query.id);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  await User.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
  });
});
