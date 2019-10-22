import React from 'react-native'
import {Text, View} from 'react-native'
import Padrao from '../Estilos/EstiloPadrao'

export const Inverter = props=>{
    const inv = props.texto.split('').reverse().join('');
    return <Text style={Padrao.elements}>{inv}</Text>
}