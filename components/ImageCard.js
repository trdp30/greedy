import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

export class ImageCard extends Component {
  render() {
    return (
      <Card>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: this.props.data.avatar }}
        />
      </Card>
    );
  }
}
  const styles = StyleSheet.create({
    user: {
      color: 'blue',
    },
    image: {
      height:80,
      color: 'red',
    },
    name: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 10,
    },
  });