import { useEffect, useState } from "react";
import {
  NamedAPIResource,
  PokemonClient,
} from "pokenode-ts";
import { useDispatch } from "react-redux";
import { Footer, Header } from "../components";
import { useLocalStorage } from "../hooks";
import { login } from "../redux/user/reducer";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Types() {
  const [pokemonTypes, setPokemonTypes] = useState<NamedAPIResource[]>([]);
  const [user] = useLocalStorage("user");
  const dispatch = useDispatch();

  useEffect(() => {
    const api = new PokemonClient({
      cacheOptions: { ttl: 1000 * 60 * 60 * 24 },
    });
    api.listTypes().then(({ results }) => {
      setPokemonTypes(results);
    });
  }, []);

  useEffect(() => {
    dispatch(login(user));
  }, [dispatch, user]);

  return (
    <>
      <Header />
      <main>
        <ul
          style={{
            display: "flex",
            gap: ".5rem",
            margin: "3rem 0",
            justifyContent: "center",
          }}
        >
          {pokemonTypes.map((type) => {
            return (
              <li>
                <Link to={type.name}>{type.name}</Link>
              </li>
            );
          })}
        </ul>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Types;
