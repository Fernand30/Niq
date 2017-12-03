const React = require("react-native");
const { Dimensions, Platform } = React;
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const deviceHeight = Dimensions.get("window").height;
const imagesize = responsiveHeight(10);
export default {
  container: {
    flex: 1,
    backgroundColor: '#232d3a'
  },
  page1View: {
  	alignItems: 'center',
  	justifyContent: 'center',
  	marginTop: 20
  },
  page1Image: {
  	width: responsiveWidth(30),
  	height: responsiveHeight(9),
  	resizeMode: 'stretch'
  },
  logoView: {
  	alignItems: 'center',
  	justifyContent: 'center',
  	marginTop: 30
  },
  logoImage: {
  	width: responsiveWidth(55),
  	height: responsiveHeight(35),
  	resizeMode: 'stretch'
  },
  textView: {
  	alignItems: 'center',
  	justifyContent: 'center',
  	marginTop: 10
  },
  textImage: {
  	width: responsiveWidth(80),
  	height: responsiveHeight(15),
  	resizeMode: 'stretch'
  },
  textStyle: {
  	fontSize: responsiveFontSize(3.5),
  	color: 'white',
  	textAlign: 'center'
  },
  registerButtonView: {
  	flex: 1,
  	marginTop:40,
  	paddingLeft: 20,
  	paddingRight: 20,
  },
  registerButton: {
  	alignItems:'center',
  	justifyContent:'center',
  	backgroundColor: '#27ec8d',
  	height:50,
  	borderRadius: 5
  },
  registerButtonText:{
  	fontSize: responsiveFontSize(2),
  	textAlign: 'center'
  },
  loginButtonView: {
  	flex: 1,
  	paddingLeft: 20,
  	paddingRight: 20,
  },
  loginButton: {
  	alignItems:'center',
  	justifyContent:'center',
  	borderColor: '#27ec8d',
  	borderWidth: 1,
  	height:50,
  	borderRadius: 5
  },
  loginButtonText:{
  	fontSize: responsiveFontSize(2),
  	textAlign: 'center',
  	color: '#27ec8d'
  }
};
