import axios from 'axios';
import queryString from 'query-string';
import { OutletInterface, OutletGetQueryInterface } from 'interfaces/outlet';
import { GetQueryInterface } from '../../interfaces';

export const getOutlets = async (query?: OutletGetQueryInterface) => {
  const response = await axios.get(`/api/outlets${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createOutlet = async (outlet: OutletInterface) => {
  const response = await axios.post('/api/outlets', outlet);
  return response.data;
};

export const updateOutletById = async (id: string, outlet: OutletInterface) => {
  const response = await axios.put(`/api/outlets/${id}`, outlet);
  return response.data;
};

export const getOutletById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/outlets/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteOutletById = async (id: string) => {
  const response = await axios.delete(`/api/outlets/${id}`);
  return response.data;
};
