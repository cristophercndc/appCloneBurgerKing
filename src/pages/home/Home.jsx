import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';


const Home = () => {

const navigation = useNavigation();

const onPress = () => {
navigation.navigate('Login');

}

  return (
    <>
      <View style={styles.header}>
        <Image style={styles.hederImage} source={require('../../../assets/logo-burger-king.png')} />
        <StatusBar barstyle="light" backgroundColor="#FF8C00" />
      </View>

      <View style={styles.containerPreLogin}>
        <Text style={styles.textPreLogin}>
          Faça o cadastro e receba cupons e descontos exclusivos para você
        </Text>
        <View style={styles.loginOptions}>

          <TouchableOpacity >
            <View style={styles.loginFace}>
              <Image style={styles.logoFace} source={require('../../../assets/logo.face.png')}></Image>
              <Text style={styles.buttonText}> CADASTRO COM O FACEBOOK</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={styles.loginEmail}>
              <Image style={styles.logoEmail} source={require('../../../assets/email.png')}></Image>
              <Text style={styles.buttonText}> CADASTRAR COM O MEU E-MAIL</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}> Já é cadastrado?</Text>
        <TouchableOpacity style={styles.footerButton1} onPress={onPress}>
          <Text style={styles.footerButton1Text}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.footerButton2Text}>pular</Text>
        </TouchableOpacity>
      </View>

    </>
  );
};



const styles = StyleSheet.create({
  containerPreLogin: {
    flex: 1,
    backgroundColor: '#FF8C00',
    alignItems: 'center',
  },

  textPreLogin: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 15,
  },

  header: {
    backgroundColor: '#FF8C00',
    alignItems: 'center',
  },
  hederImage: {
    marginTop: 40,
    height: 150,
    width: 150,
  },

  loginOptions: {
    marginTop: 20,
  },

  loginFace: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },

  loginEmail: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',

    marginTop: 10,
    flexDirection: 'row',
  },

  logoFace: {
    backgroundColor: '#FF8C00',
    width: 25,
    height: 25,
    marginRight: 17,
  },

  logoEmail: {
    backgroundColor: '#FF8C00',
    width: 25,
    height: 20,
    marginRight: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  footer: {
    backgroundColor: '#FF8C00',
    alignItems: 'center',

  },
  footerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,

  },
  footerButton1: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 40,
    paddingVertical: 5,
    alignItems: 'center',
    marginBottom: 15,

  },
  footerButton1Text: {
    color: '#FF8C00',
    fontWeight: 'bold',
    fontSize: 20,

  },
  footerButton2Text: {
    color: '#FFf',
    fontWeight: 'bold',
    fontSize: 22,
    textDecorationLine: 'underline',
    marginBottom: 30,
  },

});

export default Home;
