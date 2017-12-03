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

export default class EmailVerify extends Component {
  
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
                   <Image source={Images.emailVerify} style={Styles.checkImage} />
                   <Text style={Styles.telenumberText}>
                        PedroABB
                   </Text>
                   <Text style={Styles.gmailText}>
                        pedro@gmail.com
                   </Text> 
                   <Text style={Styles.verifyText}>
                        Email enviando
                   </Text> 
                   <TouchableOpacity style={Styles.responseButton}>
                      <Text style={Styles.responseButtonText}>
                          Toque para contnuar
                      </Text>    
                   </TouchableOpacity>     
                   <TouchableOpacity style={{marginTop:10}}>
                      <Text style={Styles.lastButtonText}>
                          re enviar e-mail
                      </Text>    
                   </TouchableOpacity>                    
            </View>
    );
  }
}

AppRegistry.registerComponent('EmailVerify', () => Layout_Text);
