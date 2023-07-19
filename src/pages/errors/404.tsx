import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <center>
      <h1>Página não encontrada</h1>
      <Link to="/">
        <u>Ir para home</u>
      </Link>
    </center>
  );
}
