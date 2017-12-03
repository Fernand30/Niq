import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router, Route, Schema, Animations, Scene,TabBar} from 'react-native-router-flux'

import FirstScreen from './screens/FirstScreen/index';
import Login from './screens/Login/index';
import Register from './screens/Register/index';
import Sms from './screens/Sms/index';
import TeleVerify from './screens/TeleVerify/index';
import CadastroName from './screens/CadastroName/index';
import CadastroEmail from './screens/CadastroEmail/index';
import EmailVerify from './screens/EmailVerify/index';
import SmsEmail from './screens/SmsEmail/index';
import Inbox from './screens/Inbox/home';
const Routes = () => (

  <Router hideNavBar={true}>
    <Scene key = "root">
      <Scene key = "firstscreen" component = {Inbox} hideNavBar={true} {...this.props} initial/>
      <Scene key = "login" component = {Login} hideNavBar={true} panHandlers={null} />
      <Scene key = "register" component = {Register} hideNavBar={true} panHandlers={null} />
      <Scene key = "televerify" component = {TeleVerify} hideNavBar={true} panHandlers={null} />
      <Scene key = "cadastroname" component = {CadastroName} hideNavBar={true} panHandlers={null} />
      <Scene key = "cadastroemail" component = {CadastroEmail} hideNavBar={true} panHandlers={null} /> 
      <Scene key = "emailverify" component = {EmailVerify} hideNavBar={true} panHandlers={null} />     
      <Scene key = "smsemail" component = {SmsEmail} hideNavBar={true} panHandlers={null} /> 
      <Scene key = "inbox" component = {Inbox} hideNavBar={true} panHandlers={null} />     
     
    </Scene>
 </Router>


);

export default Routes