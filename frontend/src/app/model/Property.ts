import { IPropertyBase } from "./IPropertyBase";

export class Property implements IPropertyBase {
  Image!: string;
  Id!: number;
  SellRent!: number;
  Name!: string;
  PTypeId!: number;
  PType!: string;
  BHK!: number;
  FTypeId!: number;
  FType!: string;
  Price!: number;
  BuiltArea!: number;
  CarpetArea?: number;
  Address!: string;
  Address2?: string;
  CityId!: number;
  City!: string;
  FloorNo?: string;
  TotalFloors?: string;
  RTM!: number;
  AOP?: string;
  MainEntrance?: string;
  Security?: number;
  Gated?: boolean;
  Maintenance?: number;
  Possession?: string;
  Photo?: string;
  Description?: string;
  PostedOn?:string;
  PostedBy?:string
  // Photos?: Photo[];
}
