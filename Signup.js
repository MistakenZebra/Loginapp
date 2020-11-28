/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
  } from 'react-native';
  import { Field, reduxForm } from 'redux-form';

  import Logo from '../components/Logo';
  import Form from '../components/Form';
  import InputText from '../components/InputText';
  import { Actions} from 'react-native-router-flux';
  import { onChange } from 'react-native-reanimated';


  const styles = StyleSheet.create({
    container : {
      backgroundColor:'#455a64',
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },
    signupTextCont:{
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row',
    },
    signupText:{
        color:'rgba(255, 255, 255,0.6)',
        fontSize:16,
    },
    signupButton:{
        color:'#ffffff',
        fontSize: 16,
        fontWeight:'500',
    },
     button: {
            width:300,
            backgroundColor:'#1c313a',
            borderRadius: 25,
            marginVertical:10,
            paddingVertical: 13,
        },
        buttonText:{
            fontSize: 16,
            fontWeight:'500',
            color:'#ffffff',
            textAlign:'center',
        },
        errorText:{
            color:'#ffffff',
            fontSize:14,
            paddingHorizontal:16,
            paddingBottom:8,
        },
   });

   class Signup extends Component<{}> {
    goBack(){
        Actions.pop();
    }

    onSubmit=(values)=>{
        console.log(values);
    }

    renderTextInput = (field) => {
        const {meta: {touched,error},label, secureTextEntry,maxlength,KeyboardType, placeholder,input:{onChange, ...restInput}} = field;
        return (
            <View>
                <InputText
                onChangeText={onChange}
                maxlength={maxlength}
                placeholder={placeholder}
                KeyboardType={KeyboardType}
                secureTextEntry={secureTextEntry}
                label={label}
                {...restInput}
                />
           {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
    }

    render(){
        const { handleSubmit } = this.props;
          return (
              <View style={styles.container}>
                  <Logo/>
                  <Field
                  name="name"
                  placeholder="Name"
                  component={this.renderTextInput}  />
                  <Field
                  name="email"
                  placeholder="Email"
                  component={this.renderTextInput}  />
                  <Field
                  name="password"
                  placeholder="Password"
                  secureTextEntry={true}
                  component={this.renderTextInput}  />
                  <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit(this.onSubmit)}>
          <Text style={styles.buttonText}>Signup</Text>
                  </TouchableOpacity>
                  <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}>Already have an Account?</Text>
                        <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
                  </View>
              </View>
          );
         }
  }

const validate = (values)=>{
    const errors = {};
    if (!values.name) {
        errors.name = 'Name is required';
    }
    if (!values.email) {
        errors.email = 'Email is required';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    }

    return errors;
};

   export default reduxForm({
    // a unique name for the form
    form: 'signup',
    validate,
  })(Signup);
