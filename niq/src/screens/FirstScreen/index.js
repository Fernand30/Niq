import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Images, Metrics, Constants } from '../../Themes';
import Styles from './styles.js'

export default class FirstScreen extends Component {
  
  constructor(props){
        super(props);
      }

  componentDidMount(){
    
  }

  goLogin(){
    Actions.login();
  }

  goRegister(){
    Actions.register();
  }

  render() {
    that = this;
    return (
            <View style = {Styles.container}>
                   <View style={{height:30,}}/>
                   <View style={Styles.page1View}>
                        <Image source={Images.Page1} style={Styles.page1Image}/>
                   </View>
                   <View style={Styles.logoView}>
                        <Image source={Images.ilustracao} style={Styles.logoImage}/>
                   </View>
                   <View style={Styles.textView}>
                        <Text style={Styles.textStyle}> 
                          O jeito mais facil e seguro {"\n"} de comprar, pagar ou{"\n"} transferir dinheiro.
                        </Text>  
                   </View>
                   <View style={Styles.registerButtonView}>
                        <TouchableOpacity onPress={this.goRegister.bind(this)} style={Styles.registerButton}>
                              <Text style={Styles.registerButtonText}>
                                    Register
                              </Text>
                        </TouchableOpacity>
                   </View>
                   <View style={Styles.loginButtonView}>
                        <TouchableOpacity onPress={this.goLogin.bind(this)} style={Styles.loginButton}>
                              <Text style={Styles.loginButtonText}>
                                    Login
                              </Text>
                        </TouchableOpacity>
                   </View>
            </View>
    );
  }
}

AppRegistry.registerComponent('FirstScreen', () => Layout_Text);
