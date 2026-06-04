import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background: #1b2838;
  }
`;

export const Login = styled.div`
  min-height: 100vh;
  background:
    linear-gradient(
      rgba(10, 20, 40, 0.85),
      rgba(10, 20, 40, 0.85)
    ),
    url("https://t2.tudocdn.net/223397?w=1920&h=1080");

  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 900px;
  margin-top: -100px;
`;

export const Cartao = styled.div`
  background: #171a21;
  padding: 40px;
  border-radius: 6px;

  display: flex;
  gap: 50px;
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    color: #1a9fff;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  a {
    align-self: center;
    color: #66c0f4;
    text-decoration: none;
    margin-top: 20px;
    font-size: 14px;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    background: #32353c;
    border: 1px solid #000;
    color: white;
    padding: 14px;
    margin-bottom: 20px;
    outline: none;
    border-radius: 3px;
  }
`;

export const Lembrete = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #b8b6b4;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 260px;
  height: 50px;
  align-self: center;
  background: linear-gradient(to right, #47bfff, #1a44c2);
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const Mensagem = styled.p`
  align-self: center;
  color: #b8b6b4;
  margin-top: 15px;
`;

export const Inicio = styled.h1`
  color: white;
  margin-bottom: 30px;
  text-align: left;
`;


  