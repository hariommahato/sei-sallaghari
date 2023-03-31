import Quiz from "../models/quiz";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import ApiFeatures from "../utils/apiFeatures";
const createQuiz = catchAsyncErrors(async (req, res, next) => {
  const { questions, correctAnswer } = req.body;
  const quiz = await Quiz.create({
    correctAnswer,
    questions,
  });
  res.status(200).json({ success: true, quiz });
});
const getQuiz = async (req, res, next) => {
  try {
    const getSingleQuiz = await Quiz.findById(req.query.id);
    res.status(200).json(getSingleQuiz);
  } catch (error) {
    next(error);
  }
};

const getQuizes = catchAsyncErrors(async (req, res, next) => {
  let resultPerPage = 1;
  const count = await Quiz.countDocuments();
  const apiFeature = new ApiFeatures(Quiz.find(), req.query).search().filter();
  let quiz = await apiFeature.query;
  apiFeature.pagination(resultPerPage);
  quiz = await apiFeature.query.clone();
  res.status(200).json({
    quiz,
    count,
    resultPerPage,
  });
});

const getAdminAllQuiz = catchAsyncErrors(async (req, res, next) => {
  const quiz = await Quiz.find();
  res.status(200).json({
    quiz,
  });
});

const updateQuiz = async (req, res, next) => {
  try {
    const updatedQuiz = await Quiz.findByIdAndUpdate(
      req.query.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedQuiz);
  } catch (error) {
    next(error);
  }
};

const deleteQuiz = async (req, res, next) => {
  try {
    await Quiz.findByIdAndDelete(req.query.id);
    res.status(200).json("Quiz Deleted Successfully");
  } catch (error) {
    next(error);
  }
};

export { createQuiz, getQuiz, getQuizes, updateQuiz, deleteQuiz,getAdminAllQuiz };
