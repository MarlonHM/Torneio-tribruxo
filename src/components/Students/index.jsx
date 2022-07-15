import { useEffect, useState } from "react";
import "./style.css";

const Students = () => {
  const api = "https://hp-api.herokuapp.com/api/characters/students";
  const [arrayExibir, setArrayExibir] = useState([]);

  const resApi = () => {
    fetch(api)
      .then((response) => response.json())
      .then((array) => {
        const primeiraCasa = array.filter(
          (casa) => casa.house === "Gryffindor"
        );
        const segundaCasa = array.filter((casa) => casa.house === "Hufflepuff");
        const terceiraCasa = array.filter((casa) => casa.house === "Slytherin");
        setArrayExibir([
          primeiraCasa[
            Math.floor(Math.random() * (primeiraCasa.length - 0) + 0)
          ],
          segundaCasa[Math.floor(Math.random() * (segundaCasa.length - 0) + 0)],
          terceiraCasa[
            Math.floor(Math.random() * (terceiraCasa.length - 0) + 0)
          ],
        ]);
      });
  };

  useEffect(() => {
    resApi();
  }, []);

  return (
    <div className="renderiza">
      <div className="cards">
        {arrayExibir.map((item) => {
          return (
            <div key={item.name}>
              <figure>
                <img
                  className={`img ${
                    item.house === "Gryffindor"
                      ? "img1"
                      : item.house === "Hufflepuff"
                      ? "img2"
                      : "img3"
                  }
                `}
                  src={
                    item.image ||
                    "https://play-lh.googleusercontent.com/NFq59dFMvx2KaMVze8ogX47sbxxo9_GUEVO-bln5Rv9M7ZzwM8LwKfJcnpg5Au65F0k=w512"
                  }
                  alt={item.name}
                />
              </figure>
              <h2 className="nome">{item.name}</h2>
              <h3
                className={
                  item.house === "Gryffindor"
                    ? "casa1"
                    : item.house === "Hufflepuff"
                    ? "casa2"
                    : "casa3"
                }
              >
                {item.house}
              </h3>
            </div>
          );
        })}
      </div>
      <div>
        <button className="botao_comecar" onClick={() => resApi()}>
          Tentar novamente
        </button>
      </div>
    </div>
  );
};

export default Students;
