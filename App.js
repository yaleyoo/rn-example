import React, {Component} from 'react';
import { StyleSheet, Button } from 'react-native';
import Homepage from './pages/Homepage';
import PostDetail from './pages/PostDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import store from './data/store'

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <Provider store = {store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Homepage} />
            <Stack.Screen name="Detail" component={PostDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

