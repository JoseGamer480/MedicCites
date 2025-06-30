import React from "react";
import { View } from "react-native";
import SedeSelector from "../components/SedeSelector";

type Props = {
  navigation: any;
};

const SeleccionarSede: React.FC<Props> = ({ navigation }) => {
  const handleSelect = (sede: any) => {
    navigation.navigate("SeleccionarEspecialidad", { sede });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <SedeSelector onSelect={handleSelect} />
    </View>
  );
};

export default SeleccionarSede;