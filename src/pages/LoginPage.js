import React from "react";
import logo from "../assets/logo/Z.png"
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/LoginPage.css";
import { Button, Checkbox, Form, Input } from "antd";

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    console.log("Entered:", values);

    const storedUsername = localStorage.getItem("adminEmail");
    const storedPassword = localStorage.getItem("adminPassword");

    if (
      values.username.trim() === storedUsername &&
      values.password.trim() === storedPassword
    ) {
      navigate("/");
      form.resetFields();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Form
      name="LoginForm"
      form={form}
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="form-items">
        <img src={logo} alt="logo" className="logo" />
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your mobile number or email!",
            },
          ]}
        >
          <Input
            type="email"
            placeholder="Mobile Number or Email"
            prefix={<UserOutlined style={{ fontSize: "17px" }} />}
            className="input-field"

          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Please input your password!"
            prefix={<LockOutlined style={{ fontSize: "17px" }} />}
            className="input-field"
          />
        </Form.Item>

        <Form.Item label={null}>
          <div className="rem-forgot-inner">
            <Checkbox>Remember me</Checkbox>
            <Link to="/forgotpassword">Forgot Password?</Link>
          </div>
        </Form.Item>

        <Form.Item label={null} className="login-btn">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>

        <Form.Item className="signup-link">
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </Form.Item>
      </div>
    </Form>
  );
};

export default LoginPage;
