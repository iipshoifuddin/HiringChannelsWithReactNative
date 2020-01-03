import React, {Component} from 'react';

    import { ScrollView } from 'react-native-gesture-handler';
// import Counter from '../Components/counter'
import axios from 'axios';

// import connect to connect with redux store
//import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';

// import action
import { getNotes } from '../public/actions/notes'

import {
    Alert,
    View,
    ActivityIndicator,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Text,
    Body,
    Picker,
    Form,
    Thumbnail,
    Button,
    Left,
    Tab,
    Tabs
} from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import Tab3 from './Tab3.js';
import Tab2 from './Tab2.js';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
            this.state = {
            selected: "key2",
            counter: 0,
            data: []
            };
        const {navigation} = props;

        }
        onValueChange(value: string) {
            this.setState({
            selected: value
        });

    }


    render() {
       
        const items = [
            { name: 'TURQUOISE', code: '#1abc9c' },
        ];
        const data = this.props.navigation.getParam('allProps', {});

        return (

            
            <ScrollView>
            <Grid>
                <Row size={35} >
                <View style={{marginTop:0}}>
                    <Image style={styles.coverDetail} source={{uri: "http://34.226.154.250/public/images/bgCover.jpg"}}>
                    </Image>
                </View>

                </Row>
                <Row size={65}>                  
                    {/* <ScrollView style={styles.scrlViewCard}> */}
                    <View > 
                        <SectionGrid
                        itemDimension={150}
                        // staticDimension={300}
                        // fixed
                        // spacing={20}
                        sections={[
                            {
                            title: 'Title2',
                            data: items.slice(0, 1),
                            },]}
                        style={styles.gridView}
                        renderItem={() => (
                            <View >
                                <Card style={styles.cardHome}>
                                <Image source={{uri: `http://34.226.154.250/public/images/${data.showcase}`}} style={styles.imageCardHome}/>
                                </Card>
                            </View>)} 
                        />
                    </View>
                    {/* </ScrollView>  */}
                    <View style={styles.colDetailRight}>
                        <View style={{flex:1, width:200}}><Text style={styles.txtNameDetail}>{data.name}</Text></View>
                        <View style={{flex:1, width:200}}><Text style={styles.satuTxtDetailProfil}><Icon name={'wrench'} size={20} />  {data.skill}</Text></View>
                        <Text style={styles.satuTxtDetailProfil}><Icon name={'phone'} size={20} />  {data.phonenumber}</Text>
                        <Text style={styles.satuTxtDetailProfil}><Text style={{fontWeight:'bold', fontSize:22}}>$</Text>   6000 </Text>
                        <Text style={styles.duaTxtDetailProfil}><Icon name={'paper-plane'} size={20} />  {data.email}</Text>
                        <Text style={styles.duaTxtDetailProfil}><Icon name={'calendar'} size={20} />  {data.dateofbrith}</Text>
                        <Text style={styles.sumTxtDetailProfil}> Description : </Text>
                        <View style={{flex:1, width:200}}><Text style={styles.desTxtDetailProfil}>{data.description}</Text></View>
                    </View>
                </Row>
            </Grid>
        
            </ScrollView>
       

        );
    }
    }
    const styles = StyleSheet.create({
    container: {

    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 20
    },
    title: {
    height:50,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    },
    textBanner :{
            color: "#F5F6FA",
            position: "absolute",
            width: 583,
            height: 98,
            top : 50,
            left : 5,
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 33,

        },
        girdDropdown : {
            top : -5,
            bottom :0,
            borderWidth : 1,
            borderColor: '#0000',
        },

        girdDropdownRight : {
            top : -5,
            bottom :0,
            borderWidth : 1,
            borderColor: '#0000'
        },

        scrlViewHome : {
            flex : 1,
            borderWidth : 1,
            borderColor: '#0000',
            
        },

        cardHome : {
            flex: 1,
            width: 125,
            height:200,
            borderColor:"#FED330",
            borderWidth:3,
            top: -10

        },

        imageCardHome : {
            height: 150,
            width: 125,
            flex: 1
        },

        nameCard:{
            height : 80,
        },
        textNameCard:{
            fontSize: 20,
            textAlign: "center",
            fontWeight:"bold",
            
        },
        txtSkillCard:{
            textAlign: "center"
        },
        gitStarts:{
            top : 0,
            height:50
        },
        gridView: {
            marginTop: 20,
            flex: 1,
            marginBottom: 40,
            top : -70
        },
        itemContainer: {
            justifyContent: 'flex-end',
            borderRadius: 5,
            padding: 10,
            height: 150,
        },
        itemName: {
            fontSize: 16,
            color: '#fff',
            fontWeight: '600',
        },
        itemCode: {
            fontWeight: '600',
            fontSize: 12,
            color: '#fff',
        },
        coverDetail : {
            flex:1, 
            width:360,
            height:220,  
            borderWidth:1, 
            borderColor:"#F5F6FA" 
        },
        scrlViewCard : {
            top:-80
        },
        txtNameDetail : {
            fontFamily: "DM Sans",
            fontWeight: "bold",
            fontSize: 26,
            left : -30,
        },
        colDetailRight : {
            right : 0,
            textAlign: 'center',
            top : 15,
            bottom : 10,
        },
        satuTxtDetailProfil : {
            fontFamily: "Open Sans",
            fontSize: 18,
            top:7,
            left: -25



        },
        duaTxtDetailProfil : {
            fontFamily: "Open Sans",
            fontSize: 18,
            top:50,
            left:-175,
            
        },

        sumTxtDetailProfil : {
            fontFamily: "Open Sans",
            fontSize: 20,
            top:40,
            left:-175,
            marginTop: 20,
            fontWeight:"bold",

        },
        desTxtDetailProfil : {
            fontFamily: "Open Sans",
            fontSize: 16,
            top:40,
            left:-175,
            marginTop: 5,
            width : 300,
            marginBottom:100,
        },
        

    });

// map state to props to referring data in store
// const mapStateToProps = state => {
//     return {
//         notes: state.notes
//         // auth: state.auth
//     }
// }

// connect with redux,first param is map and second is component
// export default connect(mapStateToProps)(HomeScreen)
export default HomeScreen