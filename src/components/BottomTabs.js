    import React from 'react';
    import { createAppContainer } from "react-navigation";
    import Icon from 'react-native-vector-icons/SimpleLineIcons';
    import { createBottomTabNavigator } from 'react-navigation-tabs'
     import { createStackNavigator } from 'react-navigation-stack'
    import GreenScreen from "../screens/GreenScreen";
    import RedScreen from "../screens/RedScreen";
    import YellowScreen from "../screens/YellowScreen";
    import SearchScreen from "../screens/SearchScreen";
    const GreenTab = createStackNavigator({
        Home: GreenScreen
    });
    const RedTab = createStackNavigator({
        Red: RedScreen,

    });
    const YellowTab = createStackNavigator({
        Yellow : YellowScreen,

    });
    const SearchTab = createStackNavigator({
        Search : SearchScreen,

    });
    const Tabs = createBottomTabNavigator({
        Home: GreenTab,
        Search : SearchTab,
        Red: RedTab,
        Yellow: YellowTab
    }, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
                const { routeName } = navigation.state;
                let tabName;
                if(routeName === 'Home')
                {
                    tabName = 'home';
                }
                else if(routeName === 'Yellow')
                {
                    tabName = 'plane';
                }
                else if(routeName === 'Search')
                {
                    tabName = 'reload';
                }
                else
                {
                    tabName = "power";
                }
                return <Icon name={tabName} size={20} />
            }
        })
    });
    export default createAppContainer(Tabs);