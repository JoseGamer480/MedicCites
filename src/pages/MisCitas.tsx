import React from "react";
import {Text, ScrollView } from "react-native";
import { Card, Button } from "react-native-paper";
import type { StackScreenProps } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/AppNavigator";
import type { Sede, Especialidad, Medico, FechaHora } from "../types";

type Props = StackScreenProps<RootStackParamList, any>;

// --- Citas estáticas de ejemplo ---
const ejemploCitas = [
  {
    sede: { id: "1", nombre: "Clínica San Rafael", direccion: "Av. Principal 123, Centro" } as Sede,
    especialidad: { id: "1", nombre: "Oftalmología General", descripcion: "Consulta general de ojos y visión" } as Especialidad,
    medico: { id: "1", nombre: "Dr. Carlos Mendoza", especialidad: "Oftalmología General", foto: "", sedeId: "1" } as Medico,
    fechaHora: { fecha: new Date("2024-08-10"), hora: "10:30" } as FechaHora,
  },
  {
    sede: { id: "2", nombre: "Hospital del Valle", direccion: "Calle 45 #12-34, Zona Norte" } as Sede,
    especialidad: { id: "2", nombre: "Retina", descripcion: "Especialista en enfermedades de retina" } as Especialidad,
    medico: { id: "2", nombre: "Dra. Ana Rodríguez", especialidad: "Retina", foto: "", sedeId: "2" } as Medico,
    fechaHora: { fecha: new Date("2024-08-15"), hora: "15:00" } as FechaHora,
  },
];

const MisCitas: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>Mis Citas</Text>
      {ejemploCitas.map((cita, idx) => (
        <Card key={idx} style={{ marginBottom: 18, padding: 10 }}>
          <Card.Title title={`Cita con ${cita.medico.nombre}`} />
          <Card.Content>
            <Text style={{ fontWeight: "500" }}>Fecha:</Text>
            <Text>
              {cita.fechaHora.fecha.toLocaleDateString("es-ES", {
                weekday: "long", day: "2-digit", month: "long", year: "numeric"
              })} a las {cita.fechaHora.hora}
            </Text>
            <Text style={{ fontWeight: "500", marginTop: 6 }}>Sede:</Text>
            <Text>{cita.sede.nombre}</Text>
            <Text style={{ fontWeight: "500", marginTop: 6 }}>Especialidad:</Text>
            <Text>{cita.especialidad.nombre}</Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="outlined" onPress={() => navigation.navigate("Home")}>Ir a inicio</Button>
          </Card.Actions>
        </Card>
      ))}
      {ejemploCitas.length === 0 && (
        <Text style={{ textAlign: "center", color: "#6b7280" }}>No tienes citas registradas.</Text>
      )}
    </ScrollView>
  );
};

export default MisCitas;
