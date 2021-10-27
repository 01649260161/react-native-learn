import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';
import faceBookBanner from './assets/facebook-banner.jpg';

export default function App() {
  const checkValue = () => {
    console.log(Constants.statusBarHeight);
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Image
        style={styles.imgBanner}
        source={faceBookBanner}
      />

      <View style={{justifyContent: 'space-between', flex: 1, width: '100%', paddingRight: 15, paddingLeft: 15,}}>
        <View style={{ width: '100%' }}>
          <TextInput
            style={styles.input}
            placeholder="Số điện thoại hoặc email"
            textContentType="telephoneNumber"
            keyboardType="numeric"
          // secureTextEntry={true}
          />
          <TextInput
            style={[styles.input, { marginTop: 0 }]}
            placeholder="Mật khẩu"
            textContentType="password"
            secureTextEntry={true}
          />

          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.btnLogin}>
              Đăng nhập
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.textLink}>
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.textLink}>
              Quay lại
            </Text>
          </TouchableOpacity>


        </View>

        <View style={{ width: '100%' }}>
          <View style={styles.labelOr}>
            <View style={styles.lineOr}></View>
            <Text style={styles.textOr}>HOẶC</Text>
            <View style={styles.lineOr}></View>
          </View>

          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.btnRegister}>
              Tạo tài khoản mới
            </Text>
          </TouchableOpacity>
        </View>

      </View>

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
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFF',
    alignItems: 'center',
    fontFamily: 'Verdana',
  },
  input: {
    borderColor: '#CCC',
    width: '100%',
    marginTop: 35,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderRadius: 2
  },
  btnLogin: {
    width: '100%',
    backgroundColor: '#0077F6',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    borderRadius: 5,
    color: 'gainsboro',
    marginTop: 15,
    marginBottom: 15
  },
  btnRegister: {
    width: '100%',
    backgroundColor: '#E7F4FF',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    borderRadius: 5,
    color: '#1E88E6',
    marginTop: 15,
    marginBottom: 15,
  },
  labelOr: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    alignSelf: 'center'
  },
  textOr: {
    textAlign: 'center',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10,
    color: '#333'
  },
  lineOr: {
    borderBottomWidth: 1,
    flex: 1,
    height: 0,
    borderColor: '#bbb'
  },
  textLink: {
    color: '#4973C5',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 10
  },
  imgBanner: {
    width: '100%',
    height: null,
    aspectRatio: 750 / 460,
  }
});
