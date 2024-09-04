import './Main.css';

function Main(children) {
  return (
    <div>
      <main className="main">
      {children ? children : <p>Nenhum conteúdo encontrado</p>}
      </main>
    </div>

  );
};

export default Main;
