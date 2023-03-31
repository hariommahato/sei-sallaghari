import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import { Providers } from "@/services/providers";
import { FaEdit } from "react-icons/fa";
import React, { useEffect } from "react";
import Loader from "@/frontend/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "react-bootstrap";
import { useDeleteQuizMutation, useGetAdminQuizQuery } from "@/services/api";

const Quiz = () => {
  const { data, isLoading } = useGetAdminQuizQuery();
  const router = useRouter();
  const [deleteQuiz, { isSuccess, isError }] = useDeleteQuizMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/quiz");
    }
  }, [isSuccess, toast]);


  const columns = [
    { field: "_id", headerName: " ID", minWidth: 200, flex: 0.5 },
    {
      field: "CorrectAnswer",
      headerName: "CorrectAnswer",
      type: "String",
      minWidth: 200,
      flex: 0.3,
    },
    {
      field: "Question",
      headerName: "Question",
      type: "String",
      minWidth: 400,
      flex: 0.3,
    },
    {
      field: "Answer",
      headerName: "Answer",
      type: "String",
      minWidth: 400,
      flex: 0.3,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 300,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={() => {
                router.push(`/admin/dashboard/quiz/${params.row._id}`);
              }}
            >
              <FaEdit />
              Edit
            </Button>

            <Button
              onClick={(e) => deleteQuiz(params.row._id)}
              className="mx-3"
              variant="danger"
            >
              {/* <DeleteIcon /> */}Delete
            </Button>
          </>
        );
      },
    },
  ];
  const rows = [];
  data &&
    data?.quiz?.forEach((item) => {
      rows.push({
        _id: item?._id,
        CorrectAnswer: item?.correctAnswer,
        Question: item?.questions?.map((item) => {
          return item.question;
        }),
        Answer: item?.questions?.map((item) => {
          return item?.answer?.map((item) => {
            return item?.answerText;
          });
        }),
      });
    });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <DataGrid
            rows={rows}
            columns={columns}
            // pageSize={15}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
            getRowId={(row) => row._id}
          />
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
