import { StatusBar } from 'expo-status-bar';
import {View,Text,TextInput,Image,TouchableOpacity,} from 'react-native';
import { styles } from './LoginStyles';
import SteamLogo from "./assets/steam-logo.png";
import { useState } from 'react';

export default function App() {
  
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  
  function fazerLogin() {
  if (usuario === 'steam' && senha === '123456') {
    alert('Login realizado com sucesso!');
  } else {
    alert('Usuário ou senha inválidos!');
  }
}
  return (

    <View style={styles.container}>
      <StatusBar style="light" />

      <Image source={SteamLogo} style={styles.logo} />

       <Text style={styles.title}>
        
        Iniciar Sessão
       
       </Text>
  
      <Text style={styles.label}>

      Nome da conta Steam

      </Text>

       <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
        placeholderTextColor="#888"
        value={usuario}
        onChangeText={setUsuario}
      />

      <Text style={styles.label}>

      Senha

      </Text>

      <TextInput
      style={styles.input}
      placeholder="Digite sua senha"
      placeholderTextColor="#888"
      secureTextEntry
      value={senha}
      onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={fazerLogin}>
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>
      
      <Text style={styles.link}>
      
      Esqueceu sua senha?
      
      </Text>

      <Text style={styles.footer}>
      
      Ou use um código QR para entrar

      </Text>
      
  </View>


  );
}


