import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts
      title="Login"
      tes="Welcome, Please input your key"
      type="login"
    >
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
