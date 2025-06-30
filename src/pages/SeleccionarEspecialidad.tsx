import React from "react";
import { View } from "react-native";
import EspecialidadSelector from "../components/EspecialidadSelector";

type Props = {
  navigation: any;
  route: any;
};

const SeleccionarEspecialidad: React.FC<Props> = ({ navigation, route }) => {
  const { sede } = route.params;
  const handleSelect = (especialidad: any) => {
    navigation.navigate("SeleccionarMedico", { sede, especialidad });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <EspecialidadSelector onSelect={handleSelect} />
    </View>
  );
};

export default SeleccionarEspecialidad;