/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';


export default class changeBox extends Component {
  handleButtonPress() {
    console.log('Button Pressed!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello, World!
        </Text>

        <Button
            onPress={this.handleButtonPress}
            title="Press the button!"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={styles.button}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

AppRegistry.registerComponent('changeBox', () => changeBox);
