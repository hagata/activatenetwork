import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';


export default class changeBox extends Component {
  _handleButtonPress() {
    console.log('Button Pressed!');
  }

  render() {
    return (
        <Button
            onPress={this._handleButtonPress}
            title="Press the button!"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={styles.button}
          />
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
