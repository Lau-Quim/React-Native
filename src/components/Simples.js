import React from 'react'
import {Text} from 'react-native'
import Padrao from '../Estilos/EstiloPadrao'

export default props=>
        <Text style={Padrao.elements}> Arrow: {props.txt} </Text>
// Com Arrow functions
//export default props => <Text>Arrow: 1 {props.txt}</Text>