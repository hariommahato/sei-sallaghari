import Result from "../models/result";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
cloudinaryConfig();

export const createResult = catchAsyncErrors(async (req, res, next) => {
  const { name, section, mark } = req.body;

  const result = await Result.create({
    name,
    section,
    mark,
  });

  res.status(200).json({ success: true });
});
// get Details
export const getResultDetails = catchAsyncErrors(async (req, res, next) => {
  const result = await Result.findById(req.query.id);
  res.status(200).json({
    success: true,
    result,
  });
});

export const getAllResult = catchAsyncErrors(async (req, res, next) => {
  const result = await Result.find();
  res.status(200).json({
    success: true,
    result,
  });
});
export const updateResult = catchAsyncErrors(async (req, res, next) => {
  const result = await Result.findById(req.query.id);
  const { name, section, mark } = req.body;

  if (!result)
    res.status(404).json({
      message: "Not Found",
    });
  if (result) {
    result.name = name;
    result.section = section;
    result.mark = mark;
  }

  await result.save();

  res.status(200).json({
    success: true,
  });
});

export const deleteResult = catchAsyncErrors(async (req, res, next) => {
  const result = await Result.findById(req.query.id);
  if (!result) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }

  await Result.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
