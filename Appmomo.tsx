import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import urlFacebook from './assets/facebook.png';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const checkValue = () => {
    console.log(Constants.statusBarHeight);
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.boxText}>
        <Text style={styles.text}>Nhập thông tin</Text>
      </View>

      <View style={[styles.form]}>
        <FontAwesome5 name="user-alt" size={24} color="black" style={styles.iconUser} />
        <TextInput
          style={styles.input}
          placeholder="Nhập họ & tên"
          autoFocus={true}
          textContentType="username"
        />
        <FontAwesome5 name="voicemail" size={24} color="black" style={styles.iconEmail} />
        <TextInput
          style={styles.input}
          placeholder="Nhập email"
          textContentType="password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.btn} onPress={checkValue}>XÁC NHẬN</Text>
      </TouchableOpacity>


      <TouchableOpacity>
        <View style={styles.linkfb}>
          <Image
            style={{ width: 26, height: 26 }}
            source={urlFacebook}
          />
          <Text style={styles.textfb}> Sử dụng thông tin Facebook</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const icon = {
  position: 'absolute',
  color: '#A8A8A8'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#AD076B',
    alignItems: 'center',
    fontFamily: 'Verdana'
  },
  boxText: {
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    padding: 5,
    fontFamily: 'Verdana',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    margin: 5,
    width: 270,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18,
    color: '#A8A8A8'
  },
  btn: {
    backgroundColor: '#830252',
    color: '#FFF',
    fontWeight: 500,
    padding: 15,
    margin: 15,
    width: 270,
    borderRadius: 25,
    textAlign: 'center',
    fontSize: 20
  },
  linkfb: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textfb: {
    color: '#fff',
    fontFamily: 'Verdana',
  },
  form: {
    marginTop: 30,
    marginBottom: 15
  },
  iconUser: {
    ...icon,
    top: 16,
    left: 20,
  },
  iconEmail: {
    ...icon,
    left: 20,
    top: 82
  }
});
