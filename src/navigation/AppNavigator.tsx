import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import SeleccionarSede from "../pages/SeleccionarSede";
import SeleccionarEspecialidad from "../pages/SeleccionarEspecialidad";
import SeleccionarMedico from "../pages/SeleccionarMedico";
import SeleccionarFechaHora from "../pages/SeleccionarFechaHora";
import ResumenCitaPage from "../pages/ResumenCita";
import CitaCreada from "../pages/CitaCreada";
import MisCitas from "../pages/MisCitas";
import type { Sede, Especialidad, Medico, FechaHora } from "../types";

export type RootStackParamList = {
  Home: undefined;
  SeleccionarSede: undefined;
  SeleccionarEspecialidad: { sede: Sede };
  SeleccionarMedico: { sede: Sede; especialidad: Especialidad };
  SeleccionarFechaHora: { sede: Sede; especialidad: Especialidad; medico: Medico };
  ResumenCita: {
    sede: Sede;
    especialidad: Especialidad;
    medico: Medico;
    fechaHora: FechaHora;
  };
  CitaCreada: {
    cita: {
      sede: Sede;
      especialidad: Especialidad;
      medico: Medico;
      fechaHora: FechaHora;
    };
  };
  MisCitas: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SeleccionarSede" component={SeleccionarSede} />
        <Stack.Screen name="SeleccionarEspecialidad" component={SeleccionarEspecialidad} />
        <Stack.Screen name="SeleccionarMedico" component={SeleccionarMedico} />
        <Stack.Screen name="SeleccionarFechaHora" component={SeleccionarFechaHora} />
        <Stack.Screen name="ResumenCita" component={ResumenCitaPage} />
        <Stack.Screen name="CitaCreada" component={CitaCreada} />
        <Stack.Screen name="MisCitas" component={MisCitas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
