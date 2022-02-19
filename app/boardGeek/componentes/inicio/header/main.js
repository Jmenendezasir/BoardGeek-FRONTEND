import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Main() {
    return(
        <View>
            <Text style={styles.texto}>Hola mundo desde el main</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
});

export default Main;