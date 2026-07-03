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
  usage?: string;
  specs?: { label: string; value: string }[];
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

/**
 * Tipo unificado para el componente ProductDetailLayout.
 * Todos los tipos de producto (MachineAcabado, Compactadoras,
 * HerramientasConcreto, Vibradores) tienen exactamente esta forma.
 */
export interface ProductDetail {
  id: number;
  category: string;
  name: string;
  ref: string;
  desc: string;
  img: string;
  usage?: string;
  specs?: { label: string; value: string }[];
}