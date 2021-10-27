import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Button, Platform, Switch } from 'react-native';
import Constants from 'expo-constants';
// import { FontAwesome5 } from '@expo/vector-icons';
import lightOff from './assets/light-off.jpg';
import lightOn from './assets/light-on.jpg';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TheLight() {
    const os = Platform.OS

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(!isEnabled)

    const touchStart = () => {
        setIsEnabled(true)
    }
    const touchEnd = () => {
        setIsEnabled(false)
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

            <View style={styles.blockImg}>
                <View style={styles.blockChild} onTouchStart={touchStart} onTouchEnd={touchEnd}>
                    <Image
                        style={styles.imgBulb}
                        source={lightOff} />

                    <Image
                        style={[styles.imgBulb, {position: 'absolute', width: '100%', height: windowHeight, top: 0, zIndex: (isEnabled)? 1: -1}]}
                        source={lightOn} />


                    {/* <Button
                        title={"Bật / tắt đèn " + os}
                        color={os === "android" ? '#000' : '#000'}
                        accessibilityLabel="Learn more about this purple button" /> */}

                    {/* <Switch
                        style={styles.switch}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    /> */}
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
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#FFF',
        alignItems: 'center',
        fontFamily: 'Verdana',
    },
    imgBulb: {
        // width: '100%',
        // height: null,
        // aspectRatio: 631 / 925,

        maxHeight: '100%',
        maxWidth: '100%',
        resizeMode: 'contain',
        backgroundColor: "#000"

        // width: windowWidth,
        // height: (windowWidth * 925) / 631,

    },
    blockImg: {
        // justifyContent: 'center', 
        flex: 1,
        width: '100%',
    },
    blockChild: {
        alignItems: 'center',
    },
    switch:{
        transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }]
    }
});
