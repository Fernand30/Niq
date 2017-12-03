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

export default class TeleVerify extends Component {
  
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
                   <Image source={Images.checksign} style={Styles.checkImage} />
                   <Text style={Styles.telenumberText}>
                        21 8958473999
                   </Text>
                   <Text style={Styles.verifyText}>
                        Seu telephone foi{'\n'}verificado
                   </Text> 
                   <TouchableOpacity style={Styles.responseButton}>
                      <Text style={Styles.responseButtonText}>
                          Toque para contnuar
                      </Text>    
                   </TouchableOpacity>                   
            </View>
    );
  }
}

AppRegistry.registerComponent('TeleVerify', () => Layout_Text);
