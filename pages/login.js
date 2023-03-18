import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Card from "react-bootstrap/Card";
import { useRouter } from "next/router";
import { toast, Toaster } from "react-hot-toast";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [loginData, setLoginData] = useState(initialState);
  const router = useRouter();
  const { email, password } = loginData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      signIn("credentials", { ...loginData, redirect: false }).then(
        ({ ok, error }) => {
          if (ok) {
            toast.success("Successfully Logged In");
            router.push("/admin/dashboard");
          }
          if (error) {
            toast.error(error);
            router.push("/login");
          }
        }
      );
    } catch (error) {
      toast.error(error);
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  return (
    <>
      <Toaster />
      <Card
        style={{
          width: "30rem",
          margin: "auto",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          marginTop: "10rem",
        }}
      >
        <div style={{ padding: "40px" }}>
          <h3 style={{ textAlign: "center" }}>Login</h3>
          <h6 style={{ textAlign: "center", color: "red" }}>Admin</h6>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="primary"
                type="submit"
                onClick={handleSubmit}
                style={{ textAlign: "center", width: "40%" }}
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    </>
  );
};

export default Login;
Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
