import { Link } from "react-router-dom";

import { Button, Input, Logo } from "../../components";
import { AuthLayout } from "../../layouts";

import "./styles.css";

export default function SignUp() {
  return (
    <AuthLayout>
      <Logo />
      <h1 className="sign-up__title">Cadastre-se</h1>
      <Input className="sign-up__input" label="Nome*" name="first_name" />
      <Input className="sign-up__input" label="Sobrenome" name="last_name" />
      <Input
        className="sign-up__input"
        label="Nome do usuário*"
        name="username"
      />
      <Input
        type="email"
        className="sign-up__input"
        label="E-mail"
        name="email"
      />
      <Input
        type="password"
        className="sign-up__input"
        label="Senha"
        name="password"
      />
      <Button className="sign-up__button">Cadastrar</Button>
      <span className="sign-up__separator">ou</span>
      <Link className="sign-up__link" to="/login">
        Já tenho uma conta
      </Link>
    </AuthLayout>
  );
}
