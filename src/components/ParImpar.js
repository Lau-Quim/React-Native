import React, {Components} from 'react-native'
import {StyleSheet,View, Text} from 'react-native'
import Padrao from '../Estilos/EstiloPadrao'

export default props=>
    <View>
        {
            props.num % 2==0
            ?<Text style={Padrao.elements}>Par</Text>
            :<Text style={Padrao.elements}>Impar</Text>
       }
    </View>
    
    