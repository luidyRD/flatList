import {View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import {Link,} from "expo-router";
export default function renderCategoria({item}:{item:any}){
      return(
        <View style={styles.categorias}>
        {item.titulo}
        <FlatList
          data={item.filmes}
          keyExtractor={filme=>filme.id}
          horizontal={true}
          contentContainerStyle={{paddingBottom:40}}
          renderItem={({item})=> item.href ?(
            <Link href={item.href} asChild>
              <TouchableOpacity activeOpacity={0.8}>
                <Image source={{ uri: item.imagem }} style={styles.filme} />
              </TouchableOpacity>
            </Link>
          ) : (
            <Image source={{ uri: item.imagem }} style={styles.filme} />
          )}
          > </FlatList>
         
        </View>
      )
    }

    const styles = StyleSheet.create({
        categorias:{
        color:"white",
        backgroundColor: '#000000'
       },
       filme:{
        width:100,
        height:140,
        borderRadius:8,
        margin: 5,        
        justifyContent:'flex-end',
        padding:8
       },
    });