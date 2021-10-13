import { Evento } from "./Evento";
import { RedesSociais } from "./RedesSociais";

export interface Palestrante {
  id : number;
  nome : string;
  miniCurriculo : string;
  imagemURL : string;
  email : string;
  redesSociais : RedesSociais[];
  palestranteEvento : Evento[];
}
