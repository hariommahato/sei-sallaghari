import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import { Providers } from "@/services/providers";
import { FaEdit } from "react-icons/fa";

import React, { useEffect } from "react";

import Loader from "@/frontend/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useDeleteUserMutation, useGetUsersQuery } from "@/services/api";

const User = () => {
    const { data, isLoading } = useGetUsersQuery();
    const router = useRouter();
    const [deleteUser, { isSuccess, isError }] = useDeleteUserMutation();
    useEffect(() => {
      if (isSuccess) {
        toast.success("Deleted Successfully");
        router.push("/admin/dashboard/user");
      }
    }, [isSuccess, toast]);


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
      field: "Email",
      headerName: "Email",
      type: "String",
      minWidth: 250,
      flex: 0.3,
    },
    {
        field: "Password",
        headerName: "Password",
        type: "String",
        minWidth: 200,
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
                router.push(`/admin/dashboard/user/${params.row._id}`);
              }}
            >
              <FaEdit />
              Edit
            </Button>

            <Button
              onClick={(e) => deleteUser(params.row._id)}
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
    data?.users?.forEach((item) => {
      rows.push({
        _id: item?._id,
        Name: item?.username,
        Email: item?.email,
        Password: item?.password,
       
       
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
          
            autoHeight
            getRowId={(row) => row._id}
          />
        </>
      )}
    </>
  );
};

export default User
User.getLayout = function PageLayout(page) {
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
