import type { TableColumn } from "@/components/dashboard/RecentDataTable";
import type {
  RecentRegistration,
  RecentScreening,
} from "../interface/recent-data.interface";
import { StatusBadge } from "../components/dashboard/StatusBadge";
import {
  registrationStatusColors,
  screeningStatusColors,
} from "./status-color.constants";

export const registrationColumns: TableColumn<RecentRegistration>[] = [
  { header: "NAME", accessor: "name" },
  { header: "AGE", accessor: "age" },
  { header: "GENDER", accessor: "gender" },
  {
    header: "STATUS",
    accessor: (row) => (
      <StatusBadge
        status={row.status}
        colors={registrationStatusColors}
      />
    ),
  },
  { header: "TIME", accessor: "time", className: "text-right" },
];

export const screeningColumns: TableColumn<RecentScreening>[] = [
  { header: "NAME", accessor: "name" },
  { header: "AGE", accessor: "age" },
  { header: "GENDER", accessor: "gender" },
  {
    header: "STATUS",
    accessor: (row) => (
      <StatusBadge
        status={row.status}
        colors={screeningStatusColors}
      />
    ),
  },
  { header: "TIME", accessor: "time", className: "text-right" },
];
