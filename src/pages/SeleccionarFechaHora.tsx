// pages/SeleccionarFechaHora.tsx
import React from "react";
import { View } from "react-native";
import FechaHoraSelector from "../components/FechaHoraSelector";
import { StackScreenProps } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/AppNavigator";

type Props = StackScreenProps<RootStackParamList, 'SeleccionarFechaHora'>;

const SeleccionarFechaHora: React.FC<Props> = ({ navigation, route }) => {
  const { sede, especialidad, medico } = route.params;

  const handleSelect = (fecha: Date, hora: string) => {
    navigation.navigate("ResumenCita", {
      sede,
      especialidad,
      medico,
      fechaHora: { fecha, hora }, // ¡Aquí va el valor!
    });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FechaHoraSelector onSelect={handleSelect} />
    </View>
  );
};

export default SeleccionarFechaHora;
