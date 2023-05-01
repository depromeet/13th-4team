import { cache, PropsWithChildren } from "react";
import {
  QueryClient,
  QueryKey,
  dehydrate,
  QueryFunction,
  Hydrate as HydrateOnClient,
} from "@tanstack/react-query";

type Props = {
  queryKey: QueryKey;
  queryFn: QueryFunction;
};

const getQueryClient = cache(() => new QueryClient());

const PrefetchHydration = async ({
  queryKey,
  queryFn,
  children,
}: PropsWithChildren<Props>) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(queryKey, queryFn);
  const dehydratedState = dehydrate(queryClient);

  return <HydrateOnClient state={dehydratedState}>{children}</HydrateOnClient>;
};

export default PrefetchHydration;
