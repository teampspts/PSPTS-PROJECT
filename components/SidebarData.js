import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Employee Details",
    path: "/Employees",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Employee Details",
        path: "/Employees/Addemployee",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Update Employee Details",
        path: "/Employees/Updateemployee",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "View Employee Details",
        path: "/Employees/Viewemployee",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Delete Employee Details",
        path: "/Employees/Deleteemployee",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Employee Reports",
    path: "/services",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Calculate Employee Salaries",
        path: "/services/calculateEmployeeSalaries",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Report2",
        path: "/services/services2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Report3",
        path: "/services/services3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: "Generate Letters",
    path: "/events",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Letter1",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Letter2",
        path: "/events/events2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
