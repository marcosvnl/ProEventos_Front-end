import { Evento } from "./Evento";
import { Palestrante } from "./Palestrante";

export interface RedesSociais {
  id : number;
  nome : string;
  URL : string;
  evento : Evento;
  palestrante : Palestrante;
}
