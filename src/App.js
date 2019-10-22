import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import {Inverter} from './components/Mult'

export default class App extends React.Component {
    render(){
        return(
            <View>
                <Text style={styles.siz}>App1!!!</Text>
                <Simples txt = 'Esse e o txto que foi puxado do Simples'/>
                <ParImpar num={22}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    siz:{
        fontSize: 30
    }
})
