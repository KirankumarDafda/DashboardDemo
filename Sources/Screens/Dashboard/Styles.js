import {
    StyleSheet,
    Dimensions
} from 'react-native';

const winWidth = Dimensions.get('window').width;
import Colors from './../../Helper/Colors'



export default StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    header: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerLeft: {
        flex: 0.5,
    },
    headerRight: {
        flex: 0.25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    content: {
        marginTop: 20,
    },
    texthead1: {
        color: Colors.white,
        fontSize: 18,
    },
    texthead2: {
        color: Colors.white,
        fontSize: 22,
        fontWeight: "900",
    },
    texthead3: {
        color: Colors.boxColors3,
        fontSize: 16,
    },
    dates: {
        height: 90,
        backgroundColor: Colors.white,
        width: 45,
        borderRadius: 45,
        alignItems: "center",
        padding: 5,
        marginRight: 13,
    },
    dateTextSelected: {
        paddingTop: 7,
        height: 35,
        width: 35,
        borderRadius: 17,
        overflow: "hidden",
        textAlign: "center",
        backgroundColor: Colors.boxColors3,
        alignContent: "center",
        marginBottom: 7,
        color: Colors.white,
        fontSize: 16,
        fontWeight: "bold",
    },
    dayTextSelected: {
        color: Colors.black,
        fontSize: 14,
        fontWeight: "bold",
    },
    dateText: {
        paddingTop: 7,
        height: 35,
        width: 35,
        borderRadius: 17,
        overflow: "hidden",
        textAlign: "center",
        backgroundColor: Colors.lightgray,
        alignContent: "center",
        marginBottom: 7,
        color: Colors.black,
        fontSize: 16,
        fontWeight: "bold",
    },
    dayText: {
        color: Colors.lightgray,
        fontSize: 14,
        fontWeight: "bold",
    },
    lineShadow: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        height: 4,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: Colors.black,
        width: winWidth-100,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    card: {
        width: winWidth/2-40,
        height: winWidth/2,
        borderRadius: 20,
        marginBottom: 30,
        overflow: "hidden",
    },
    boxes: {
        marginLeft: 15,
        marginRight: 15,
    },
    boxHeadRevenue: {
        fontSize: 16,
        color: Colors.white,
        textAlign: "right",
        fontWeight: "400",
    },
    revenueValues: {
        justifyContent: "flex-end",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 20,
    },
    usersText: {
        fontSize: 16,
        color: Colors.white,
    },
    friendsText: {
        fontSize: 14,
        color: Colors.boxColors3,
    },
    footerUserIcon: {
        width: 35, 
        height: 35, 
        borderRadius: 17, 
        marginRight: -17,
        borderColor: Colors.white,
        borderWidth: 2,
    },
    cardhead: {
        padding: 10,
        paddingTop: 20,
        fontSize: 14,
        color: Colors.white
    },
    cardIconContainer: {
        position: "absolute",
        top: -10,
        right: -10, 
        paddingRight: 20,
        paddingTop: 20,
        padding: 15,
        backgroundColor: "rgba(0,0,0,0.7)",
        borderRadius: 35,
    },
    cardIcon: {
        height: 20,
        width: 20,
    },
});
