import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const loginPromise = (user, pass)=>{
  if(user === 'ed' && pass === '1234')
    return Promise.resolve('kiodliofd12346589')
  else
    return Promise.resolve(false);
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  afterLoginSuccess = async (token, userName)=>{
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('userName', userName);
    this.props.navigation.navigate('mainScreen');
  }
  onLogin() {
    const { username, password } = this.state;
    loginPromise(username, password).then(resp=>{
      if(!resp){
        Alert.alert('Usuario o contrase;a incorrecta')  
      }else{
        try{
          this.afterLoginSuccess(resp, username);
        }catch(e){
          console.error(e)
        }
        
      }
      
    }).catch(e=>{
      Alert.alert(':( Lo sentimos ha ocurrido un error.')
    })
    
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    minWidth: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default Login;