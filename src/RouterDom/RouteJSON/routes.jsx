import Home from "../Home/index";
import About from "../About/index";
import Contact from "../Contact/index";
import DetailUser from "../DetailUser/index"
const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    Component: Home,
    layout: "/admin",
    props: {
      auth: true
    }
  },
  {
    path: "/contact",
    name: "contact",
    Component: Contact,
    layout: "/admin",
    props: {
      auth: true,
      
    }
  },
  {
    path: "/about",
    name: "About",
    Component: About,
    layout: "/admin",
    props: {
      auth: true
    }
  },
    {
        path: "/DetailUser/:id",
        name: "Detail",
        Component: DetailUser,
        layout: "/admin"
      }
];

export default dashboardRoutes;
