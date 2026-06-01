export interface MachineAcabado {
  id: number;
  name: string;
  ref: string;
  desc: string;
  img: string;
  usage?: string;
  specs?: { label: string; value: string }[];
}