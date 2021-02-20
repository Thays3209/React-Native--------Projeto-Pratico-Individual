import React, { Component } from "react";
import { StyleSheet, Image, SafeAreaView, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import Lista from './lista';

// import { Container } from './styles';

function Avanco({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
            <View >
                <Text style={styles.titulo}>Produtos:</Text>
            
                <Text style={styles.textoBottom}>____________________________________________</Text>
                <Text style={styles.titulo}>Confira nossos produtos:</Text>
                <Lista />
        </View>
        
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: "center",
      
    },
    
    
    titulo:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin:5
    },
    
    btncadastro: {
      backgroundColor: '#FFD700',
      marginTop: 10,
      padding: 10,
      borderRadius: 50,
      width: 300,
      justifyContent: 'center',
      alignItems: 'center',
      height: 70,
      marginHorizontal: 90
    },
    btntexto: {
      fontWeight: '500',
      fontSize: 18,
    },
    foto: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 50,
      marginTop: 15,
      width: 380
    },
    botao:{
      marginTop: 15,
      padding: 10,
      borderRadius: 50,
      width: 180,
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: 45,
      borderColor: '#FFD700', 
      borderWidth: 1,
      marginHorizontal: 150
    },
  
    textoBottom: {
      textAlign: "center",
      color: '#A9A9A9',
      margin:10
  
    }
  
  });


export default Avanco;
