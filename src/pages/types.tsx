import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Footer, Header } from "../components";
import { useLocalStorage } from "../hooks";
import { login } from "../redux/user/reducer";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useApi } from "../hooks";

function Types() {
  const [user] = useLocalStorage("user");
  const dispatch = useDispatch();
  const { isLoading, data: pokemonType, error, fetch } = useApi();

  useEffect(() => {
    fetch.listTypes();
  }, [fetch]);

  useEffect(() => {
    dispatch(login(user));
  }, [dispatch, user]);

  return (
    <>
      <Header />
      <main>
        {error && <div>Error: {error}.</div>}
        {isLoading ? (
          <center>Is Loading</center>
        ) : (
          <ul
            style={{
              display: "flex",
              gap: ".5rem",
              margin: "3rem 0",
              justifyContent: "center",
            }}
          >
            {pokemonType.map((type) => {
              return (
                <li>
                  <Link to={type.name}>{type.name}</Link>
                </li>
              );
            })}
          </ul>
        )}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Types;
