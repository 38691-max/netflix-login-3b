import './App.css'
import Logo from "./assets/netflix.png"

function App() {

  return (
    <main>
      <div id='background' />
      <div id='form'>
          <img src={Logo} width={140} height={105} alt="Netflix" />
          <h2>Fazer Login</h2>
          <form noValidate>
            <label htmlFor="email">Login</label>
            <input type="email" id='email' placeholder='Digite seu e-mail...' />
            <label htmlFor="password" id='password'>Senha</label>
            <input type="password" id='password' placeholder='Digite sua senha...' />
            <button type='submit'>Login</button>
            <p>Esqueçeu a senha? <a href="">Link.</a></p>
          </form>
      </div>

    </main>
  )
}

export default App;
