import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from "./styles";

function Home({ route }) {
  const navigation = useNavigation();
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Bem-vindo, {user}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Icon
            name="exit-to-app"
            color="#FFF"
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
