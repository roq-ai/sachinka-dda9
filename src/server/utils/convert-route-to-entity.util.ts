const mapping: Record<string, string> = {
  organizations: 'organization',
  photos: 'photo',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
