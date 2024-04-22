import InputForm from "../Input/Index";
import Button from "../Button/Index";
import { login } from "../../services/auth.service";
import { useState } from "react";
const FormLogin = () => {
  const [loginGagal, setLoginGagal] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    // if ((localStorage.email == null) & (localStorage.password == null)) {
    //   alert("Silahkan registrasi");
    //   window.location.href = "/register";
    // } else if (
    //   (localStorage.email != e.target.email.value) |
    //   (localStorage.password != e.target.password.value)
    // ) {
    //   alert("email atau password salah");
    // } else {
    //   window.location.href = "/products";
    // }

    // localStorage.setItem("email", e.target.email.value); //email ini dari properti name di inputForm
    // localStorage.setItem("password", e.target.password.value); //password ini juga
    // window.location.href = "/products";
    // console.log("tes");
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginGagal(res.response.data);
      }
    });
  };
  return (
    <form onSubmit={handleLogin}>
      {" "}
      //kalau pakai form dan harus submit maka pakai onsubmit
      <InputForm
        label="Username"
        type="username"
        placeholder="Input your name"
        name="username"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginGagal && (
        <p className="text-red-500 font-semibold text-center mt-6">
          {loginGagal}
        </p>
      )}
    </form>
  );
};

export default FormLogin;
