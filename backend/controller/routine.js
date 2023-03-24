import Routine from "../models/routine";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
cloudinaryConfig();

export const createRoutine = catchAsyncErrors(async (req, res, next) => {
  const { name, subject, teacher, schedule } = req.body;

  const routine = await Routine.create({
    name,
    subject,
    teacher,
    schedule,
  });

  res.status(200).json({ success: true });
});
// get Details
export const getRoutineDetails = catchAsyncErrors(async (req, res, next) => {
  const routine = await Routine.findById(req.query.id);
  res.status(200).json({
    success: true,
    routine,
  });
});

export const getAllRoutine = catchAsyncErrors(async (req, res, next) => {
  const routine = await Routine.find();
  res.status(200).json({
    success: true,
    routine,
  });
});

export const updateRoutine = catchAsyncErrors(async (req, res, next) => {
  const data = await Routine.findById(req.query.id);
  const { name, subject, teacher, schedule } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.name = name;
    data.subject = subject;
    data.teacher = teacher;
    data.schedule = schedule;
  }
  await data.save();
  res.status(200).json({
    success: true,
  });
});

export const deleteRoutine = catchAsyncErrors(async (req, res, next) => {
  const routine = await Routine.findById(req.query.id);
  if (!routine) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }

  await Routine.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
