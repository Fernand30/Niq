const React = require("react-native");
const { Dimensions, Platform } = React;
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const deviceHeight = Dimensions.get("window").height;
const imagesize = responsiveHeight(10);
export default {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  checkImage:{
    marginTop: 100,
    width: responsiveWidth(11),
    height: responsiveHeight(6),
    resizeMode: 'cover'
  },
  telenumberText:{
    marginTop: 30,
    textAlign: 'center',
    fontSize: responsiveFontSize(2)
  },
  verifyText:{
    marginTop: 50,
    textAlign: 'center',
    fontSize: responsiveFontSize(3)
  },
  gmailText:{
    marginTop: 10,
    textAlign: 'center',
    fontSize: responsiveFontSize(2.5)
  },
  responseButton:{
    marginTop: 200,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#27ec8d',
    height:40,
    borderRadius: 5,
    width: responsiveWidth(80)
  },
  responseButtonText:{
    fontSize: responsiveFontSize(2),
    textAlign:'center'
  },
  lastButtonText:{
    fontSize: responsiveFontSize(2),
    textAlign:'center',
    color: '#27ec8d',
  }
};
