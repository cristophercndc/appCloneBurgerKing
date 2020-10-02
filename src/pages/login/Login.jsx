import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () => {
    return (
        <>
            <View style={styles.header}>
                <Image style={styles.hederImage} source={require('../../../assets/logo-burger-king.png')} />
                <StatusBar barstyle="light" backgroundColor="#FF8C00" />
            </View>

            <View style={styles.container}>

                <View style={styles.loginEmail}>
                    <Text style={styles.loginEmailText}>E-mail*</Text>
                    < TextInput style={styles.loginDadosEmail} underlineColorAndroid='#F6A24A' placeholder='nome@e-mail.com' placeholderTextColor='#FCB86E' />
                </View>

                <View >
                    <Text style={styles.loginPwdText}>Digite sua senha*</Text>
                </View>


                <View style={styles.loginPwd}>
                    <View style={styles.teste}>
                        <TouchableOpacity style={styles.teste}>
                            <Icon name='eye' color='#fff' size={20} style={styles.eyeImage} />
                            <Text style={styles.eyeText}>exibir</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput style={styles.loginDadosPwd} underlineColorAndroid='#f7ba79' />
                </View>

                <View>
                    <TouchableOpacity>
                        <Text style={styles.forgotPwd}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.preFooter}>

                <View >
                    <TouchableOpacity >
                        <View style={styles.login}>
                            <Text style={styles.buttonText}> LOGIN </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity >
                        <View style={styles.loginFace}>
                            <Image style={styles.logoFace} source={require('../../../assets/logo.face.png')}></Image>
                            <Text style={styles.buttonTextFace}> CONTINUAR COM FACEBOOK </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.footerButton1}>
                    <TouchableOpacity >
                        <Text style={styles.footerButtonTextc}>CADASTRE-SE</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footerButton2} >
                    <TouchableOpacity >
                        <Text style={styles.footerButtonTexts}>Sair da conta</Text>
                    </TouchableOpacity>
                </View>
            </View>






        </>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FF8C00',
        alignItems: 'center',
    },

    hederImage: {
        marginTop: 40,
        height: 160,
        width: 160,
    },
    container: {
        backgroundColor: '#FF8C00',

    },
    loginEmail: {
        backgroundColor: '#FF8C00',

    },
    loginEmailText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 70,
        marginLeft: 20,
        alignItems: 'flex-start',

    },
    loginDadosEmail: {
        color: '#fff',
        fontSize: 22,
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },

    loginPwdText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 10,
        alignItems: 'flex-start',
    },

    eyeImage: {
        marginRight: 5,
        height: 20,
        width: 20,
        backgroundColor: '#FF8C00',

    },
    eyeText: {
        color: '#FFf',
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 25,
        textDecorationLine: 'underline',
    },
    loginDadosPwd: {
        padding: 0,
        marginLeft: 20,
        marginRight: 20,
        marginTop:5,
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',

    },
    forgotPwd: {
        color: '#FFf',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 20,
        alignSelf: 'flex-end',

    },
    teste: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
    },
    login: {
        marginBottom: 7,
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 136,
        paddingVertical: 10,
        alignItems: 'center',

    },
    preFooter: {
        backgroundColor: '#FF8C00',
        alignItems: 'center',
        flex: 1,
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

    buttonText: {
        color: '#f7ba79',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonTextFace: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    logoFace: {
        backgroundColor: '#FF8C00',
        width: 25,
        height: 25,
        marginRight: 17,
    },
    footer: {
        flex: 0,
        backgroundColor: '#FF8C00',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    footerButton1: {
        marginLeft: 100,
        flex: 1,
        backgroundColor: '#FF8C00',

    },
    footerButton2: {
        marginRight: 60,
        marginBottom: 10,
        flex: 1,
        backgroundColor: '#FF8C00',

    },
    footerButtonTexts: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    footerButtonTextc: {

        color: '#FFf',
        fontWeight: 'bold',
        fontSize: 18,
       

    },

});

export default Login;
