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
    marginTop: 150,
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
  responseButton:{
    marginTop: 150,
    backgroundColor:'transparent',
    alignItems:'center',
    justifyContent: 'center'
  },
  responseButtonText:{
    fontSize: responsiveFontSize(2),
    textAlign:'center'
  }
};
