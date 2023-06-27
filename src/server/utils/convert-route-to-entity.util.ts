const mapping: Record<string, string> = {
  companies: 'company',
  'construction-tools': 'construction_tool',
  outlets: 'outlet',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
