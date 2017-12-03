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

export default class Inbox extends Component {
  
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
                   <View style={Styles.navigationView}>
                      <View style={Styles.backView}>
                          <TouchableOpacity>
                              <Image source={Images.backButton} style={Styles.navigationButtonImage}/>
                          </TouchableOpacity>    
                          <Text style={{marginLeft: 10,color:'#006bff'}}> Inbox (10)</Text>
                      </View>
                      <View style={Styles.endView}>
                          <TouchableOpacity>
                              <Image source={Images.thinBackButton} style={Styles.navigationButtonImage}/>
                          </TouchableOpacity>
                          <TouchableOpacity>    
                              <Image source={Images.thinFowardButton} style={[{marginLeft:20},Styles.navigationButtonImage]}/>
                           </TouchableOpacity>   
                      </View>
                   </View>                   
                   <View style={Styles.flexView1}>
                        <View style={Styles.colomnView1}>
                            <View style={Styles.subrowFlex}>
                                <Text style={Styles.colomnText1}>
                                    From: 
                                </Text>
                                <Text style={Styles.colomnText2}>
                                    NIQ 
                                </Text>
                             </View>
                             <View style={[{marginTop:5},Styles.subrowFlex]}>   
                                <Text style={Styles.colomnText1}>
                                    To:
                                </Text>
                                <Text style={Styles.colomnText2}>
                                    Pedro Augoto Bretas
                                </Text>
                                <Text style={Styles.colomnText1}>
                                    &gt;
                                </Text>
                             </View>   
                        </View>
                        <View style={Styles.colomnView2}>
                            <Image source={Images.account} style={Styles.accountImage} />
                            <Text style={Styles.colomnText3}>
                                Hide
                            </Text>
                        </View>
                   </View>
                   <View style={Styles.flexView2}>
                        <Text style={Styles.colomnText2}>
                            Confirm cader e-mail
                        </Text>
                         <Text style={Styles.colomnText1}>
                            Today as 6:30
                        </Text>
                   </View>
                   <View style={Styles.flexView3}>
                        <Image source={Images.Page1} style={Styles.niqImage}/>
                        <Text style={Styles.baseText}>
                          Clique no link abaixo{'\n'}com o seu telefone para{'\n'}logar na niqImage
                        </Text>
                        <TouchableOpacity style={Styles.buttonStyle}>
                            <Text style={Styles.buttonText}>
                              Volta para o App
                            </Text>
                        </TouchableOpacity> 
                        <Text style={Styles.lastText}>
                          Se sinta a vontade de deleta{'\n'}esse e-mail depois de logar
                        </Text> 
                   </View>
                     
            </View>
    );
  }
}

AppRegistry.registerComponent('Inbox', () => Layout_Text);
