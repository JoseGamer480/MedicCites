import React, { useState } from "react";
import { View, Platform } from "react-native";
import { Card, Button } from "react-native-paper";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type FechaHoraSelectorProps = {
  //medicoId?: string;
  onSelect: (fecha: Date, hora: string) => void;
};

const availableTimes = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

const isDateDisabled = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Deshabilitar fechas pasadas y domingos
  return date < today || date.getDay() === 0;
};

const formatDate = (date: Date) =>
  date
    ? date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      })
    : "";

const FechaHoraSelector: React.FC<FechaHoraSelectorProps> = ({onSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [showCalendar, setShowCalendar] = useState(false);

  const handleShowCalendar = () => setShowCalendar(true);

  const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
    setShowCalendar(Platform.OS === "ios");
    if (date && !isDateDisabled(date)) {
      setSelectedDate(date);
      setSelectedTime(undefined);
    }
  };

  const handleTimeSelect = (time: string) => setSelectedTime(time);

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      onSelect(selectedDate, selectedTime);
    }
  };

  return (
    <View style={{ gap: 24 }}>
      {/* Selección de fecha */}
      <Card>
        <Card.Title
          title="Selecciona una fecha"
          titleStyle={{ fontSize: 18, flexDirection: "row", alignItems: "center" }}
          left={() => (
            <MaterialCommunityIcons name="calendar" size={22} color="#0284c7" style={{ marginLeft: 8 }} />
          )}
        />
        <Card.Content>
          <Button
            mode="outlined"
            icon="calendar"
            onPress={handleShowCalendar}
            style={{ marginBottom: 12, borderColor: "#0ea5e9" }}
            labelStyle={{ color: "#0ea5e9" }}
          >
            {selectedDate ? formatDate(selectedDate) : "Seleccionar fecha"}
          </Button>
          {showCalendar && (
            <DateTimePicker
              value={selectedDate ?? new Date()}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={handleDateChange}
              minimumDate={new Date()}
            />
          )}
        </Card.Content>
      </Card>

      {/* Selección de hora */}
      {selectedDate && (
        <Card>
          <Card.Title
            title={`Horarios disponibles para ${formatDate(selectedDate)}`}
            titleStyle={{ fontSize: 16 }}
          />
          <Card.Content>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {availableTimes.map((time) => (
                <Button
                  key={time}
                  mode={selectedTime === time ? "contained" : "outlined"}
                  onPress={() => handleTimeSelect(time)}
                  style={{
                    minWidth: 92,
                    margin: 4,
                    backgroundColor: selectedTime === time ? "#0ea5e9" : undefined,
                  }}
                  labelStyle={{
                    color: selectedTime === time ? "#fff" : "#0284c7",
                  }}
                >
                  {time}
                </Button>
              ))}
            </View>
          </Card.Content>
        </Card>
      )}

      {/* Botón de confirmación */}
      {selectedDate && selectedTime && (
        <Button
          mode="contained"
          onPress={handleConfirm}
          style={{
            marginTop: 8,
            backgroundColor: "#0ea5e9",
            height: 48,
            justifyContent: "center",
          }}
          labelStyle={{ fontSize: 16, color: "#fff" }}
        >
          Continuar con {selectedDate.toLocaleDateString("es-ES")} a las {selectedTime}
        </Button>
      )}
    </View>
  );
};

export default FechaHoraSelector;
