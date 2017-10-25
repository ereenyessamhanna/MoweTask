//importing library to help create component
import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry
}
  from 'react-native';
import DrawerNavigation from './src/components/DrawerNavigation';

AppRegistry.registerComponent('project', () => DrawerNavigation);

