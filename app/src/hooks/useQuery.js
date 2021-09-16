import { useLocation } from "react-router-dom";

export const useQuery = (queryParam) => {  
  const query = new URLSearchParams(useLocation().search)
  return query.get(queryParam);
};
