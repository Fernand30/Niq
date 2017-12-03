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

export default class CadastroEmail extends Component {
  
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
                              <View style={Styles.circleView}>         
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
                   
                   <View style={Styles.inputView}>
                        <Text style={Styles.textStyle}>
                          Oi, Maria Sabba
                        </Text>
                   </View>
                   <View style={Styles.inputView1}>
                        <Text style={Styles.textStyle1}>
                          Qual e o seu e-mail?
                        </Text>
                   </View>
                   <View style={{marginTop:20, alignItems:'center'}}>
                        <TextInput  underlineColorAndroid={'transparent'} placeholderTextColor = 'white' style={Styles.textinput} />
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

AppRegistry.registerComponent('CadastroEmail', () => Layout_Text);
