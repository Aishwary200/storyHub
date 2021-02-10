import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from "react-native-gesture-handler"

export default class WriteScreen extends Component {
    render() {
        return (
            <View>
                <Text style={styles.header}>Story Hub</Text>
                <Text style={styles.subTitle}>Write your Story</Text>
                <TextInput style={styles.inputBox}placeholder="title" />
                <TextInput style={styles.inputBox}placeholder="Author" />
                <TextInput style={styles.storyBox}placeholder="story" multiline={true}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputBox: {
        marginLeft:50,
        marginTop:30,
        width: 200,
        height: 50, 
        borderWidth: 2.5, 
        fontSize: 20,
        textAlign:'center'
    },
    storyBox:{
        marginLeft:50,
        marginTop:30,
        width: 450,
        height: 200, 
        borderWidth: 2.5, 
        fontSize: 20,
    },
    header:{
        backgroundColor:'pink',
        height:50,
        textAlign:'center',
        fontStyle:'bold',
        fontSize:30
    },
    subTitle:{
        backgroundColor:'yellow',
        fontSize:20,
        textAlign:'center',
        height:30,
        marginTop:20
    }
})