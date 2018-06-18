import { Raza } from './raza';
import { Tamaño } from './tamanio';
import { Estudio } from './estudio';

export class Mascota {
  Id :string;
  razaId :string;
  nombre :string;
  sexo :string;
  fecha_nacimiento :string;
  color :string;
  tamañoId :string;
  caracter :string;
  observaciones :string;
  avatar :string;
  raza : Raza;
  tamaño : Tamaño;
  estudio: Estudio[];
}
