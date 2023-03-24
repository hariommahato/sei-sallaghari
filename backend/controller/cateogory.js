import Category from "../models/category";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
cloudinaryConfig();

export const createCategory = catchAsyncErrors(async (req, res, next) => {
  const { name } = req.body;

  const category = await Category.create({
    name,
  });

  res.status(200).json({ success: true });
});
// get Details
export const getCategoryDetails = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.query.id);
  res.status(200).json({
    success: true,
    category,
  });
});

export const getAllCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.find();
  res.status(200).json({
    success: true,
    category,
  });
});

export const updateCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.query.id);
  const { name } = req.body;

  if (!category)
    res.status(404).json({
      message: "Not Found",
    });
  if (category) {
    category.name = name;
  }

  await category.save();

  res.status(200).json({
    success: true,
  });
});

export const deleteCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.query.id);
  if (!category) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }

  await Category.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
