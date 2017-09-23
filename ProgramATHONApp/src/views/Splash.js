import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {login} from '../actions';
import {connect} from 'react-redux';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Todo bien</Text>
      </View>
    );
  }
}

export default connect(null, {login})(Splash);
