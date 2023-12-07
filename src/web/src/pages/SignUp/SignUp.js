import { Link } from "react-router-dom";

import { Logo } from "../../components";
import { AuthLayout } from "../../layouts";

import "./styles.css";

export default function SignUp() {
  return (
    <AuthLayout>
      <Logo />
      <h1 className="sign-up__title">Cadastre-se</h1>
    </AuthLayout>
  );
}
