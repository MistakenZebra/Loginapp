/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
  } from 'react-native';
import { Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import Routes from './components/Routes';


class Main extends Component<{}> {
    render(){
          return (
            <View style={styles.container}>
              <StatusBar backgroundColor="#1c313a"
                barStyle="light-content"/>
                <Routes />
            </View>
          );
         }
  }

  const styles = StyleSheet.create({
    container : {
      flex: 1,
    },
   });

   export default connect(null, null)(Main);
