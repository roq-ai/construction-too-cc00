import { ConstructionToolInterface } from 'interfaces/construction-tool';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface OutletInterface {
  id?: string;
  location: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  construction_tool?: ConstructionToolInterface[];
  company?: CompanyInterface;
  _count?: {
    construction_tool?: number;
  };
}

export interface OutletGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  company_id?: string;
}
