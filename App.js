import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  Credentials from './components/Credentials'
import AddEntry from './components/AddEntry'
import BankStatements from './components/BankStatements'
import BasePicker from './components/BasePicker'
import MyHeader from './components/MyHeader'
import { fetchStatements } from './actions'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import reducer from './reducers'
import middleware from './middleware'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { getInstances } from './utils/api'
import { FontAwesome, Ionicons, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { receiveInstances, selectInstance } from './actions'

const Tabs = createBottomTabNavigator(
  {
    SelectInstance: {
      screen: BasePicker,
      navigationOptions: {
        tabBarLabel: 'Select Instance',
        tabBarIcon: <EvilIcons name='check' size={20} />
      },
    },
    BankStatements: {
      screen: BankStatements,
      navigationOptions: {
        tabBarLabel: 'Bank Stmts',
        tabBarIcon: <MaterialCommunityIcons name='bank' size={20} />
      },
    },
    Credentials: {
      screen: Credentials,
      navigationOptions: {
        tabBarLabel: 'Instances',
        tabBarIcon: <EvilIcons name='gear' size={20} />
      },
    },
    AddEntry: {
      screen: AddEntry,
      navigationOptions: {
        tabBarLabel: 'Add Instance',
        tabBarIcon: <EvilIcons name='plus' size={20} />
      },
    },

  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      labelStyle: { fontSize: 15 },
      activeTintColor: '#00000f',

      style: {
        height: 56,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

export default class App extends React.Component {

  render() {

    const store = createStore(reducer, middleware)

    getInstances()
      .then((instances) => store.dispatch(receiveInstances(instances)))

    store
      .dispatch(fetchStatements('ucf1-fap0344'))
      .then(() => console.log(store.getState()))

    return (
       <Provider store={store}>


       <Tabs />


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
