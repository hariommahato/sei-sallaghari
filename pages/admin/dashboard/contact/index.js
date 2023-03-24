import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import { Providers } from "@/services/providers";
import { FaEdit } from "react-icons/fa";
import React, { useEffect } from "react";
import Loader from "@/frontend/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "react-bootstrap";
import { useDeleteContactMutation, useGetContactQuery } from "@/services/api";
const Contact = () => {
  const { data, isLoading } = useGetContactQuery();
  const router = useRouter();
  const [deleteContact, { isSuccess, isError }] = useDeleteContactMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/contact");
    }
  }, [isSuccess, toast]);
  const enroll = React.useMemo(() => data, []);

  const newData = new Date("2023-03-18T12:48:45.147Z");
{console.log(data)}
  const columns = [
    { field: "_id", headerName: " ID", minWidth: 200, flex: 0.5 },
    {
      field: "FirstName",
      headerName: "FirstName",
      type: "String",
      minWidth: 200,
      flex: 0.3,
    },
    {
      field: "LastName",
      headerName: "LastName",
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
      field: "ContactNumber",
      headerName: "ContactNumber",
      type: "Number",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "Messagae",
      headerName: "Message",
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
                router.push(`/admin/dashboard/contact/${params.row._id}`);
              }}
            >
              <FaEdit />
              Edit
            </Button>

            <Button
              onClick={(e) => deleteContact(params.row._id)}
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
    data?.contact?.forEach((item) => {
      rows.push({
        _id: item?._id,
        FirstName: item?.firstname,
        LastName: item?.lastname,
        Email: item?.email,
        ContactNumber: item?.number,
        Message:item?.message
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

export default Contact;
Contact.getLayout = function PageLayout(page) {
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
