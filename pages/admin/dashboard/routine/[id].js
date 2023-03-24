import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import {
  useGetRoutineDetailsQuery,
  useUpdateRoutineMutation,
} from "@/services/api";

import { Providers } from "@/services/providers";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const Routine = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetRoutineDetailsQuery(id);
  const [
    updateRoutine,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateRoutineMutation();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [subjectname, setSubjectName] = useState("");
  const [teachername, setTeacherName] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (data) {
      setName(data?.routine?.name);
      setSubject(data?.routine?.subject);
      setTeacher(data?.routine?.teacher);
      setSchedule(data?.routine?.schedule);
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/routine");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      name,
      subject,
      teacher,
      schedule,
    };
    
    updateRoutine({ id, data });
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
              height: "auto",
              width: "90%",
              margin: "auto",
              marginTop: "0",
            }}
          >
            <form onSubmit={handleUpdate} encType={"multipart/form-data"}>
              <h5>Update Routine </h5>
              <div>
                <Form.Label>Classs Name</Form.Label>
                <Form.Control
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></Form.Control>
              </div>
              <div>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  name="subjectname"
                  value={subjectname}
                  onChange={(e) => {
                    setSubjectName(e.target.value);
                  }}
                ></Form.Control>
                <div>
                  <Button
                    className="my-3"
                    onClick={() => {
                      setSubject([...subject, { subjectname: subjectname }]);
                      setSubjectName("");
                    }}
                  >
                    Add Subject
                  </Button>
                </div>

                <div>
                  <h3>Old Subject</h3>
                  {subject?.map((item, index) => {
                    return (
                      <div key={item.subjectname}>
                        <Form.Control
                          type="text"
                          value={item.subjectname}
                          name="subjectname"
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  <Button
                    style={{ marginTop: "1rem" }}
                    variant="danger"
                    onClick={() => {
                      setSubject([]);
                    }}
                  >
                    Delete Subject
                  </Button>
                </div>
              </div>

              <div className="my-3">
                <h1>Teacher</h1>
                <Form.Label>Teacher</Form.Label>
                <Form.Control
                  name="teachername"
                  value={teachername}
                  onChange={(e) => {
                    setTeacherName(e.target.value);
                  }}
                ></Form.Control>
                <div>
                  <Button
                    className="my-3"
                    onClick={() => {
                      setTeacher([...teacher, { teachername: teachername }]);
                      setTeacherName("");
                    }}
                  >
                    Add Teacher
                  </Button>
                </div>

                <div>
                  <h3>Old Teacher</h3>
                  {teacher?.map((item, index) => {
                    return (
                      <div key={item.teachername}>
                        <Form.Control
                          type="text"
                          value={item.teachername}
                          name="teachername"
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  <Button
                    style={{ marginTop: "1rem" }}
                    variant="danger"
                    onClick={() => {
                      setTeacher([]);
                    }}
                  >
                    Delete Teacher
                  </Button>
                </div>
              </div>

              <div>
                <Form.Label>Schedule</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={time}
                  onChange={(e) => {
                    console.log(e.target.value)
                    setTime(e.target.value);
                  }}
                ></Form.Control>
                <div>
                  <Button
                    className="my-3"
                    onClick={() => {
                      setSchedule([...schedule, {time:time }]);
                      setTime("");
                    }}
                  >
                    Add Time
                  </Button>
                </div>
                {console.log(schedule,time)}

                <div>
                  <h3>Old Time</h3>
                  {schedule?.map((item, index) => {
                    return (
                      <div key={item.time}>
                        <Form.Control
                          type="time"
                          value={item.time}
                          name="time"
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  <Button
                    style={{ marginTop: "1rem" }}
                    variant="danger"
                    onClick={() => {
                      setSchedule([]);
                    }}
                  >
                    Delete Time
                  </Button>
                </div>
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
