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
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	marginTop: 20
  },
  page1Image: {
  	width: responsiveWidth(30),
  	height: responsiveHeight(9),
  	resizeMode: 'stretch'
  },
  ic_arrow_back_black_24px: {
  	width: responsiveWidth(6),
  	height: responsiveHeight(3),
  	resizeMode: 'stretch',
  	marginLeft: 10,
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
  	marginTop: 30
  },
  inputView: {
  	marginTop: 40,
    alignItems: 'center'
  },
  textinput: {
  	borderColor: '#697079',
  	height: responsiveHeight(5),
  	width: responsiveWidth(80),
  	borderBottomWidth: 1,
  	paddingLeft: 5,
  	paddingBottom: 5,
    color: 'white',
    fontSize: responsiveFontSize(3)
  },
  textStyle: {
  	fontSize: responsiveFontSize(2),
  	color: '#27ec8d',
  	textAlign: 'center'
  },
  buttonView: {
  	marginTop:40,
  	paddingLeft: 20,
  	paddingRight: 20,
  },
  button: {
  	alignItems:'center',
  	justifyContent:'center',
  	backgroundColor: '#27ec8d',
  	height:50,
  	borderRadius: 5
  },
  buttonText:{
  	fontSize: responsiveFontSize(2),
  	textAlign: 'center'
  },
  loginButtonView: {
  	flex: 1,
  	paddingLeft: 20,
  	paddingRight: 20,
  },
  
  loginButtonText:{
  	fontSize: responsiveFontSize(2),
  	textAlign: 'center',
  	color: '#27ec8d'
  }
};
