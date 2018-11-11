import React from 'react';
import { View, ScrollView } from 'react-native';
import { ImageCard } from "../ImageCard";
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import DetailView from '../../screens/movie/DetailView';
const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
   name: 'brynn',
   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
},
 {
   name: 'brynn',
   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
   name: 'brynn',
   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 ];

export default class Base extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          {
            users.map((u, i) => {
              return (
                <ImageCard 
                  data={u}
                  onPress={() => this.props.navigation.navigate('Details')}
                />
              );
            })
          }
        </ScrollView>
      </View>
    );
  }
};

const Details = createStackNavigator({
  Details: DetailView,
});