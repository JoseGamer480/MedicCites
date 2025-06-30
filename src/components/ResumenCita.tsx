import React, { useState } from "react";
import { View, Text } from "react-native";
import { Card, Button, Divider, Portal, Dialog, Paragraph } from "react-native-paper";
import type { CitaData } from "../types";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type ResumenCitaProps = {
  citaData: CitaData;
  onConfirm: () => void;
};

const costoConsulta = 150000; // $150,000 COP

const ResumenCita: React.FC<ResumenCitaProps> = ({ citaData, onConfirm }) => {
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleDialogShow = () => setDialogVisible(true);
  const handleDialogDismiss = () => setDialogVisible(false);

  const handleDialogConfirm = () => {
    setDialogVisible(false);
    onConfirm();
  };

  return (
    <View style={{ gap: 24 }}>
      <Card>
        <Card.Title
          title="Resumen de tu cita"
          titleStyle={{
            fontSize: 18,
            textAlign: "center",
            color: "#1f2937",
          }}
        />
        <Card.Content style={{ gap: 16 }}>
          {/* Sede */}
          <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}>
            <View style={{ backgroundColor: "#e0f2fe", padding: 8, borderRadius: 12 }}>
              <MaterialCommunityIcons name="map-marker" size={22} color="#0284c7" />
            </View>
            <View>
              <Text style={{ fontSize: 13, color: "#6b7280" }}>Sede</Text>
              <Text style={{ fontWeight: "500", color: "#1f2937" }}>{citaData.sede?.nombre}</Text>
              <Text style={{ fontSize: 13, color: "#6b7280" }}>{citaData.sede?.direccion}</Text>
            </View>
          </View>

          <Divider />

          {/* Especialidad */}
          <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}>
            <View style={{ backgroundColor: "#e0f2fe", padding: 8, borderRadius: 12 }}>
              <Text style={{ fontSize: 20 }}>🏥</Text>
            </View>
            <View>
              <Text style={{ fontSize: 13, color: "#6b7280" }}>Especialidad</Text>
              <Text style={{ fontWeight: "500", color: "#1f2937" }}>
                {citaData.especialidad?.nombre}
              </Text>
              <Text style={{ fontSize: 13, color: "#6b7280" }}>
                {citaData.especialidad?.descripcion}
              </Text>
            </View>
          </View>

          <Divider />

          {/* Médico */}
          <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}>
            <View style={{ backgroundColor: "#e0f2fe", padding: 8, borderRadius: 12 }}>
              <MaterialIcons name="person" size={22} color="#0284c7" />
            </View>
            <View>
              <Text style={{ fontSize: 13, color: "#6b7280" }}>Médico</Text>
              <Text style={{ fontWeight: "500", color: "#1f2937" }}>{citaData.medico?.nombre}</Text>
              <Text style={{ fontSize: 13, color: "#6b7280" }}>{citaData.medico?.especialidad}</Text>
            </View>
          </View>

          <Divider />

          {/* Fecha y Hora */}
          <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}>
            <View style={{ backgroundColor: "#e0f2fe", padding: 8, borderRadius: 12 }}>
              <MaterialCommunityIcons name="calendar" size={22} color="#0284c7" />
            </View>
            <View>
              <Text style={{ fontSize: 13, color: "#6b7280" }}>Fecha y hora</Text>
              <Text style={{ fontWeight: "500", color: "#1f2937" }}>
                {citaData.fecha &&
                  new Date(citaData.fecha).toLocaleDateString("es-ES", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
                <MaterialIcons name="access-time" size={16} color="#6b7280" />
                <Text style={{ fontSize: 13, color: "#6b7280", marginLeft: 5 }}>{citaData.hora}</Text>
              </View>
            </View>
          </View>

          <Divider />

          {/* Costo */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#f9fafb",
              padding: 12,
              borderRadius: 10,
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <View style={{ backgroundColor: "#bbf7d0", padding: 8, borderRadius: 12 }}>
                <FontAwesome name="credit-card" size={18} color="#22c55e" />
              </View>
              <View>
                <Text style={{ fontSize: 13, color: "#6b7280" }}>Total a pagar</Text>
                <Text style={{ fontWeight: "700", fontSize: 18, color: "#1f2937" }}>
                  ${costoConsulta.toLocaleString("es-CO")} COP
                </Text>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>

      {/* Botón de confirmación */}
      <View style={{ gap: 12 }}>
        <Button
          mode="contained"
          onPress={handleDialogShow}
          style={{
            backgroundColor: "#0ea5e9",
            height: 48,
            justifyContent: "center",
          }}
          labelStyle={{ fontSize: 16, color: "#fff", fontWeight: "500" }}
          icon={({ size, color }) => (
            <MaterialIcons name="check" size={size ?? 22} color={color ?? "#fff"} style={{ marginRight: 4 }} />
          )}
        >
          Confirmar Cita
        </Button>
        <Text style={{ fontSize: 11, color: "#6b7280", textAlign: "center", paddingHorizontal: 16 }}>
          Al confirmar, aceptas nuestros términos y condiciones.
          Recibirás un SMS con los detalles de tu cita.
        </Text>
      </View>

      {/* Diálogo de confirmación */}
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={handleDialogDismiss}>
          <Dialog.Title>¿Confirmar cita?</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              ¿Deseas confirmar tu cita con los datos mostrados?
              Recibirás una notificación al finalizar.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleDialogDismiss}>Cancelar</Button>
            <Button onPress={handleDialogConfirm}>Confirmar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default ResumenCita;
