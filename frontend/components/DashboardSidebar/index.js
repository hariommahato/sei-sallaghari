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
        <SubMenu label="CategoryData">
          <MenuItem as={Link} href={`/admin/dashboard/category/add`}>
            {" "}
            Add Category{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/category"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="AboutData">
          <MenuItem as={Link} href={`/admin/dashboard/about/add`}>
            {" "}
            Add About{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/about"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="RoutineData">
          <MenuItem as={Link} href={`/admin/dashboard/routine/add`}>
            {" "}
            Add Routine{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/routine"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu label="ContactData">
          <MenuItem ad={Link} href={"/admin/dashboard/contact"}>
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
