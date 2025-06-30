// src/lib/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Sede, Especialidad, Medico, FechaHora } from '../types';

export type CitaGuardada = {
  sede: Sede;
  especialidad: Especialidad;
  medico: Medico;
  fechaHora: FechaHora;
  creadaEn: string; // Fecha/hora de guardado
};

const STORAGE_KEY = 'MIS_CITAS';

export async function guardarCita(cita: CitaGuardada) {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    const prev = json ? JSON.parse(json) : [];
    prev.push(cita);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(prev));
    return true;
  } catch {
    return false;
  }
}

export async function obtenerCitasGuardadas(): Promise<CitaGuardada[]> {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  } catch {
    return [];
  }
}

export async function limpiarCitasGuardadas() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}
