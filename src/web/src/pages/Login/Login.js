import { Link } from "react-router-dom";

import { Button, Input, Logo } from "../../components";
import { AuthLayout } from "../../layouts";

import "./styles.css";

export default function Login() {
  return (
    <AuthLayout>
      <Logo />
      <h1 className="login__title">Logue com sua conta</h1>
      <Input
        className="login__input"
        label="Nome do usuário*"
        name="username"
      />
      <Input
        type="password"
        className="login__input"
        label="Senha"
        name="password"
      />
      <Button className="login__button">INICIAR SESSÃO</Button>
      <span className="login__separator">ou</span>
      <Link className="login__link" to="/sign-up">
        Criar uma conta
      </Link>
    </AuthLayout>
  );
}
