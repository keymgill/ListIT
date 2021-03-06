import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, StyleSheet, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SplashScreen = ({navigation}) => {

  // useEffect(() => {
  //   setTimeout(() => {<MainTabScreen />}, 3000);
  // },

  return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duration="5500"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="auto"
            />
        </View>
        <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
        >
            <Text style={styles.title}>Complete ordinary tasks!</Text>
        </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#0dceda',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
  });