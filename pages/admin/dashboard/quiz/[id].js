import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import { useGetQuizDetailsQuery, useUpdateQuizMutation } from "@/services/api";

import { Providers } from "@/services/providers";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const Quiz = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetQuizDetailsQuery(id);
  const [
    updateQuiz,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateQuizMutation();

  const [correctAnswer, setCorrectAnswer] = useState();
  const [oldQuestions, setOldQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [answerText, setAnswerText] = useState("");
  const [question, setQuestion] = useState("");
  useEffect(() => {
    if (data) {
      setCorrectAnswer(data?.correctAnswer);
      setQuestion(
        data?.questions?.map((item) => {
          return item?.question;
        })
      );
      setAnswer(
        data?.questions?.map((item) => {
          return item?.answer;
        })
      );
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/quiz");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);

  const handleUpdate = (e) => {
    e.preventDefault();

    questions.push({
      ...questions,
      answer: answer,
      question: question,
    });
    const data = { correctAnswer, questions };
    console.log(data);
    updateQuiz({ id, data });
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
        <>
          <Loader />
        </>
      ) : (
        <>
          <Toaster />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              border: "1px solid red",
            }}
          >
            <form onSubmit={handleUpdate}>
              <h5>Update Quiz Data</h5>

              <Form.Label>CorrectAnswer</Form.Label>
              <Form.Control
                name="correctAnswer"
                value={correctAnswer}
                onChange={(e) => {
                  setCorrectAnswer(e.target.value);
                }}
                style={{ width: "100%" }}
              ></Form.Control>

              <Form.Label>Questions</Form.Label>
              <Form.Control
                name="question"
                value={question}
                as={"textarea"}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
                style={{ width: "100%" }}
              ></Form.Control>
              <div>
                <Form.Label className="my-3">Answer</Form.Label>
                <Form.Control
                  name="answerText"
                  value={answerText}
                  as={"textarea"}
                  onChange={(e) => {
                    setAnswerText(e.target.value);
                  }}
                  style={{ width: "100%" }}
                ></Form.Control>
                <Button onClick={handleAddAnswer}>Add</Button>
              </div>

              <div>
                <h3>Old Answer</h3>

                {answer?.map((item, i) => {
                  return <p key={i}>{item?.answerText}</p>;
                })}

                <Button
                  variant="danger"
                  onClick={() => {
                    setAnswer("");
                  }}
                >
                  {" "}
                  Delete All
                </Button>
              </div>

              <Button
                type="submit"
                disabled={updateLoading ? true : false}
                style={{
                  marginTop: "2rem",
                  width: "100%",
                }}
              >
                Update Data
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
