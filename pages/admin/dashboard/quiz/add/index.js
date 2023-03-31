import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import { Providers } from "@/services/providers";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCreateQuizMutation } from "@/services/api";
import { TextField } from "@mui/material";

const Quiz = () => {
  const [createQuiz, { isError, isLoading, isSuccess }] =
    useCreateQuizMutation();
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState();
  const [answerText, setAnswerText] = useState("");

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Created Successfully");
      router.push("/admin/dashboard/quiz");
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    questions.push({
      ...questions,
      answer: answer,
      question: question,
    });
    const data = { correctAnswer, questions };
    console.log(data)
    createQuiz(data);
  };

  const handleAddAnswer = (e) => {
    e.preventDefault();
    if (answerText !== "") {
      answer.push({ answerText });
      setAnswerText("");
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <div
            style={{
              width: "60%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              marginTop: "0",
              justifyContent: "center",
            }}
          >
            <form onSubmit={submitHandler} encType={"application/json"}>
              <h5 style={{ textAlign: "center", padding: "1rem" }}>
                Add Quiz Data
              </h5>

              <div>
                <TextField
                  type="text"
                  placeholder="Enter questions"
                  name="question"
                  value={question}
                  onChange={(e) => {
                    setQuestion(e.target.value);
                  }}
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  sx={{ mt: 3 }}
                  type="text"
                  placeholder="Enter Answer"
                  name="answertext"
                  value={answerText}
                  fullWidth
                  onChange={(e) => {
                    setAnswerText(e.target.value);
                  }}
                />
                <div style={{ marginTop: "1rem" }}>
                  <Button onClick={handleAddAnswer}>Add Answer</Button>
                </div>

                <div>
                  {answer &&
                    answer?.map((item, i) => {
                      return <><p key={i}>{item?.answerText}</p></>;
                    })}
                </div>
              </div>

              <div>
                <TextField
                  sx={{ mt: 2 }}
                  type="number"
                  placeholder="Enter Correct Answer"
                  name="correctAnswer"
                  value={correctAnswer}
                  onChange={(e) => {
                    setCorrectAnswer(e.target.value);
                  }}
                  fullWidth
                />
              </div>

              <Button
                disabled={isLoading ? true : false}
                fullWidth
                style={{ marginTop: "1rem" }}
                onClick={submitHandler}
              >
                submit
              </Button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Quiz;
Quiz.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
        <div style={{ display: "flex" }}>
          <DashboardSidebar />
          {page}
        </div>
      </Providers>
    </>
  );
};
