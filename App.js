
import { ScrollView, ActivityIndicator, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from "react";
import { FizzBuzz, FizzBuzz2, getURL } from './utilities/functions';

//Componentes

const Separator = () => <View style={{ height: 15 }} />;

// Componente boton para sacar por consola cada uno de los Output de cada version. Recibe como parametros el nombre del boton y la funcion que tiene que llamar.
// En este componente tambien se genera el array numerico de numeros del 1 al 100. 
const ButtonNum= ({title,functions}) => {
  
  return (
    <Pressable style={styles.button}
    onPress={() =>{
      let numbers=[]
      for(let i=1; i<=100; i++){
        numbers.push(i);
      }
      
      functions(numbers)
    }
      
    }>
    <View>
    <Text style={styles.botontext}>{title}</Text>
    </View>
    
  </Pressable>
  );
}
// Componente imagen que actualiza su url en la source de la imagen segun si el usuario hace click a un boton. 
const _Image = ({ source }) => {
  return <Image style={styles.itemPhoto}
  resizeMode="contain" source={{uri: source}} />;
}
// Componente boton que permite actualizar la url de la imagen al hacer click. Llama a la funcion que hace la consulta a la api y actualiza el estado. 
const Button= ({title,functions, setimgURL}) => {
  
  return (
    <Pressable style={styles.button}
    onPress={() =>{
      
      functions().then(setimgURL);
    }
      
    }>
    <View>
    <Text style={styles.botontext}>{title}</Text>
    </View>
    
  </Pressable>
  );
}
//Componente titulo para cada titulo de ejercicio
const TitleEx= ({title}) => {
  
  return (
    <View>
    <Text style={styles.title}>{title}</Text>
    </View>
  );

}
// Funcion App principal que contiente el estado para actualizar la url de la imagen. Asi como un esatdo inicial para que cada vez que se carga la app tener una primera imagen en pantalla. 
export default function App() {
  const [imgURL, setimgURL] = useState(null);
  useEffect(() => {
    
    getURL().then(setimgURL);
  },[]);

  if (imgURL == null) {
    return (
      <View>
        <ActivityIndicator color="blue" size={50}/>
      </View>
    );
  }
  

  return (
    <ScrollView>
    <View style={styles.container}>
      <TitleEx title="React Cats"></TitleEx>
      <_Image source={imgURL} />
      <Button title="Get a new random Cat" functions={getURL} setimgURL={setimgURL}></Button>
      <Separator></Separator>
      <TitleEx title="FizzBuzz Fuction"></TitleEx>
      <View style={styles.button_row}>
      <ButtonNum title="Version 1" functions={FizzBuzz}></ButtonNum>
      <ButtonNum title="Version 2" functions={FizzBuzz2}></ButtonNum>
      </View>
    </View>
    </ScrollView>
  );
}
// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemPhoto: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderColor: "#0D83A1",
    borderWidth: 5,
  },
  button:{
    marginTop:20,
    marginHorizontal: 4,
    backgroundColor: "#0D83A1",
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 13,
  },
  button_row: {
    flexDirection: "row",
    marginTop: 5,
    textAlign: "center",
  },
  botontext: {
    fontSize: 22,
    color: "white",
  },
  title:{
    fontSize: 40,
    color: "#0D83A1",
    marginVertical:10,
    paddingVertical:15
  }

});
