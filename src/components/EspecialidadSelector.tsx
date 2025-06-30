import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import type { Especialidad} from "../types";


type EspecialidadSelectorProps = {
  onSelect: (especialidad: Especialidad) => void;
};

const especialidades: Especialidad[] = [
  { id: "1", nombre: "Oftalmología General", descripcion: "Consulta general de ojos y visión" },
  { id: "2", nombre: "Retina", descripcion: "Especialista en enfermedades de retina" },
  { id: "3", nombre: "Córnea", descripcion: "Tratamiento de enfermedades de córnea" },
  { id: "4", nombre: "Glaucoma", descripcion: "Diagnóstico y tratamiento de glaucoma" },
  { id: "5", nombre: "Cirugía Refractiva", descripcion: "Corrección de defectos visuales" },
];

const getEmojiForEspecialidad = (nombre: string) => {
  if (nombre.includes("General")) return "👁️";
  if (nombre.includes("Retina")) return "🔬";
  if (nombre.includes("Córnea")) return "💎";
  if (nombre.includes("Glaucoma")) return "⚕️";
  if (nombre.includes("Cirugía")) return "🔍";
  return "🏥";
};

const EspecialidadSelector: React.FC<EspecialidadSelectorProps> = ({ onSelect }) => {
  return (
    <View style={{ gap: 12 }}>
      {especialidades.map((especialidad) => (
        <TouchableOpacity key={especialidad.id} onPress={() => onSelect(especialidad)} activeOpacity={0.85}>
          <Card
            style={{
              marginVertical: 3,
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
                  <Text style={{ fontSize: 22 }}>{getEmojiForEspecialidad(especialidad.nombre)}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "500", color: "#1f2937", marginBottom: 2, fontSize: 16 }}>
                    {especialidad.nombre}
                  </Text>
                  <Text style={{ color: "#6b7280", fontSize: 14 }}>
                    {especialidad.descripcion}
                  </Text>
                </View>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default EspecialidadSelector;