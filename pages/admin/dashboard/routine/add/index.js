import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import { Providers } from "@/services/providers";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCreateRoutineMutation } from "@/services/api";

const Routine = () => {
  const [createRoutine, { isError, isLoading, isSuccess }] =
    useCreateRoutineMutation();
  const router = useRouter();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [subjectname, setSubjectName] = useState("");
  const [teachername, setTeacherName] = useState("");
  const [time, setTime] = useState();

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Created Successfully");
      router.push("/admin/dashboard/routine");
    }
  });

  const handleSubjectAdd = (e) => {
    e.preventDefault();
    if (subjectname !== "") {
      subject.push({ subjectname: subjectname });
      setSubjectName("");
    }
  };
  const handleTeacherAdd = (e) => {
    e.preventDefault();
    if (teachername !== "") {
      teacher.push({ teachername: teachername });
      setTeacherName("");
    }
  };
  const handleScheduleAdd = (e) => {
    e.preventDefault();
    if (time !== "") {
      schedule.push({ time: time });
      setTime("");
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { name, subject, teacher, schedule };
    createRoutine(data);
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
              justifyContent: "center",
              marginTop: "0",
            }}
          >
            <form onSubmit={submitHandler}>
              <h5 style={{ textAlign: "center", padding: "1rem" }}>
                Add Routine Data
              </h5>

              <div className="my-3">
                <Form.Control
                  type="text"
                  placeholder="Enter ClassName"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Form.Control
                  type="text"
                  placeholder="Enter SubjectName"
                  name="subjectname"
                  value={subjectname}
                  onChange={(e) => {
                    setSubjectName(e.target.value);
                  }}
                />
                <div>
                  {subject &&
                    subject?.map((item, i) => {
                      return (
                        <>
                          <p>{item?.subjectname}</p>
                        </>
                      );
                    })}
                </div>
                <div>
                  <Button onClick={handleSubjectAdd}>Add More</Button>
                  <Button
                    onClick={() => {
                      setSubject("");
                    }}
                    className="mx-3"
                    variant="danger"
                  >
                    Delete Data
                  </Button>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "1rem",
                }}
              >
                <Form.Control
                  type="text"
                  placeholder="Enter TeacherName"
                  name="teachername"
                  value={teachername}
                  onChange={(e) => {
                    setTeacherName(e.target.value);
                  }}
                />
                <div>
                  {teacher &&
                    teacher?.map((item, i) => {
                      return (
                        <>
                          <p>{item?.teachername}</p>
                        </>
                      );
                    })}
                </div>
                <div>
                  <Button onClick={handleTeacherAdd}>Add More</Button>
                  <Button
                    onClick={() => {
                      setTeacher("");
                    }}
                    className="mx-3"
                    variant="danger"
                  >
                    Delete Teacher
                  </Button>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "1rem",
                }}
              >
                <Form.Control
                  type="time"
                  placeholder="Enter Time"
                  name="time"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                />
                <div>
                  {schedule &&
                    schedule?.map((item, i) => {
                      return (
                        <>
                          <p>{item?.time}</p>
                        </>
                      );
                    })}
                </div>
                <div>
                  <Button onClick={handleScheduleAdd}>Add More</Button>
                  <Button
                    onClick={() => {
                      setSchedule("");
                    }}
                    className="mx-3"
                    variant="danger"
                  >
                    Delete schedule
                  </Button>
                </div>
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={isLoading ? true : false}
                style={{ width: "100%", marginTop: "2rem" }}
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

export default Routine;
Routine.getLayout = function PageLayout(page) {
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
