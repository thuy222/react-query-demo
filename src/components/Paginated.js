import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { usersKeys } from "../queryKeys";

const fetchUsers = (pageNumber) => {
  return axios.get(`http://localhost:4000/users?_limit=5&_page=${pageNumber}`);
};

export const Paginated = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    [usersKeys.list(), pageNumber],
    () => fetchUsers(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }



  return (
    <>
      <div>
        {data?.data.map((user) => {
          return (
            <div key={user.id}>
              <h2>
                {user.id} - {user.first_name} - {user.ip_address}
              </h2>
            </div>
          );
        })}
      </div>

      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev Page
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 3}
        >
          Next Page
        </button>
      </div>
      {isFetching && <h1>Waiting for loading next page...</h1>}
    </>
  );
};
