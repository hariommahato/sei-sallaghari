import React from "react";
import Table from "react-bootstrap/Table";

const Routine = ({ data }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  return (
    <div
      style={{
        marginTop: "3rem",
      }}
    >
      {!data ? (
        <p
          className="text-center my-3 "
          style={{ color: "red", fontWeight: "bold" }}
        >
          No Routines For Today !!!!!!!!!!!!!!!!!!!
        </p>
      ) : (
        <>
          <div
            style={{
              width: "80%",
              margin: "auto",
            }}
          >
            <h1>Today Routine {`${year}-${month}-${day}`} </h1>
            {data?.routine?.map((item, i) => {
              return (
                <>
              <h3>{item?.name}</h3>
                <Table striped bordered hover size="lg" key={i}>
                  <thead>
                    <tr>
                      <th>Subject Name</th>
                      <th>TeacherName</th>
                      <th>Class TIme</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {item?.subject?.map((item, i) => {
                          return <p>{item?.subjectname}</p>;
                        })}
                      </td>
                      <td>
                        {item?.teacher?.map((item, i) => {
                          return <p>{item?.teachername}</p>;
                        })}
                      </td>
                      <td>
                        {item?.schedule?.map((item, i) => {
                          return <p>{item?.time}</p>;
                        })}
                      </td>
                    </tr>
                  </tbody>
                </Table>
                </>
                
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const routine = await fetch(`https://sei-institute-sallaghari.vercel.app/api/routine`);
  const data = await routine.json();

  return { props: { data } };
}

export default Routine;
