import React, { useState } from 'react'
import { View, Button, StyleSheet, TextInput } from 'react-native'
import { useAuth } from '../../contexts/auth'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        width: '80%',
        borderWidth: 1
    },
})


const Login = () => {

    const { signed, signIn } = useAuth()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        signIn(email, password)
    }

    return (
        <View style={styles.container}>

            <TextInput style={styles.input}
                placeholder="Email"
                value={email}
                autoCorrect={false}
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={text => setEmail(text)}
            />

            <TextInput style={styles.input}
                placeholder="Senha"
                value={password}
                autoCorrect={false}
                secureTextEntry={true}
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={text => setPassword(text)}
            />

            <Button title="Login" onPress={() => { handleLogin() }} />
            
        </View>
    )
}

export default Login