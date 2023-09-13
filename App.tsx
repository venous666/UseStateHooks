import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idioma, setIdioma] = useState('');

  const capturarValores = () => {
    console.log('Nome:', nome);
    console.log('Gênero:', genero);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
    console.log('Email:', email);
    console.log('Confirmar Email:', confirmarEmail);
    console.log('CPF:', cpf);
    console.log('Idioma do Currículo:', idioma);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <Text style={styles.label}> Gênero</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu gênero"
        value={genero}
        onChangeText={(text) => setGenero(text)}
      />

      <Text style={styles.label}> Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
       <Text style={styles.label}>Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
      />
      
       <Text style={styles.label}> email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
       <Text style={styles.label}>Confirmar email</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirme seu email"
        value={confirmarEmail}
        onChangeText={(text) => setConfirmarEmail(text)}
      />
       <Text style={styles.label}> Data de Cpf</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu Cpf"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />
       <Text style={styles.label}> Idioma do Currículo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o idioma do seu curriculo"
        value={idioma}
        onChangeText={(text) => setIdioma(text)}
      />

     

      <Button title="CADASTRAR" onPress={capturarValores} />

      
      <Text>Nome: {nome}</Text>
      <Text>Gênero: {genero}</Text>
      <Text>Data de Nascimento: {dataNascimento}</Text>
      <Text>usuario: {usuario}</Text>
      <Text>senha: {senha}</Text>
      <Text>email: {email}</Text>
      <Text>confirmarEmail: {confirmarEmail}</Text>
      <Text>cpf: {cpf}</Text>
      <Text>idioma: {idioma}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color:'#636261',
  },
  input: {
    
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#636261',
    color:'#636261',
  },
  button: {
    backgroundColor: '#4B98B8',

    
  },
});

export default App;
