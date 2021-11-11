import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    contcontainer: { width: "100%" },
    Text: {
        textAlign: "center",
        fontWeight: "bold",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 40,
        paddingVertical: 100
    },
    ptn: {
        width: 300,
        paddingVertical: 10,
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "black",
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    ptntext: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 25
    },
    img: {
        width: 50,
        height: 30,
        marginHorizontal: 10
    }
})