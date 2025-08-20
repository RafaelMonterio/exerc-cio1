import './App.css';
import Header  from './componentes/Header';
import Footer  from './componentes/Footer';
import Cartao  from './componentes/Cartao';
function App() {
  return (
    <div className="App">

      <Header/>
      <Cartao
      imagem= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7F1nUExyxcy1OluxqMkit_FgvZqqm9wqDA&s"
      name= "Demolidor"
      descrição= 'Demolidor (como é conhecido no Brasil e em Portugal; Daredevil no original em inglês) é um personagem fictício que aparece nas histórias em quadrinhos publicadas pela Marvel Comics. Um super-herói criado pelo escritor/editor Stan Lee e pelo artista Bill Everett com algumas contribuições de Jack Kirby. O Demolidor apareceu pela primeira vez em Daredevil #1 (abril de 1964).A alcunha do personagem é "Homem Sem Medo"'
      />
      <Footer/>
    </div>
  );
}

export default App;
