import { getUser } from "./userApi";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
    return useQuery({
        queryKey: ["user"],
        queryFn: () => getUser(),
    })
}
