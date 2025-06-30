
export type Sede = {
  id: string;
  nombre: string;
  direccion: string;
};

export type Especialidad = {
  id: string;
  nombre: string;
  descripcion: string;
};

export type Medico = {
  id: string;
  nombre: string;
  especialidad: string;
  foto: string;
  sedeId: string;
};

export type CitaData = {
  sede: Sede;
  especialidad: Especialidad;
  medico: Medico;
  fecha: Date;
  hora: string;
};

export type FechaHora = {
  fecha: Date;
  hora: string;
};