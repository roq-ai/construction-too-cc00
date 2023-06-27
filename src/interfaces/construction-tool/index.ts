import { OutletInterface } from 'interfaces/outlet';
import { GetQueryInterface } from 'interfaces';

export interface ConstructionToolInterface {
  id?: string;
  name: string;
  price: number;
  duration: number;
  availability_status: boolean;
  outlet_id?: string;
  created_at?: any;
  updated_at?: any;

  outlet?: OutletInterface;
  _count?: {};
}

export interface ConstructionToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  outlet_id?: string;
}
