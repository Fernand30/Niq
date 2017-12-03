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

export default class SmsEmail extends Component {
  
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
                   <View style={Styles.rowrow}>
                       <View style={{width:50}}>
                          <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={Images.ic_arrow_back_black_24px} style={Styles.ic_arrow_back_black_24px}/>
                          </TouchableOpacity>    
                       </View> 
                       <View style={Styles.page1View}>
                          <View style={{flex:1,alignItems:'center'}}>                                           
                                <Image source={Images.btn_alertas3} style={Styles.imageStyle1}/>                        
                          </View>
                          <View style={{flex:1,alignItems:'center'}}>  
                              <View style={Styles.backView}>          
                                  <Image source={Images.btn_alertas} style={Styles.imageStyle}/>
                              </View>
                          </View>
                          <View style={{flex:1,alignItems:'center'}}>   
                              <Image source={Images.btn_alertas2} style={Styles.imageStyle}/>
                          </View>  
                       </View>
                       <View style={{width:50}}>

                       </View>
                   </View>
                   <View style={{marginTop:30, alignItems:'center'}}>
                        <Text style={Styles.textStyle}>
                          Vamos precisar de uma{'\n'}senha de 6 degitos
                        </Text>
                   </View>
                   
                   <View style={Styles.parentRowView}>
                        <View style={Styles.childRowView}>
                            <TextInput underlineColorAndroid={'transparent'} style={Styles.smsTextInput} keyboardType = 'numeric'/>
                            <TextInput underlineColorAndroid={'transparent'} style={Styles.smsTextInput} keyboardType = 'numeric'/>
                            <TextInput underlineColorAndroid={'transparent'} style={Styles.smsTextInput} keyboardType = 'numeric'/>
                         </View>
                         <View style={Styles.childRowView}>
                            <TextInput underlineColorAndroid={'transparent'} style={Styles.smsTextInput} keyboardType = 'numeric'/>
                            <TextInput underlineColorAndroid={'transparent'} style={Styles.smsTextInput} keyboardType = 'numeric'/>
                            <TextInput underlineColorAndroid={'transparent'} style={Styles.smsTextInput} keyboardType = 'numeric'/>
                         </View>
                   </View>
                   <View style={Styles.buttonView}>
                        <TouchableOpacity style={Styles.continuButton}>
                              <Text style={Styles.continuButtonText}>
                                    continuar
                              </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.button}>
                              <Text style={Styles.buttonText}>
                                    re-enviar e-mail
                              </Text>
                        </TouchableOpacity>
                   </View>                       
            </View>
    );
  }
}

AppRegistry.registerComponent('SmsEmail', () => Layout_Text);
