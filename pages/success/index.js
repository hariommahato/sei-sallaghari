import React, { useState, useEffect, useReducer } from "react";
import Confetti from "react-confetti";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();

  const {mark}=router.query
  const [studentdata, setStudentData] = useState();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setStudentData(JSON.parse(localStorage?.getItem("studentdata")));
  }, []);
  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {console.log( studentdata)}
      <div className="text-center" style={{ color: "red" }}>
        <h2>SEI INSTITUTE</h2>
        <h3>Congratulations !!!!!!</h3>
        <p>{studentdata?.name}</p>
        <div>Score:{mark}</div>
      </div>

      <Confetti
        style={{ textAlign: "center", width: "100%", height: "100%" }}
      />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          back to home
        </Button>
      </div>
    </div>
  );
};

export default Success;
