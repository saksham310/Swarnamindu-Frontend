import { useQuery } from "@tanstack/react-query"
import { getRecentActivity } from "@/services/recent-activity.service"

export const useGetRecentActivity = () => {
  return useQuery({
    queryKey: ["recent-activity"],
    queryFn: getRecentActivity,
  })
}