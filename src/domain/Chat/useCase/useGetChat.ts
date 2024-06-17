import Realm from "realm";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../infra";
import { chatService } from "../chatServices";
import { useRealm } from "@services";

export const useGetChat = () => {
  const realm = useRealm();
  const { data, isError, isLoading } = useQuery({
    queryKey: [QueryKeys.getChat],
    queryFn: () => chatService.getChat(realm),
    staleTime: 1000 * 30, // 30 seconds
  });

  return {
    chats: data,
    isError,
    isLoading,
  };
};
