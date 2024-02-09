// Layouts
import AdminLayout from "../layouts/admin-layout";
import MainLayout from "../layouts/main-layout";
import AdminAuthPage from "../pages/admin-auth-page";
import AdminPage from "../pages/admin-page";
import BlogPage from "../pages/blog-page";
import ChannelPage from "../pages/channel-page";
import HomePage from "../pages/home-page";
import JobsPage from "../pages/jobs-page";
import { renderRoutes } from "./render-routes";

// Don't mess with this code
export const routeOptions = [
  {
    layout: AdminLayout,
    routes: [
      {
        name: "admin",
        title: "Admin",
        component: AdminPage,
        path: "/admin",
        children: [
          {
            name: "auth",
            title: "Auth",
            component: AdminAuthPage,
            path: "/admin/auth",
            children: [
              {
                name: "auth",
                title: "Auth",
                component: HomePage,
                path: "/admin/auth/signIn",
              },
            ]
          },
        ]
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: "home",
        title: "Home",
        component: HomePage,
        path: "/",
      },
      {
        name: "blog",
        title: "Blog",
        component: BlogPage,
        path: "/blog",
      },
      {
        name: "channel",
        title: "Channel",
        component: ChannelPage,
        path: "/channel",
      },
      {
        name: "jobs",
        title: "Jobs",
        component: JobsPage,
        path: "/jobs",
      },
    ],
  },
];

// Just add this line
export const Routes = renderRoutes(routeOptions);
