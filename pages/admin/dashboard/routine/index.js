import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import { Providers } from "@/services/providers";
import { Table } from "react-bootstrap";
import React, { useEffect } from "react";
import Loader from "@/frontend/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

import Link from "next/link";
import { Button } from "react-bootstrap";
import { useDeleteRoutineMutation, useGetRoutineQuery } from "@/services/api";

const Routine = () => {
  const { data, isLoading } = useGetRoutineQuery();
  const router = useRouter();
  const [deleteRoutine, { isSuccess, isError }] = useDeleteRoutineMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/routine");
    }
    if (isError) {
      toast.error("Something Wrong Happened");
    }
  }, [isSuccess, toast, isError]);
  {console.log(data?.routine)}

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <Toaster/>
          <Table responsive striped="columns">
            <thead>
              <tr>
                <th>Id</th>
                <th style={{ minWidth: "13rem" }}>Class Name</th>
                <th style={{ minWidth: "13rem" }}>Subject</th>
                <th style={{ minWidth: "13rem" }}>Teacher</th>
                <th style={{ minWidth: "13rem" }}>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.routine?.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item?._id}</td>
                    <td>{item?.name}</td>
                    <td>
                      {item?.subject?.map((item) => {
                        return (
                          <ul key={item.subjectname}>
                            <li>{item.subjectname}</li>
                          </ul>
                        );
                      })}
                    </td>
                    <td>
                      {item?.teacher?.map((item) => {
                        return (
                          <ul key={item.teachername}>
                            <li>{item.teachername}</li>
                          </ul>
                        );
                      })}
                    </td>
                    <td>
                      {item?.schedule?.map((item) => {
                        return (
                          <ul key={item.time}>
                            <li>{item.time}</li>
                          </ul>
                        );
                      })}
                    </td>
                    <td>
                      <Link href={`/admin/dashboard/routine/${item._id}`}>
                        <Button>Edit</Button>
                      </Link>
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteRoutine(`${item._id}`);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
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
