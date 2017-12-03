import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Images, Metrics, Constants } from '../../Themes';
import Styles from './styles.js'

export default class Login extends Component {
  
  constructor(props){
        super(props);
      }

  componentDidMount(){
    
  }

  goBack(){
    Actions.pop();
  }

  render() {
    that = this;
    return (
            <View style = {Styles.container}>
                   <View style={{height:30,}}/>
                   <View style={Styles.page1View}>
                      <View style={{flex:1}}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={Images.ic_arrow_back_black_24px} style={Styles.ic_arrow_back_black_24px}/>
                        </TouchableOpacity>    
                      </View>
                      <View style={{flex:1}}>
                          <Image source={Images.Page1} style={Styles.page1Image}/>
                      </View>
                      <View style={{flex: 1}}>

                      </View>  
                   </View>
                   
                   <View style={Styles.inputView}>
                        <TextInput underlineColorAndroid={'transparent'} placeholder ="Email" placeholderTextColor = 'white' style={Styles.textinput} />
                   </View>
                   <View style={{marginTop:20, alignItems:'center'}}>
                        <TextInput underlineColorAndroid={'transparent'} placeholder ="Senha" placeholderTextColor = 'white' style={Styles.textinput} />
                   </View>
                   <View style={Styles.buttonView}>
                        <TouchableOpacity style={Styles.button}>
                              <Text style={Styles.buttonText}>
                                    Enter
                              </Text>
                        </TouchableOpacity>
                   </View>
                   <View style={{marginTop:10,alignItems:'center'}}>
                       <Text style={Styles.textStyle}>
                          Esqueci minha Senha
                       </Text>
                   </View>       
            </View>
    );
  }
}

AppRegistry.registerComponent('Login', () => Layout_Text);
