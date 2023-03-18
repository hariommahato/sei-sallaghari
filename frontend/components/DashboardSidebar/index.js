import Image from "next/image";
import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { BiCollapseHorizontal } from "react-icons/bi";
const DashboardSidebar = () => {
  const { collapseSidebar } = useProSidebar();
  const { data } = useSession();
  return (
    <Sidebar style={{ backgroundColor: "white", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h5 className="text-center p-4">Dashboard</h5>

        <p>
          Welcome <span style={{ color: "blue" }}>{data?.user?.email}</span>
        </p>
        <span onClick={() => collapseSidebar()}>
          <BiCollapseHorizontal />
        </span>
      </div>

      <Menu>
        <SubMenu label="EnrollData">
          <MenuItem ad={Link} href={"/admin/dashboard/enroll"}>
            {" "}
            All Enroll Data{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu label="Carousel">
          <MenuItem as={Link} href={`/admin/dashboard/carousel/add`}>
            {" "}
            Add Carousel{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/carousel"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="Faq">
          <MenuItem as={Link} href={`/admin/dashboard/faq/add`}>
            {" "}
            Add Faq{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/faq"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu label="Blog">
          <MenuItem as={Link} href={`/admin/dashboard/blog/add`}>
            {" "}
            Add Blog{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/blog"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="FeedbackData">
          <MenuItem ad={Link} href={"/admin/dashboard/feedback"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="FormData">
          <MenuItem ad={Link} href={"/admin/dashboard/form"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>
      </Menu>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Button
          variant="danger"
          onClick={() => {
            signOut({ redirect: true, callbackUrl: "/" });
          }}
        >
          Logout
        </Button>
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;
