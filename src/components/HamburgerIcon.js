    import React, {Component} from 'react';
    import {StyleSheet, Text, View} from 'react-native';
    import { withNavigation } from 'react-navigation';
    import { TouchableOpacity } from "react-native-gesture-handler";
    import Icon from 'react-native-vector-icons/SimpleLineIcons';
    class HamburgerIcon extends Component{
        render() {
        return (
            <TouchableOpacity
            style={{
                width: 44,
                height: 44,
                marginLeft: 20
            }}
            onPress={()=>{
                this.props.navigation.openDrawer();
            }}>
                <Icon name='menu' size={20} color="#F39C12" style={styles.humIcon} />
            </TouchableOpacity>

        )
        };
    }
    export default withNavigation(HamburgerIcon);

    const styles = StyleSheet.create({
        humIcon: {
            top:12

        }
     });