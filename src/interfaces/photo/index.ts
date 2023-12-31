import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PhotoInterface {
  id?: string;
  name: string;
  path: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface PhotoGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  path?: string;
  organization_id?: string;
}
