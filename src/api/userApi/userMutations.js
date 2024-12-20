import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfile } from "./userApi";

export function useEditProfile() {
    const queryClient = useQueryClient();
    return useMutation(
        {
            mutationFn: (updatedProfile) => updateUserProfile(updatedProfile),
            onSuccess: (data) => {
                queryClient.invalidateQueries(["user"]);
                //merging previous with the new fields that were updated
                queryClient.setQueryData(["user"], (previousData) => ({
                    ...previousData,
                    ...data
                }));
            }
        }
    )
}

