export interface MachineAcabado {
  id: number;
  category: string;
  name: string;
  ref: string;
  desc: string;
  img: string;
  usage?: string;
  specs?: { label: string; value: string }[];
}

export interface MachineAcabadoRelevant{
  id: number;
  name: string;
  category: string;
  img: string;
}

export interface HerramientasConcreto {
  id: number;
  category: string;
  name: string;
  ref: string;
  desc: string;
  img: string;
}

export interface HerramientasRelevantes {
  id: number;
  name: string;
  category: string;
  img: string;
}

export interface Compactadoras {
  id: number;
  category: string;
  name: string;
  ref: string;
  desc: string;
  img: string;
  usage?: string;
  specs?: { label: string; value: string }[];
}

export interface CompactadorasRelevant {
  id: number;
  name: string;
  category: string;
  img: string;
}

export interface Vibradores {
  id: number;
  category: string;
  name: string;
  ref: string;
  desc: string;
  img: string;
  usage?: string;
  specs?: { label: string; value: string }[];
}

export interface VibradoresRelevant {
  id: number;
  name: string;
  category: string;
  img: string;
}