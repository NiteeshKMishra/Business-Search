import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import SearchScreen from '../screens/BusinessSearchScreen'
import DetailsScreen from '../screens/BusinessOverviewScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  Details: DetailsScreen
}, {
  defaultNavigationOptions: {
    title: 'Business Search',
    headerStyle: {
      backgroundColor: '#12989ee6'
    },
    headerTitleAlign: 'center'
  },
  initialRouteName: 'Search'
})

export default createAppContainer(navigator)