import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import { Providers } from "@/services/providers";

import React, { useEffect } from "react";

import Loader from "@/frontend/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { useDeleteEnrollMutation, useGetEnrollQuery } from "@/services/api";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { Button } from "react-bootstrap";

const Enroll = () => {
  const { data, isLoading } = useGetEnrollQuery();
  const router = useRouter();
  const [deleteEnroll, { isSuccess, isError }] = useDeleteEnrollMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/enroll");
    }
  }, [isSuccess, toast]);
  const enroll = React.useMemo(() => data, []);

  const newData = new Date("2023-03-18T12:48:45.147Z");

  const columns = [
    { field: "_id", headerName: " ID", minWidth: 200, flex: 0.5 },
    {
      field: "FirstName",
      headerName: "FirstName",
      type: "String",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "LastName",
      headerName: "LastName",
      type: "String",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "Email",
      headerName: "Email",
      type: "String",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "ContactNumber",
      headerName: "ContactNumber",
      type: "Number",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "School",
      headerName: "School",
      type: "String",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "Course",
      headerName: "Couse",
      type: "String",
      minWidth: 250,
      flex: 0.3,
    },
    {
      field: "Image",
      headerName: "Image",
      type: "String",
      minWidth: 100,
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
            <Link href={`/admin/dashboard/enroll/${params.row._id}}`}>
              {/* <EditIcon /> */}Edit
            </Link>

            <Button onClick={(e) => deleteEnroll(params.row._id)}>
              {/* <DeleteIcon /> */}Delete
            </Button>
          </>
        );
      },
    },
  ];
  const rows = [];
  data &&
    data?.enroll?.forEach((item) => {
      rows.push({
        _id: item?._id,
        FirstName: item?.firstname,
        LastName: item?.lastname,
        Email: item?.email,

        ContactNumber: item?.number,
        School: item?.school,
        Course: item?.course,
        Image: item.images?.url,
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

export default Enroll;
Enroll.getLayout = function PageLayout(page) {
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
