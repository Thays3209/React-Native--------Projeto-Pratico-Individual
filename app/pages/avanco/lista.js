import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActionSheetIOS, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Lista extends Component {
  state = {
    data: [
      { id: 0, descricao: 'Geladeira', preco: '####', imageUrl: "http://s.glbimg.com/po/tt2/f/original/2013/12/09/smart.jpg"},
      { id: 1, descricao: 'Fogão', preco: '####', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tnubopZbH-FBI0BZlzuPMCQpSq-0AfbbWQ&usqp=CAU"},
      { id: 2, descricao: 'Micro', preco: '####', imageUrl: "https://www.fastshop.com.br/wcsstore/FastShopCAS/imagens/_LB_LinhaBranca/EXMS37R/EXMS37R_PRD_447_1.jpg"},

      { id: 3, descricao: 'Geladeira', preco: '####', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfGpXWoODKutf3WkLi0TlUEhoho-g7uHdrQ&usqp=CAU"},
      { id: 4, descricao: 'Micro', preco: '####', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXN-rS7FHs7rznCi2dYMFFZX0bPXQLAnLRw&usqp=CAU"},
      { id: 5, descricao: 'Fogão', preco: '####', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7g2kDaaUc1u4S-VurDDGtNRtURpv0a2jNwQ&usqp=CAU"},

      { id: 6, descricao: 'Geladeira', preco: '####', imageUrl: "https://www.oficinadanet.com.br/imagens/post/15801/td_geladeira.jpg"},
      { id: 7, descricao: 'Fogão', preco: '####', imageUrl: "https://loja.atlas.ind.br/media/catalog/product/cache/a8a793a19eb449294652abcd7e183bc3/f/a/fastcook_4q_bco_2.jpg"},
      { id: 8, descricao: 'Micro', preco: '####', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5gEy1l44AoE2fs7fHL9S6WAPMyuIv2P-3g&usqp=CAU"},

      { id: 9, descricao: 'Geladeira', preco: '####', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUE39erWYycQlc1g3MAIF6MsrxSacRp3fSDA&usqp=CAU"},
      { id: 10, descricao: 'Fogão', preco: '####', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gU8gptKAyf9TPtpEs_MbM3utGS0dGRpbUQ&usqp=CAU"},
      { id: 11, descricao: 'Micro', preco: '####', imageUrl: "https://consul.vteximg.com.br/arquivos/ids/189896-1000-1000/Consul_Micro_ondas_CM020BF_Imagem_3_4.jpg?v=636828074391770000"},


    ],
  };

  renderItem = ({ item }) => (
    
        <View style={styles.listItem}>
        <Image source={{uri: item.imageUrl}} style={{ width: 300, height: 350, borderRadius: 5, padding: 2,}}></Image>
        <Text>{item.descricao}</Text>
        <Text>preco: {item.preco}</Text>

        </View>
        
  );

  render() {
    return (
      <FlatList
        style={{ marginTop: 5}}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}


const styles = StyleSheet.create({
  list: {
    
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 120
    
  },

  listItem: {
    marginTop: 10,
    padding: 40,
    alignItems: 'center',
    width: 300,
    height: 400,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderColor: '#D3D3D3', 
    borderWidth: 1,

  },
});
