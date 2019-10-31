import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Text, AsyncStorage } from 'react-native';

import api from '../services/api.js';

export default function Book({ navigation }) {
    const id = navigation.getParam('id');
    const [date, setDate] = useState('');

    async function handlerSubmit() {
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${id}/bookings`, {
            date
        }, {
            headers: { user_id }
        });

        Alert.alert('Solicitação de reserva enviada');

        navigation.navigate('List');

    }

    function handlerCancel() {
        navigation.navigate('List');

    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>SEU E-MAIL *</Text>
            <TextInput
                style={styles.input}
                placeholder="Qual data você quer reservar?"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                value={date}
                onChangeText={setDate}

            />
            <TouchableOpacity onPress={handlerSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlerCancel} style={[styles.button, styles.cancelButton]}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 40
    },
    label: {
        marginTop: 50,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 4
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },

    cancelButton: {
        marginTop: 10,
        backgroundColor: '#ccc',

    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16

    }

})