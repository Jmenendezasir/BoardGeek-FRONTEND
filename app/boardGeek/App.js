/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';
import Header from './componentes/inicio/header/header'
import Main from './componentes/inicio/header/main'


class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct + 1 });
  }

  handleDown() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct - 1 });
  }
  render() {
    const { counter } = this.state;
  
    return(
      <View style={styles.container}>
        <Header />
        <Main />
        <Button
          title="+"
          onPress={this.handleUp}
        >
        </Button>
        <Button
          title="-"
          onPress={this.handleDown}
        >
        </Button>
        <Text style={styles.contador}>{counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#273c75',
  },
  contador: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
  },
})
export default App;