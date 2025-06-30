import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import type { Sede } from "../types";

type SedeSelectorProps = {
  onSelect: (sede: Sede) => void;
};

const sedes: Sede[] = [
  { id: "1", nombre: "Clínica San Rafael", direccion: "Av. Principal 123, Centro" },
  { id: "2", nombre: "Hospital del Valle", direccion: "Calle 45 #12-34, Zona Norte" },
  { id: "3", nombre: "Centro Médico Especializado", direccion: "Carrera 7 #89-01, Chapinero" },
];

const SedeSelector: React.FC<SedeSelectorProps> = ({ onSelect }) => {
  return (
    <View style={{ gap: 12 }}>
      {sedes.map((sede) => (
        <TouchableOpacity key={sede.id} onPress={() => onSelect(sede)} activeOpacity={0.85}>
          <Card
            style={{
              marginVertical: 4,
              borderWidth: 1,
              borderColor: "#e5e7eb",
              elevation: 2,
            }}
          >
            <Card.Content style={{ padding: 16 }}>
              <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                <View
                  style={{
                    backgroundColor: "#e0f2fe",
                    padding: 8,
                    borderRadius: 12,
                    marginRight: 12,
                  }}
                >
                  <MaterialCommunityIcons name="map-marker" size={22} color="#0284c7" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "500", color: "#1f2937", marginBottom: 2, fontSize: 16 }}>
                    {sede.nombre}
                  </Text>
                  <Text style={{ color: "#6b7280", fontSize: 14 }}>{sede.direccion}</Text>
                </View>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SedeSelector;