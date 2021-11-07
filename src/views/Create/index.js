import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Create({ route }) {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [ano, setAno] = useState("");
  const [codigo, setCodigo] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  async function loadStorage() {
    const arr = await AsyncStorage.getItem("list");
    if (arr != null) {
      setList(JSON.parse(arr));
    }

    //AsyncStorage.clear();
  }

  async function add() {
    const book = {
      nome: nome,
      autor: autor,
      categoria: categoria,
      ano: ano,
      codigo: codigo,
    };

    const arr = [...list, book];
    const json = JSON.stringify(arr);
    await AsyncStorage.setItem("list", json);
    alert("Adicionado com Sucesso!");
    setNome("");
    setAutor("");
    setCategoria("");
    setAno("");
    setCodigo("");
    toggleModal();
    loadStorage();
  }

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Meus Livros</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Icon name="exit-to-app" color="#FFF" size={30} />
        </TouchableOpacity>
      </View>
      <Icon name="book-plus" color="#FFF" size={30} onPress={toggleModal} />
      <ScrollView>
        {list.map((item, index) => {
          return [
            <Icon name="book-open-variant" color="#FFF" size={20} />,
            <Text key={index}>
              Livro: {item.nome} Categoria: {item.categoria}{" "}
            </Text>,
            <Text key={index}>Autor: {item.autor} </Text>,
            <Icon name="book-search" color="#FFF" size={15} />,
            <Icon name="book-remove" color="#FFF" size={15} />,
          ];
        })}
      </ScrollView>
      <Modal animationType="slide" isVisible={isModalVisible}>
        <View>
          <Text style={styles.text}>Novo Livro</Text>
          <TextInput
            placeholder="Nome"
            onChangeText={(text) => setNome(text)}
          />
          <TextInput
            placeholder="Autor"
            onChangeText={(text) => setAutor(text)}
          />
          <TextInput
            placeholder="Categoria"
            onChangeText={(text) => setCategoria(text)}
          />
          <TextInput
            placeholder="Ano de Lançamento"
            onChangeText={(text) => setAno(text)}
          />
          <TextInput
            placeholder="Código"
            onChangeText={(text) => setCodigo(text)}
          />
          <Button title="Cadastrar" onPress={() => add()} color="#6E5494" />
          <Button title="Cancelar" onPress={toggleModal} color="#F77737" />
        </View>
      </Modal>
    </View>
  );
}

export default Create;
