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
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  rowrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  imageStyle: {
  	width: responsiveWidth(6),
  	height: responsiveHeight(3),
  	resizeMode: 'stretch'
  },
  imageStyle1: {
    width: responsiveWidth(3),
    height: responsiveHeight(3),
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
  	marginTop: 30,
    alignItems: 'center'
  },
  inputView1: {
    marginTop: 30,
    alignItems: 'center'
  },
  textinput: {
  	borderColor: '#697079',
  	height: responsiveHeight(8),
  	width: responsiveWidth(80),
  	borderBottomWidth: 1,
  	paddingLeft: 5,
  	paddingBottom: 5,
    color: 'white',
    fontSize: responsiveFontSize(3)
  },
  textStyle: {
  	fontSize: responsiveFontSize(3),
  	color: 'white',
  	textAlign: 'center'
  },
  textStyle1: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    textAlign: 'center'
  },
  buttonView: {
  	marginTop:20,
  	paddingLeft: 20,
  	paddingRight: 20,
  },
  button: {
  	alignItems:'center',
  	justifyContent:'center',
  	backgroundColor: '#27ec8d',
  	height:60,
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
  },
  circleView:{
    width:50,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#3d4550',
    borderRadius: 25,
  }
};
