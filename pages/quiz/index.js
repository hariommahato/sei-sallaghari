import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import styles from "./Quiz.module.css";
const index = () => {
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const router = useRouter();
  const handleStart = () => {
    if (name && section) {
      const studentdata = { name, section };
      localStorage.setItem("studentdata", JSON.stringify(studentdata));
      router.push("/quiz/play")
    } else {
      toast.error("Please fill up the all information");
    }
  };
  return (
    <div>
      <Toaster />
      <div className={styles.mainDiv}>
        <div>
          <h2 style={{ textAlign: "center" }}>Welcome Our Shining Stars</h2>
          <h3 style={{ textAlign: "center" }}>Point to know</h3>
          <div>
            <ul>
              <li>You will be asked total 100 questions</li>
              <li>You will not able to choose again the same answer</li>
              <li>
                Each question has four points.You can choose only one options
              </li>
              <li>The result will be declared at the end of Quiz</li>
            </ul>
          </div>
          <div className={styles.formContainer}>
            <TextField
              type={"text"}
              placeholder="Enter your Name"
              name="name"
              value={name}
              size="small"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              type={"text"}
              placeholder="Enter your Section"
              name="section"
              value={section}
              size="small"
              onChange={(e) => {
                setSection(e.target.value);
              }}
            />
          </div>
          <div className={styles.button} onClick={handleStart}>
            <Button fullWidth variant="contained" color="error">
              Start Exam
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
