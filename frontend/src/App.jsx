import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Cadastro de usuários</h1>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Idade" />
        <button type="submit">Cadastrar</button>
      </form>
      <div className="users-list">
        
      </div>
    </div>
  );
}
export default App;
