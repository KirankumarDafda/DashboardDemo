/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  Dimensions
} from 'react-native';

import Colors from './../../Helper/Colors'
import dates from './../../Helper/dates.json'
import styles from './Styles'

const winWidth = Dimensions.get('window').width;



export default class Dashboard extends React.Component {

    constructor(){
        super()
        state ={

        }
        this.renderItem = this.renderItem.bind(this)
    }
    
    renderItem = ({ item }) => (
        <View style={styles.dates}>
            <Text style={item.selected ? styles.dateTextSelected : styles.dateText}>{item.date}</Text>
            <Text style={item.selected ? styles.dayTextSelected : styles.dayText}>{item.day}</Text>
            {
                item.selected &&
                <Image source={require('./../../Assets/Images/sun.png')} style={{height: 25, width: 25, }} />
            }
        </View>
    );
    
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <Image source={require('./../../Assets/Images/menu.png')} style={{ height: 30, width: 30}} />
                        </View>
                        <View style={styles.headerRight}>
                            <Image source={require('./../../Assets/Images/notification.png')} style={{ height: 20, width: 20}} />
                            <Image source={require('./../../Assets/Images/search.png')} style={{ height: 20, width: 20}} />
                            <Image source={require('./../../Assets/Images/profilepic.png')} style={{ height: 33, width: 33, borderRadius: 16, borderColor: Colors.white, borderWidth: 3}} />
                        </View>
                    </View>
                    <ScrollView>
                    <View style={{ marginTop: 20, }}>
                        <Text style={styles.texthead1}>Overview</Text>
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 5, alignItems: "flex-end"}}>
                            <Text style={styles.texthead2}>Dashboard</Text>
                            <Text style={styles.texthead3}>September 2019</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 20}}>
                        <FlatList
                            data={dates}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.lineShadow}></View>
                    <View style={{flexDirection: "row"}}>
                    <View style={styles.boxes}>
                        <View style={[styles.card,{ backgroundColor: Colors.boxColors1 }]}>
                            <View style={styles.cardIconContainer}>
                                <Image source={require('./../../Assets/Images/notification.png')} style={styles.cardIcon} />
                            </View>
                            <Text style={styles.cardhead}>Heart beat</Text>
                        </View>
                        <View style={[styles.card,{ backgroundColor: Colors.boxColors3 }]}>
                            <View style={styles.cardIconContainer}>
                                <Image source={require('./../../Assets/Images/notification.png')} style={styles.cardIcon} />
                            </View>
                            <Text style={styles.cardhead}>Colories</Text>
                        </View>
                        <View style={{marginTop: -10, }}>
                            <View style={{flexDirection: "row", marginBottom: 5,}}>
                                <Image source={require('./../../Assets/Images/profilepic.png')} style={[styles.footerUserIcon, { zIndex: 4,}]} />
                                <Image source={require('./../../Assets/Images/profilepic.png')} style={[styles.footerUserIcon, { zIndex: 3,}]} />
                                <Image source={require('./../../Assets/Images/profilepic.png')} style={[styles.footerUserIcon, { zIndex: 2,}]} />
                                <Image source={require('./../../Assets/Images/profilepic.png')} style={[styles.footerUserIcon, { zIndex: 1,}]} />
                            </View>
                            <Text style={styles.usersText}>150,000 users</Text>
                            <Text style={styles.friendsText}>+125 Your Friends online</Text>
                        </View>

                    </View>
                    <View style={styles.boxes}>

                        <View>
                            <Text style={styles.boxHeadRevenue}>Total Revenue</Text>
                            <View style={styles.revenueValues}>
                                <Text style={{color: Colors.white, fontSize: 16,}}>$ 120,000</Text>
                                <Image source={require('./../../Assets/Images/graph.png')} style={{height: 15, width: 15, marginLeft: 10, marginRight: 5, }} />
                                <Text style={{color: Colors.boxColors3, fontSize: 16, }}>15,000</Text>
                            </View>
                        </View>

                        <View style={[styles.card,{ backgroundColor: Colors.boxColors2 }]}>
                            <View style={styles.cardIconContainer}>
                                <Image source={require('./../../Assets/Images/notification.png')} style={styles.cardIcon} />
                            </View>
                            <Text style={styles.cardhead}>Cycling</Text>
                        </View>

                        <View style={[styles.card,{ backgroundColor: Colors.boxColors4 }]}>
                            <View style={styles.cardIconContainer}>
                                <Image source={require('./../../Assets/Images/notification.png')} style={styles.cardIcon} />
                            </View>
                            <Text style={styles.cardhead}>Swimming</Text>
                        </View>
                    </View>
                    </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
};
