import { useQuery } from "@tanstack/react-query"
import { getScreeningInfo } from "@/services/screening.service"

export const useGetScreening = ({id}: {id: string|undefined}) => {

    return useQuery({
    queryKey: ["screening", id],
    queryFn: () => getScreeningInfo(id!),
    enabled: !!id,
  })
}