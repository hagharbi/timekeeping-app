import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Clients from "views/Clients.jsx";
import Projects from "views/Projects.jsx";
import UserProfile from "views/UserProfile.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "DASHBOARD",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/client",
    name: "CLIENTS",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Clients,
    layout: "/admin"
  },
  {
    path: "/project",
    name: "PROJECTS",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Projects,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "BILLED",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "MY ACCOUNT",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl"
  // }
];
export default routes;
