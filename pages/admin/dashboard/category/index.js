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
import { useDeleteCategoryMutation, useGetCategoryQuery } from "@/services/api";

const Category = () => {
  const { data, isLoading } = useGetCategoryQuery();
  const router = useRouter();
  const [deleteCategory, { isSuccess, isError }] = useDeleteCategoryMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/category");
    }
  }, [isSuccess, toast]);
  const enroll = React.useMemo(() => data, []);

  const columns = [
    { field: "_id", headerName: " ID", minWidth: 200, flex: 0.5 },
    {
      field: "CategoryName",
      headerName: "Name",
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
                router.push(`/admin/dashboard/category/${params.row._id}`);
              }}
            >
              <FaEdit />
              Edit
            </Button>

            <Button
              onClick={(e) => deleteCategory(params.row._id)}
              className="mx-3"
              variant="danger"
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];
  const rows = [];
  data &&
    data?.category?.forEach((item) => {
      rows.push({
        _id: item?._id,
        CategoryName: item?.name,
       
       
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

export default Category;
Category.getLayout = function PageLayout(page) {
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
