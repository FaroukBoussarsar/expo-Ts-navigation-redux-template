import React from 'react'
import {Text, View}from 'react-native'
import { LoginScreenNavigationProp, LoginScreenRouteProp } from './types'

interface LoginScrenProps {
    navigation:LoginScreenNavigationProp
    route:LoginScreenRouteProp
}

const LoginScreen:React.FC<LoginScrenProps> =({navigation,route})=>{
    return(<View>
        <Text>Bonjour</Text>
    </View>)
}

export default LoginScreen