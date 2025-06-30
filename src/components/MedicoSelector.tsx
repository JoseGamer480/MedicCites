import React from "react";
import { View, Text, Image } from "react-native";
import { Card, Button } from "react-native-paper";
//import { TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import type { Medico } from "../types"; // Solo este import

type MedicoSelectorProps = {
  sedeId?: string;
  especialidadId?: string;
  onSelect: (medico: Medico) => void;
};

const medicos: Medico[] = [
  {
    id: "1",
    nombre: "Dr. Carlos Mendoza",
    especialidad: "Oftalmología General",
    foto: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    sedeId: "1",
  },
  {
    id: "2",
    nombre: "Dra. Ana Rodríguez",
    especialidad: "Retina",
    foto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    sedeId: "1",
  },
  {
    id: "3",
    nombre: "Dr. Luis García",
    especialidad: "Córnea",
    foto: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
    sedeId: "2",
  },
  {
    id: "4",
    nombre: "Dra. María López",
    especialidad: "Glaucoma",
    foto: "https://images.unsplash.com/photo-1594824019135-28195f5b9da1?w=150&h=150&fit=crop&crop=face",
    sedeId: "2",
  },
   {
    id: "5",
    nombre: "Dr. Luis García",
    especialidad: "Córnea",
    foto: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
    sedeId: "3",
  },
  {
    id: "6",
    nombre: "Dra. María López",
    especialidad: "Glaucoma",
    foto: "https://images.unsplash.com/photo-1594824019135-28195f5b9da1?w=150&h=150&fit=crop&crop=face",
    sedeId: "3",
  },
  
];

const MedicoSelector: React.FC<MedicoSelectorProps> = ({
  sedeId,
  onSelect,
}) => {
  // Filtro por sedeId (ajusta si quieres filtrar por especialidad también)
  const filteredMedicos = medicos.filter((medico) => {
    if (sedeId && medico.sedeId !== sedeId) return false;
    return true;
  });

  return (
    <View style={{ gap: 16 }}>
      {filteredMedicos.map((medico) => (
        <Card
          key={medico.id}
          style={{
            marginVertical: 6,
            borderWidth: 1,
            borderColor: "#e5e7eb",
            elevation: 2,
          }}
        >
          <Card.Content style={{ padding: 16 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 64,
                  height: 64,
                  backgroundColor: "#e5e7eb",
                  borderRadius: 32,
                  overflow: "hidden",
                  marginRight: 16,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: medico.foto }}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                  }}
                  resizeMode="cover"
                  // defaultSource solo para assets locales. Si no existe, comenta o quita esta línea:
                  // defaultSource={require("../../assets/avatar-default.png")}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: 3,
                    fontSize: 17,
                  }}
                >
                  {medico.nombre}
                </Text>
                <Text
                  style={{
                    color: "#6b7280",
                    fontSize: 14,
                    marginBottom: 8,
                  }}
                >
                  {medico.especialidad}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <MaterialIcons
                      name="star"
                      key={i}
                      size={18}
                      color="#facc15"
                      style={{ marginRight: 2 }}
                    />
                  ))}
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#6b7280",
                      marginLeft: 5,
                    }}
                  >
                    4.9
                  </Text>
                </View>
              </View>
            </View>
            <Button
              mode="contained"
              style={{
                marginTop: 14,
                backgroundColor: "#0ea5e9",
              }}
              labelStyle={{ color: "white" }}
              onPress={() => onSelect(medico)}
              contentStyle={{ paddingVertical: 4 }}
            >
              Seleccionar
            </Button>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

export default MedicoSelector;
