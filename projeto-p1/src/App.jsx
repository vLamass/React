import { useEffect, useState } from 'react'
import styles from './App.module.css'

function App() {

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [clicou, setClicou] = useState(0);
  const [mensagem, setMensagem] = useState("")

  useEffect(() => {

  console.log("Usuário:", usuario);
  console.log("Senha:", senha);

  // alert(`${usuario}, ${senha} `)

  if (clicou === 0) return;  

  if(usuario === "steam" && senha === "123456"){
    setMensagem("Login realizado com sucesso");
  }else{
    setMensagem("Usuario ou senha inválidos");
  }

}, [clicou]);
  
  const logar = ()=> {setClicou(clicou + 1)};

  return (
    <>
      <div className = {styles.login}>
      <div className={styles.container}>
        <h1 className= {styles.inicio}>Iniciar sessão</h1>
        
        <div className = {styles.cartao}>
        <div className={styles.form}>  
          <label>INICIAR SESSÃO COM O NOME DE USUÁRIO</label>
          <input type="text" value={usuario} onChange={(e)=> setUsuario(e.target.value)}/>

          <label>SENHA</label>
          <input type="password" value={senha} onChange={(e)=> setSenha(e.target.value)}/>

          <div className = {styles.lembrete}>
          <input type="checkbox"/>
          <span>Lembre-me</span>
          </div>
          
          <button className = {styles.btn} onClick={logar}>Iniciar sessão</button>
          
          <p className = {styles.mensagem}>{mensagem}</p>

          <a href="#">Não consigo iniciar sessão</a>
          </div>
        </div>
      </div>  
      </div>
      <div>

      </div>
    </>
  )
}

export default App