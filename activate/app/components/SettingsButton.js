import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class SettingsButton extends Component {
  constructor(props) {
      super(props)
    }

  _handleButtonPress() {
    console.log('Button Pressed!')
    this._navigateToSettingsScreen()
  }

  _navigateToSettingsScreen () {
    this.props.navigator.push({
      ident: "SettingsShow"
    })
  }
  _renderSettingsButton() {
    return (
      <TouchableOpacity style={styles.settingsButton} onPress={(e) => this._handleButtonPress(e)}>
        <Icon name="cog" style={styles.settingsIcon} />
      </TouchableOpacity>
    )

  }
  render() {
    return (
      this._renderSettingsButton()
    )
  }
}

const styles = StyleSheet.create({
  settingsButton: {
    height: 30,
    width: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  settingsIcon: {
    height: 30,
    width: 30,
    color: 'deepskyblue'

  }

})

module.exports = SettingsButton
