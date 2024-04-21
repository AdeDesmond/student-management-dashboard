import {
  Grid2x2Icon,
  GraduationCapIcon,
  Users2Icon,
  CalendarPlus2Icon,
  HandCoinsIcon,
  Calendar,
  MessageSquare,
  BellIcon,
  SchoolIcon,
} from "lucide-react";

export const paths = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: <Grid2x2Icon className="h-4 w-4" />,
  },
  {
    path: "/student",
    label: "Student",
    icon: <GraduationCapIcon className="h-4 w-4" />,
  },

  {
    path: "/teacher",
    label: "Teacher",
    icon: <Users2Icon className="h-4 w-4" />,
  },
  {
    path: "/class",
    label: "Class",
    icon: <SchoolIcon className="h-4 w-4" />,
  },
  {
    path: "/events",
    label: "Events",
    icon: <CalendarPlus2Icon className="h-4 w-4" />,
  },

  {
    path: "/finance",
    label: "Finance",
    icon: <HandCoinsIcon className="h-4 w-4" />,
  },
  {
    path: "/calender",
    label: "Calender",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    path: "/chat",
    label: "Chat",
    icon: <MessageSquare className="h-4 w-4" />,
  },

  {
    path: "/notification",
    label: "Notification",
    icon: <BellIcon className="h-4 w-4" />,
  },
];
