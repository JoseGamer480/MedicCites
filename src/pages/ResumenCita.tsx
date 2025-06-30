import React from "react";
import { View } from "react-native";
import ResumenCitaComponent from "../components/ResumenCita";
import { StackScreenProps } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/AppNavigator";

type Props = StackScreenProps<RootStackParamList, 'ResumenCita'>;

const ResumenCitaPage: React.FC<Props> = ({ navigation, route }) => {
  const { sede, especialidad, medico, fechaHora } = route.params;

  const handleConfirm = () => {
    navigation.replace("CitaCreada", {
      cita: { sede, especialidad, medico, fechaHora },
    });
  };

  const citaData = {
    sede,
    especialidad,
    medico,
    fecha: fechaHora.fecha,
    hora: fechaHora.hora,
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ResumenCitaComponent citaData={citaData} onConfirm={handleConfirm} />
    </View>
  );
};

export default ResumenCitaPage;
