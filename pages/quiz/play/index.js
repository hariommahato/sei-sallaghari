import Loader from "@/frontend/components/Loader/Loader";
import { useCreateResultMutation, useGetQuizQuery } from "@/services/api";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Pagination from "react-js-pagination";
import React, { useEffect, useState } from "react";
import styles from "../Quiz.module.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { toast, Toaster } from "react-hot-toast";

const QuizPlay = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetQuizQuery(currentPage);
  const [studentdata, setStudentData] = useState();
  const [selected, setSelected] = useState("");
  const [mark, setMark] = useState(0);
  const [correct, setCorrect] = useState();
  const router = useRouter();

  const [createResult, { isSuccess, isError }] = useCreateResultMutation();

  useEffect(() => {
    const dataSt = JSON.parse(localStorage.getItem("studentdata"));

    setStudentData(dataSt);
    if (data) {
      data?.quiz?.map((item) => {
        setCorrect(item.correctAnswer);
      });
    }
    if (selected == correct) {
      setMark(mark + 1);
    }
    if (isSuccess) {
      router.push({
        pathname: "/success",
        query: { mark: mark },
      });
    }
    if (isError) {
      toast.error("Something Happen");
    }
  }, [data, selected, isSuccess, isError]);

  const handleNext = (e) => {
    // e.preventDefault();
    setSelected("");
    if (currentPage !== data?.count) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("mark", JSON.stringify(mark));
    const name = studentdata.name;
    const section = studentdata.section;
    const data = { name, section, mark };
    createResult(data);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.playMainDiv}>
          <Toaster />
          <h4>Hello {studentdata?.name}</h4>
          <div className={styles.quizContainer}>
            {data?.quiz?.map((item, i) => {
              return (
                <>
                  {item?.questions?.map((item, i) => {
                    return (
                      <>
                        <div key={i}>
                          <h4>{item?.question}</h4>
                        </div>
                      </>
                    );
                  })}
                  {item?.questions?.map((item) => {
                    return (
                      <>
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={selected}
                            onChange={(e) => {
                              setSelected(e.target.value);
                            }}
                          >
                            {item?.answer?.map((item, i) => {
                              return (
                                <>
                                  <FormControlLabel
                                    value={i}
                                    control={<Radio />}
                                    label={item?.answerText}
                                    disabled={selected !== "" ? true : false}
                                  />
                                </>
                              );
                            })}
                          </RadioGroup>
                        </FormControl>
                      </>
                    );
                  })}
                  <div>
                    <Button
                      variant="primary"
                      onClick={handleNext}
                      disabled={currentPage == data?.count}
                    >
                      Next
                    </Button>

                    {currentPage == data?.count && (
                      <Button className="mx-3" onClick={handleSubmit}>
                        Submit
                      </Button>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default QuizPlay;
