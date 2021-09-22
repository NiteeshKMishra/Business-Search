import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator({
  SearchScreen: SearchScreen
}, {
  defaultNavigationOptions: {
    title: 'Business Search',
    headerStyle: {
      backgroundColor: '#12989ee6'
    },
    headerTitleAlign: 'center'
  },
  initialRouteName: 'SearchScreen'
})

export default createAppContainer(navigator)