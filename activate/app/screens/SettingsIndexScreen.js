'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/viewContainer'
import t from 'tcomb-form-native'

let Form = t.form.Form

// here we are: define your domain model
let Person = t.struct({
  name: t.String,              // a required string
  pin: t.Number,  // an optional string
})

let options = {
  auto: 'placeholders',
   fields: {
     name: {
       label: 'Name'
     },
     pin: {
       label: 'Pin'
     }
   }
} // optional rendering options (see documentation)

class SuccessIndexScreen extends Component {
  constructor (props) {
    super(props)
  }

  _getInitialState() {

    let name = 'Natalia'
    let pin = 12345

    return {
      name: name,
      pin: pin
    }
  }

  _onPress () {
    let value = this.refs.form.getValue();

    if (value) {
      alert(value);
    }
  }

  _navigateToAppIndexScreen () {
    this.props.navigator.push({
      ident: 'AppIndex'
    })
  }

  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <TouchableOpacity onPress={(e) => this._navigateToAppIndexScreen()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <Form
            ref="form"
            type={Person}
            value={this._getInitialState()}
            options={options}
          />
        <TouchableHighlight style={styles.button} onPress={this._onPress.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  backButton: {
    color: 'white',
    padding: 15
  },
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },

  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})

module.exports = SuccessIndexScreen
