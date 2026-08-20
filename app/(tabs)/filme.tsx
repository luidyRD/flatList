import {View, StyleSheet, FlatList, Image, TextInput} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
            titulo do filme
            </View>
            <View style={styles.filme}>
            capa do filme
            </View>
            <View style={styles.descricao}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, soluta. Rem tenetur ipsam totam quaerat quam? Eos, impedit aut quas mollitia tenetur deserunt sed quidem dignissimos, tempora praesentium reiciendis eaque.
            </View>
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
    descricao:{
        width:400,
        height:100,
        color:'#fff',
        alignItems:'center',
        alignSelf:'center',
        margin: 10
    },
    titulo:{
        color:'#fff',
        fontSize: 25,
        margin: 10
    },
});