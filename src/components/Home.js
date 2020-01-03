import React, { Component } from 'react';
import reactCSS from 'reactcss';
import HamburgerNav from './HambergerNav';
//import MyHeader from "../components/Header";
import {
  Alert,
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  ScrollView, 
  Image
} from 'react-native';

import { 
    Container, 
    Header,
    Content, 
    Card, 
    CardItem, 
    Text, 
    Body,
    Icon, 
    Picker, 
    Form, 
    Thumbnail, 
    Button, 
    Left 
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class CardHeaderFooterExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key2"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
      
           
            // const styles = reactCSS({
            // 'default': {
            //     container: {
            //         backgroundColor:'#FED330',
            //         top : -100,
            //         bottom :0,
            //         height : 180
            //     },
            //     textBanner :{
            //         color: "#F5F6FA",
            //         position: "absolute",
            //         width: 583,
            //         height: 98,
            //         top : 50,
            //         left : 5,
            //         fontFamily: "Open Sans",
            //         fontStyle: "normal",
            //         fontWeight: "bold",
            //         fontSize: 33,
                        
            //     },
            //     girdDropdown : {
            //         top : -80,
            //         bottom :0,
            //         borderWidth : 1,
            //         borderColor: '#0000',
            //     },

            //     girdDropdownRight : {
            //         top : -80,
            //         bottom :0,
            //         borderWidth : 1,
            //         borderColor: '#0000'
            //     },
                
            //     scrlViewHome : {
            //         flex : 1,
            //         top : -190,
            //         borderWidth : 1,
            //         height:340,
            //         borderColor: '#0000'
            //     },

            //     cardHome : {
            //         flex: 0,
            //         width: 155,
                    
            //     },
                
            //     imageCardHome : {
            //         height: 145, 
            //         width: 155, 
            //         flex: 1
            //     },

            //     nameCard:{
            //         height : 80,
            //     },
            //     textNameCard:{
            //         fontSize: 20,
            //         textAlign: "center",
            //         fontWeight:"bold"
            //     },
            //     txtSkillCard:{
            //         textAlign: "center"
            //     },
            //     gitStarts:{
            //         top : 0,
            //         height:50
            //     },
            //     girdHumberger:{
            //       top : -100,
            //       height : 720
            //     }

            // },
            // })



    return (
        <>
        <Grid >
              <HamburgerNav/>
        </Grid>
        
        {/* <Grid>
          <Col style={styles.container}>
            <Text style={styles.textBanner} > Welcome to hiring app </Text>
          </Col>
        </Grid>
        <Grid>
            
            <Picker
              mode="dropdown"
              style={styles.girdDropdown}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Name" value="key0" />
              <Picker.Item label="Skill" value="key1" />
              <Picker.Item label="Update" value="key2" />
            </Picker>
            <Picker
              mode="dropdown"
              style={styles.girdDropdownRight}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Upper" value="key0" />
              <Picker.Item label="Lower" value="key1" />
            </Picker>
            
            
        </Grid>
        <Grid>
        <ScrollView style={styles.scrlViewHome}>
        
        <Card style={styles.cardHome}>
            <Image source={{uri: "http://34.226.154.250/public/images/AlfatihTimur.jpg"}} style={styles.imageCardHome}/>
            <CardItem style={styles.nameCard}>
              
                <Body>
                  <Text style={styles.textNameCard}>Alfatih Timur</Text>
                  <Text style={styles.txtSkillCard}>Softwae Developer</Text>
                 
                  
                </Body>
            </CardItem >
            <CardItem style={styles.gitStarts}>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
            

 <Card style={styles.cardHome}>
            <Image source={{uri: "http://34.226.154.250/public/images/AlfatihTimur.jpg"}} style={styles.imageCardHome}/>
            <CardItem style={styles.nameCard}>
              
                <Body>
                  <Text style={styles.textNameCard}>Alfatih Timur</Text>
                  <Text style={styles.txtSkillCard}>Softwae Developer</Text>
                 
                  
                </Body>
            </CardItem >
            <CardItem style={styles.gitStarts}>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>



  <Card style={styles.cardHome}>
            <Image source={{uri: "http://34.226.154.250/public/images/AlfatihTimur.jpg"}} style={styles.imageCardHome}/>
            <CardItem style={styles.nameCard}>
              
                <Body>
                  <Text style={styles.textNameCard}>Alfatih Timur</Text>
                  <Text style={styles.txtSkillCard}>Softwae Developer</Text>
                 
                  
                </Body>
            </CardItem >
            <CardItem style={styles.gitStarts}>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>         

            
        </ScrollView>
        </Grid> */}
        </>
    );
  }
}
