import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from '../views/Home'
import Create from '../views/Create'
import Contact from '../views/Contact'

const Tab = createBottomTabNavigator()

const icons = {
    Home: {
      name: 'home'
    },
    Book:{
      name: 'book'
    },
    User:{
      name: 'account'
    }
}

function Tabs({route}) {

    const {user} = route.params 

    return (
        <Tab.Navigator
            screenOptions={ ({route}) => ({
                    tabBarIcon: ({ color, size }) => {
                        const { name } = icons[route.name];
                        return <Icon name={name} color={color} size={size}/>
                    } 
                })
            }
            tabBarOptions={{
                style:{
                    backgroundColor: '#FFF'
                },
                activeTintColor: '#FFF',
                inactiveTintColor: '#6E5494',
                activeBackgroundColor: '#6E5494'
            }}
        >
            <Tab.Screen name="Home" component={Home} initialParams={{user: user}}/>
            <Tab.Screen name="Book" component={Create} />
            <Tab.Screen name="User" component={Contact} />
        </Tab.Navigator>
    )
}

export default Tabs
