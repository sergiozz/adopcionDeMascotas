import { TipoEstudio } from './tipoEstudio';

export class Estudio {
  Id :string;
  mascotaId :string;
  tipoEstudioId :string;
  fecha_realizacion :string;
  veterinarioId :string;
  fecha_vencimiento :string;
  observaciones :string;
  tipoEstudio :TipoEstudio;
}
