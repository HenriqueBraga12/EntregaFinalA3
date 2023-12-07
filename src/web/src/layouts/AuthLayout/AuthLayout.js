import "./styles.css";

export default function AuthLayout({ children }) {
  return (
    <section className="auth-layout">
      <form className="auth-layout__content">{children}</form>
    </section>
  );
}
