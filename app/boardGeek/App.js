/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

/** Podemos indicar los estilos desde el propio tag o desde las constantes que declaremos */

class App extends Component {
  render() {
    return(
    <View style={styles.container}>
      <View style={styles.containerOrange} />
      <View style={styles.containerOrange} />
      <View style={{ flex: 1, backgroundColor: 'green' }} />
    </View>
    );
  }
}
/** Podemos meter los estilos mediante constantes, para poder llamarlos así desde cada tag.*/
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'blue',
  },
  containerOrange: {
    flex: 1,
    backgroundColor: 'orange',
  }
});

export default App;