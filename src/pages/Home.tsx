import React from "react";
import { View, Text } from "react-native";
import { Button, Card } from "react-native-paper";
import type { StackScreenProps } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/AppNavigator";

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
      <Card style={{ width: "100%", maxWidth: 350, padding: 24 }}>
        <Card.Title
          title="Citas Médicas"
          titleStyle={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}
        />
        <Card.Content>
          <Text style={{ textAlign: "center", fontSize: 16, marginBottom: 20 }}>
            Bienvenido. ¿Qué deseas hacer?
          </Text>
        </Card.Content>
        <Card.Actions style={{ flexDirection: "column", gap: 16 }}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("SeleccionarSede")}
            style={{ marginBottom: 8 }}
          >
            Reservar nueva cita
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate("MisCitas")}
          >
            Mis citas
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Home;
