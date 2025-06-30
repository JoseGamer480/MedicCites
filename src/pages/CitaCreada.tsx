import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { Button, Card } from "react-native-paper";
import type { StackScreenProps } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/AppNavigator";
import { guardarCita } from "../helpers/storage"; // <-- Nuevo import

type Props = StackScreenProps<RootStackParamList, 'CitaCreada'>;

const CitaCreada: React.FC<Props> = ({ navigation, route }) => {
  const { cita } = route.params;
  const [saving, setSaving] = useState(false);

  const handleGuardarCita = async () => {
    setSaving(true);
    const ok = await guardarCita({ ...cita, creadaEn: new Date().toISOString() });
    setSaving(false);
    if (ok) {
      Alert.alert("Cita guardada", "Tu cita ha sido guardada en Mis Citas.");
    } else {
      Alert.alert("Error", "No se pudo guardar la cita. Intenta de nuevo.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
      <Card style={{ padding: 24, width: "100%", maxWidth: 350 }}>
        <Card.Title title="¡Cita confirmada!" titleStyle={{ color: "#22c55e", fontSize: 22, textAlign: "center" }} />
        <Card.Content>
          {/* ...detalles de cita igual que antes... */}
          <Text style={{ fontWeight: "500", marginBottom: 4 }}>Fecha:</Text>
          <Text style={{ marginBottom: 8 }}>
            {cita.fechaHora.fecha.toLocaleDateString("es-ES", {
              weekday: "long", day: "2-digit", month: "long", year: "numeric"
            })} a las {cita.fechaHora.hora}
          </Text>
          <Text style={{ fontWeight: "500", marginBottom: 4 }}>Sede:</Text>
          <Text style={{ marginBottom: 8 }}>{cita.sede.nombre}</Text>
          <Text style={{ fontWeight: "500", marginBottom: 4 }}>Especialidad:</Text>
          <Text style={{ marginBottom: 8 }}>{cita.especialidad.nombre}</Text>
          <Text style={{ fontWeight: "500", marginBottom: 4 }}>Médico:</Text>
          <Text style={{ marginBottom: 16 }}>{cita.medico.nombre}</Text>
        </Card.Content>
        <Card.Actions style={{ flexDirection: "column", gap: 8, marginTop: 8 }}>
          <Button mode="contained" onPress={() => navigation.navigate("Home")}>
            Ir a inicio
          </Button>
          <Button
            mode="outlined"
            onPress={handleGuardarCita}
            loading={saving}
            disabled={saving}
          >
            Guardar cita
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CitaCreada;
