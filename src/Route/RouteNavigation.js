import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
}, {
    initialRouteName: 'Home',
    headerMode: 'none'

});

export default createAppContainer(AppNavigator);