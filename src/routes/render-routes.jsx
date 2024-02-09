import flattenDeep from "lodash/flattenDeep";
import { Route, Routes as ReactRoutes } from "react-router-dom";

const generateFlattenRoutes = (routes) => {
  if (!routes) return [];
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  );
};

const renderRouteElement = (route) => {
  const { component: Component, path, name, children } = route;
  console.log("--==renderRouteElement ", name, path);
  return (
    <>
      <Route key={name} element={<Component />} path={path}>
        {children && children.map((item) => renderRouteElement(item))}
      </Route>
    </>
  );
};

export const renderRoutes = (mainRoutes) => {
  const Routes = () => {
    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlattenRoutes(routes);
      return (
        <Route key={index} element={<Layout />}>
          <Route>
            {subRoutes.map((item) => {
              return item.component && item.path && renderRouteElement(item);
            })}
          </Route>
        </Route>
      );
    });
    return <ReactRoutes>{layouts}</ReactRoutes>;
  };
  return Routes;
};
