const staticRouteIdToUrl = {
  index: '/',
};

export function staticPageUrlBuilder(routeId: string): string {
  return staticRouteIdToUrl[routeId] || '/';
}
