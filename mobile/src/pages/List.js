import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image, AsyncStorage } from 'react-native';
import logo from '../assets/logo.png';

import SpotList from '../components/SpotList';

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const arrayTechs = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(arrayTechs);
        });

    }, []);

    return (
        <SafeAreaView style={styles.container}>

            <Image style={styles.logo} source={logo} />
            <ScrollView>

                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        marginTop: 50,
        alignSelf: 'center'
    }

});