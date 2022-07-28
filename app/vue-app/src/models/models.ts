export interface ComplexModel {
  id: number;
  name: string;
  child: {
    id: number;
    name: string;
  };
}
