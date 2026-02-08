import type {
  RecentRegistration,
  RecentScreening,
} from "../interface/recent-data.interface"

const mockRecentRegistrations: RecentRegistration[] = [
  { id: "reg1", name: "Ramesh Kumar", age: 42, gender: "M", status: "Active", time: "2 hours ago" },
  { id: "reg2", name: "Priya Singh", age: 38, gender: "F", status: "Active", time: "4 hours ago" },
  { id: "reg3", name: "Arun Patel", age: 35, gender: "M", status: "Pending", time: "1 day ago" },
  { id: "reg4", name: "Kavya Sharma", age: 40, gender: "F", status: "Active", time: "1 day ago" },
]

const mockRecentScreenings: RecentScreening[] = [
  { id: "scr1", name: "Neha Gupta", age: 45, gender: "F", status: "Completed", time: "3 hours ago" },
  { id: "scr2", name: "Suresh Reddy", age: 50, gender: "M", status: "Completed", time: "5 hours ago" },
  { id: "scr3", name: "Meera Das", age: 36, gender: "F", status: "Pending", time: "1 day ago" },
]

export type RecentActivityResponse = {
  registrations: RecentRegistration[]
  screenings: RecentScreening[]
}

export const getRecentActivity = async (): Promise<RecentActivityResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 400))

  return {
    registrations: mockRecentRegistrations,
    screenings: mockRecentScreenings,
  }
}
