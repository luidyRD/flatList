import {View, StyleSheet, FlatList, Image, TextInput,} from 'react-native';
import {useLocalSearchParams} from 'expo-router';
 
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
            titulo do filme
            </View>
            <View style={styles.filme}>
            capa do filme
            ;</View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#000",
    },
    filme:{
        width:400,
        height:400,
        backgroundColor: "#2e2e2e",
        color: "#fff",
        alignItems:"center",
        alignSelf:'center',
    },
    titulo:{
        color:'#fff',
        fontSize: 25,
        margin: 10
    },
});