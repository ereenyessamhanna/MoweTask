import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import AlbumList from './AlbumList';
import ALbumDetail from './AlbumDetail';


const DrawerNavigation = DrawerNavigator({
  MovieScreen: {
    screen: (props) => <AlbumList {...props} url={"https://api.themoviedb.org/3/movie/popular?api_key=ab7f35103dac044075517a15da238890"} />,
    navigationOptions: {
      drawerLabel:'Movie',
    }
  },
  RallyScreen: {
    screen: (props) => <AlbumList {...props} url={"https://rallycoding.herokuapp.com/api/music_albums"} />,
    navigationOptions: {
      drawerLabel:'Songs',
    }
  },
  DetailScreen:{
    screen:ALbumDetail,
    navigationOptions: {
      drawerLabel: () => null
    }
  }
},
  {
    drawerWidth: 250,
    drawerPosition: "left",
    initialRouteName:"MovieScreen",

  })
export default DrawerNavigation;

