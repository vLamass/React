import { useEffect, useState } from "react";
import {
  Login,
  Container,
  Cartao,
  Form,
  Lembrete,
  Button,
  Mensagem,
  Inicio,
  GlobalStyle,
} from "./styles";



function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [clicou, setClicou] = useState(0);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    console.log("Usuário:", usuario);
    console.log("Senha:", senha);

    if (clicou === 0) return;

    if (usuario === "steam" && senha === "123456") {
      setMensagem("Login realizado com sucesso");
    } else {
      setMensagem("Usuário ou senha inválidos");
    }
  }, [clicou]);

  const logar = () => {
    setClicou(clicou + 1);
  };

  return (
    <>
      <GlobalStyle />

      <Login>
        <Container>
          <Inicio>Iniciar sessão</Inicio>

          <Cartao>
            <Form>
              <label>INICIAR SESSÃO COM O NOME DE USUÁRIO</label>

              <input type="text" value={usuario}onChange={(e) => setUsuario(e.target.value)}/>

              <label>SENHA</label>

              <input type="password" value={senha}onChange={(e) => setSenha(e.target.value)}/>

              <Lembrete>
                <input type="checkbox" />
                <span>Lembre-me</span>
              </Lembrete>

              <Button type="button" onClick={logar}>
                Iniciar sessão
              </Button>

              <Mensagem>{mensagem}</Mensagem>

             
              <a href="#">Não consigo iniciar sessão</a>
            </Form>
          </Cartao>
        </Container>
      </Login>
    </>
  );
}

export default App;