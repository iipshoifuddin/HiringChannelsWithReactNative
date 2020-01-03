/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React, { Component } from 'react';
import 'react-native-gesture-handler'
//import Pokemon from './src/screens/Pokemon'
import MyHeader from './src/components/Header'
import HomePage from './src/components/Home'


// import HambergerNav from './src/Route/HambergerNav'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Greeting,
  Card
} from 'react-native';

import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


import { Provider } from 'react-redux' // import to wrap component in redux

// screens
//import Home from './src/Screens/Home';
//import Note from './src/Screens/Note';

// import store
import store from './src/public/store/configureStore';


//const AppContainer = createAppContainer(AppNavigator);






//let store = configureStore()

const App: () => React$Node = () => {
  return (
    <>
    
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
        <Header/>
        <HomePage /> */}
  <Provider store = { store }>
    {/* <HambergerNav /> */}
    {/* <MyHeader /> */}
    <HomePage />
  </Provider>
    

         {/* <Pokemon /> */}
        {/* </ScrollView>
      </SafeAreaView> */}
      {/* <Container > */}
      {/* <Grid>
        
            <Header />
      </Grid>
         */}
        {/* <Grid>
          <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
        </Grid> */}
        {/* <HomePage /> */}
      {/* </Container> */}
    </>
  );
};

export default App;
