function LoginPage() {
  return (
    <>
      <h1>Registro</h1>
      <form>
        <label htmlFor="email">
          Email:
          <input name="email" id="email" type="email" />
        </label>
        <label htmlFor="email">
          Contraseña:
          <input name="password" id="password" type="password" />
        </label>
      </form>
    </>
  );
}

export default LoginPage;
