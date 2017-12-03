const React = require("react-native");
const { Dimensions, Platform } = React;
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const deviceHeight = Dimensions.get("window").height;
const imagesize = responsiveHeight(10);
export default {
  container: {
    flex: 1,
    backgroundColor:'#f9f9f9',
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
  },
  tabImage:{
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    resizeMode: 'cover',
  },
  navigationView: {
    flexDirection: 'row',
    backgroundColor:'#f9f9f9',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingTop: 10,
    paddingBottom: 10
  },
  flexView1: {
    flexDirection: 'row',
    borderColor: '#dcdcdc',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor:'white',
    justifyContent:'space-between'
  },
  flexView2: {
    justifyContent:'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor:'white',
    paddingLeft:10
  },
  flexView3: {
    flex : 1,
    backgroundColor:'#232d3a',
    alignItems: 'center'
    
  },
  backView:{
    flexDirection: 'row',
    marginLeft: 10,
    alignItems:'center'
  },
  endView: {
    flexDirection: 'row',
    alignItems:'center',
    marginRight: 10,
    justifyContent:'flex-end'
  },
  navigationButtonImage:{
    width:responsiveWidth(3),
    height:responsiveHeight(3),
    resizeMode:'cover',
  },
  colomnView1:{
    marginLeft: 10,
    justifyContent:'center'
  },
  colomnText1:{
    fontSize:responsiveFontSize(2),
  },
  colomnText2:{
    fontSize:responsiveFontSize(2),
    color: '#006bff' 
  },
  colomnView2:{
    alignItems:'flex-end',
    marginRight:10,
    justifyContent:'center'
  },
  colomnText3:{
    fontSize:responsiveFontSize(2),
    color: '#006bff',
    textAlign:'right',
    marginRight:60 
  },
  accountImage: {
    width:responsiveWidth(7),
    height:responsiveWidth(7),
    resizeMode:'cover'
  },
  subrowFlex:{
    flexDirection:'row'
  },
  niqImage:{
    marginTop:responsiveHeight(10),
    width:responsiveWidth(33),
    height:responsiveHeight(10),
    resizeMode:'cover'
  },
  baseText:{
    fontSize:responsiveFontSize(3),
    textAlign:'center',
    marginTop:responsiveHeight(4),
    color:'white'
  },
  buttonStyle:{
    width:responsiveWidth(80),
    height:responsiveHeight(7),
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#27ec8d',
    marginTop: responsiveHeight(5),
  },
  lastText:{
    fontSize:responsiveFontSize(2),
    textAlign:'center',
    marginTop:responsiveHeight(4),
    color:'white'
  },
  tabStyle:{
    backgroundColor:'#f9f9f9',
    height: responsiveHeight(10),
  },
};
