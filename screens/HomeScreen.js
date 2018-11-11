import React from 'react';
import { View } from 'react-native';
import { HeaderTab } from '../components/HeaderTab';
import Base from '../components/home/Base';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{height:80}}>
          <HeaderTab title="Home"/>
        </View>
        <View>
          <Base />
        </View>
      </View>
    );
  }
}