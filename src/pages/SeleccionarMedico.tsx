import React from "react";
import { View } from "react-native";
import MedicoSelector from "../components/MedicoSelector";

type Props = {
  navigation: any;
  route: any;
};

const SeleccionarMedico: React.FC<Props> = ({ navigation, route }) => {
  const { sede, especialidad } = route.params;
  const handleSelect = (medico: any) => {
    navigation.navigate("SeleccionarFechaHora", { sede, especialidad, medico });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <MedicoSelector sedeId={sede.id} especialidadId={especialidad.id} onSelect={handleSelect} />
    </View>
  );
};

export default SeleccionarMedico;