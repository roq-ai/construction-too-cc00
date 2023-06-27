import axios from 'axios';
import queryString from 'query-string';
import { ConstructionToolInterface, ConstructionToolGetQueryInterface } from 'interfaces/construction-tool';
import { GetQueryInterface } from '../../interfaces';

export const getConstructionTools = async (query?: ConstructionToolGetQueryInterface) => {
  const response = await axios.get(`/api/construction-tools${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createConstructionTool = async (constructionTool: ConstructionToolInterface) => {
  const response = await axios.post('/api/construction-tools', constructionTool);
  return response.data;
};

export const updateConstructionToolById = async (id: string, constructionTool: ConstructionToolInterface) => {
  const response = await axios.put(`/api/construction-tools/${id}`, constructionTool);
  return response.data;
};

export const getConstructionToolById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/construction-tools/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteConstructionToolById = async (id: string) => {
  const response = await axios.delete(`/api/construction-tools/${id}`);
  return response.data;
};
