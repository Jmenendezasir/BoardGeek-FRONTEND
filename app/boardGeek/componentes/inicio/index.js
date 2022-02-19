import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Header() {
    return(
        <View title="boardGeek" style={styles.navegacion}>
            <Text style={styles.titulo}> BOARDGEEK </Text>
            <Text style={styles.subtitulo}> Tu página de juegos de mesa de confianza </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navegacion: {
        backgroundColor: 'black',
        fontWeight: 'bold',
        height: 70,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
    },
    subtitulo: {
        fontSize: 10,
        textAlign: 'center',
        color: 'orange',
    },
});

export default Header;