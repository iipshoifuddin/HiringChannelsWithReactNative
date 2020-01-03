import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HamburgerIcon from '../components/HamburgerIcon';

    import { ScrollView } from 'react-native-gesture-handler';
            import { SafeAreaView } from 'react-navigation';
import { Container, Tab, Tabs, StyleProvider } from 'native-base';
import Tab3 from './Tab3.js';
import Tab2 from './Tab2.js';
export default class GreenScreen extends Component {
    static navigationOptions = () => {
        return {
            headerLeft: <HamburgerIcon/>
        };
    };
// const Stack = createStackNavigator(
//         {
//                 Drawer: {
//                 screen: HamburgerNavigation,t
//                 navigationOptions: {
//                     header: null,
//             },
//         },
//                 BlueScreen: BlueScreen,
//                 DefaultScreen: {
//                     screen: DefaultScreen,
//                 }
//             }
//         );
    render() {

        const {navigate} = this.props.navigation;
        return (
            
            <Container>
                <Tabs>
                    <Tab
                    heading='Green Tab'>
                        <View style={styles.container}>
                            <Text style={styles.title}>Red Screen</Text>
                        <Text
                            onPress={() => navigate('DefaultScreen')}
                        >
                            DefaultScreen
                        </Text>
                        
                            
                        </View>
                    </Tab>
                    <Tab heading='Tab 2'>
                        <Tab2 />
                    </Tab>
                    <Tab heading='Tab 3'>
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        
        );
    }
    }
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    },
    title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    }
});

