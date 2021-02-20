import React, { Component } from "react";
import { StyleSheet, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';


export default function Home(props){
  const {navigation} = props;
  return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={styles.titulo}>Seja Bem-Vindo!</Text>
            
              <TouchableOpacity style={styles.btncadastro} tittle = "sinalizar" onPress={()=>navigation.navigate('Sinalizar')}>
                <Text style = {styles.btntexto}>Aqui na nossa loja, programadores tem desconto!</Text>
              </TouchableOpacity>

                <Text style={styles.titulo}>______________________________</Text>
           
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: "center",
      
    },
    
    titulo:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin:30
    },
    
    btncadastro: {
      backgroundColor: '#FFD700',
      marginTop: 15,
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
 
  
  });
