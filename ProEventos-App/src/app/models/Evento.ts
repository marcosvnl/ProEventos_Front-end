import { Lote } from "./Lote";
import { Palestrante } from "./Palestrante";
import { RedesSociais } from "./RedesSociais";

export interface Evento {
  id : number;
  local : string;
  dataEvento? : Date;
  tema : string;
  qtdPessoas : number;
  imagemUrl : string;
  telefone : string;
  email : string;
  lote : Lote[];
  redesSociais : RedesSociais[];
  palestrantesEventos : Palestrante[];
}
