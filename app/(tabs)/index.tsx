import {View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import DadosDosFilmes from '../components/DadosDosFilmes';
import renderCategoria from '../components/CardCategorias';


const categorias = DadosDosFilmes().categorias;


export default function App() {
    return (
        <View style={styles.corFundo}>
            <FlatList
                        data={categorias}
                        keyExtractor={item => item.id}
                        renderItem={renderCategoria}
                    />
        </View>
    );
}
 
 


const styles = StyleSheet.create({
        categorias:{
        color:"white",
        backgroundColor: '#000000'
       },
       corFundo:{
        flex:1,
        backgroundColor:"black"
       },
       filme:{
        width:100,
        height:140,
        borderRadius:8,
        margin: 5,        
        justifyContent:'flex-end',
        padding:8
       },
       filmeTitulo:{
        color:'white',
        fontSize:12
       }
});
