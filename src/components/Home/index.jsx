import "./style.css";

const Home = ({ setClique }) => {
  return (
    <div className="homeContainer">
      <div>
        <h1 className="tituloPrincipal">Torneio Tribruxo</h1>
        <h3 className="info"> Clique no botão para encontrar feiticeiros!</h3>
      </div>
      <button className="botao_comecar" onClick={() => setClique(true)}>
        Começar!
      </button>
    </div>
  );
};

export default Home;
