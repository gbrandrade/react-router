import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <nav style={{ display: "flex", gap: "2rem" }}>
          <Link to="/">Início</Link>
          <Link to="/products">Produtos</Link>
          <Link to="/cart">Carrinho</Link>
          <Link to="/admin">Administração</Link>
        </nav>
      </header>
      <main>
        <p>
          Esse é o layout principal. Abaixo está o conteúdo dinâmico de cada
          rota filha.
        </p>
        <hr />
        <Outlet />
      </main>
      <hr />
      <footer>
        <p>Feito com React Router DOM =D</p>
      </footer>
    </>
  );
}
