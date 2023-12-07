import {
  HomeIcon,
  FolderIcon,
  InboxStackIcon,
} from "@heroicons/react/24/outline";

export const NAVIGATIONS = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: HomeIcon,
    current: true,
  },
  {
    name: "Projects",
    href: "/admin/projects-list",
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Contacts",
    href: "/admin/contacts",
    icon: InboxStackIcon,
    current: false,
  },
];

export const PROJECT_STATUSES = [
  {
    name: "Not Live",
    value: "Not Live",
  },
  {
    name: "Live",
    value: "Live",
  },
  {
    name: "On Hold",
    value: "On Hold",
  },
  {
    name: "Remodeling",
    value: "Remodeling",
  },
  {
    name: "Under Construction",
    value: "Under Construction",
  },
];
