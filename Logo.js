/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { Component } from 'react';
import {StyleSheet,
    View,
    Text,
    Image,
  } from 'react-native';

  export default class Logo extends Component<{}> {
      render(){
          return (
              <View style={styles.container}>
                <Image source={require('../images/logo.png')}
                style={{width: 40, height: 70}} />
              <Text style={styles.logoText}>Welcome to MyApp </Text>
              </View>
          );
      }
    }

      const styles = StyleSheet.create({
        container : {
          flexGrow: 1,
          justifyContent:'flex-end',
          alignItems:'center',
        },
        logoText : {
            marginVertical: 15,
            fontSize:18,
            color:'rgba(255, 255, 255, 0.7)',
          },
       });
