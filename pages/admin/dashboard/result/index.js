import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import { Providers } from "@/services/providers";
import { FaEdit } from "react-icons/fa";
import React, { useEffect } from "react";
import Loader from "@/frontend/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "react-bootstrap";
import { useDeleteResultMutation, useGetResultQuery } from "@/services/api";
const Result = () => {
  const { data, isLoading } = useGetResultQuery();
  const router = useRouter();
  const [deleteResult, { isSuccess, isError }] = useDeleteResultMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/result");
    }
  }, [isSuccess, toast]);


{console.log(data)}
  const columns = [
    { field: "_id", headerName: " ID", minWidth: 200, flex: 0.5 },
    {
      field: "Name",
      headerName: "Name",
      type: "String",
      minWidth: 200,
      flex: 0.3,
    },
    {
      field: "Section",
      headerName: "Section",
      type: "String",
      minWidth: 200,
      flex: 0.3,
    },
    {
      field: "Mark",
      headerName: "mark",
      type: "Number",
      minWidth: 250,
      flex: 0.3,
    },
   

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 200,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={() => {
                router.push(`/admin/dashboard/result/${params.row._id}`);
              }}
            >
              <FaEdit />
              Edit
            </Button>

            <Button
              onClick={(e) => deleteResult(params.row._id)}
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
    data?.result?.forEach((item) => {
      rows.push({
        _id: item?._id,
        Name: item?.name,
        Section: item?.section,
        Mark: item?.mark,
       
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

export default Result;
Result.getLayout = function PageLayout(page) {
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
