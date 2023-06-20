import { CartItem } from "./CartItem";

export class Order{
  id!:number;
  items!:CartItem[];
  name!:string;
  address!:string;
  paymentId!:string;
  createdAt!:string;
  status!:string;

}
