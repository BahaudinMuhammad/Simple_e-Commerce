import InputForm from "../Input/Index";
import Button from "../Button/Index";

const handleRegister = (event) => {
  event.preventDefault();

  // if (event.target.password.value !== event.target.confirm.value) {
  //   alert("cek");
  // } else {
  //   localStorage.setItem("fullname", event.target.fullname.value);
  //   localStorage.setItem("email", event.target.email.value);
  //   localStorage.setItem("password", event.target.password.value);
  //   localStorage.setItem("confirm", event.target.confirm.value);
  //   window.location.href = "/login";
  // }
};
const FormRegister = () => {
  return (
    <form onSubmit={handleRegister}>
      <InputForm
        label="Full Name"
        type="text"
        placeholder="Input your fullname"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="******"
        name="confirm"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
