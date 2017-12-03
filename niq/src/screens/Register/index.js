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

export default class Register extends Component {
  
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
                      <View style={{flex:1,alignItems:'center'}}> 
                        <View style={Styles.circleView}>                       
                            <Image source={Images.btn_alertas3} style={Styles.imageStyle1}/>                        
                        </View>
                      </View>
                      <View style={{flex:1,alignItems:'center'}}>   
                          <Image source={Images.btn_alertas} style={Styles.imageStyle}/>
                      </View>
                      <View style={{flex:1,alignItems:'center'}}>   
                          <Image source={Images.btn_alertas2} style={Styles.imageStyle}/>
                      </View>  
                   </View>
                   
                   <View style={Styles.inputView}>
                        <Text style={Styles.textStyle}>
                          Coloque o seu{"\n"}telefone
                        </Text>
                   </View>
                   <View style={{marginTop:40, alignItems:'center'}}>
                        <TextInput  placeholderTextColor = 'white' style={Styles.textinput} />
                   </View>
                   <View style={Styles.buttonView}>
                        <TouchableOpacity style={Styles.button}>
                              <Text style={Styles.buttonText}>
                                    Enviar codigo de SMS
                              </Text>
                        </TouchableOpacity>
                   </View>
                       
            </View>
    );
  }
}

AppRegistry.registerComponent('Register', () => Layout_Text);
