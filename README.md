###

yarn sever-json
yarn start

###

1. Query Key

- From V4, Query keys have to be an Array at the top level,
  and can be as simple as an Array with a single string,
  or as complex as an array of many strings and nested objects
- tjdodo blog: I don't believe that storing all your Query Keys globally in /src/utils/queryKeys.ts will make things better.
  I keep my Query Keys next to their respective queries, co-located in a feature directory.
  ->>> so the actual Query Functions as well as Query Keys will stay local.

2. React Query Devtools

- initialIsOpen={false} -> not open devtool be default
- By default, React Query Devtools are not imported and used when process.env.NODE_ENV === 'production'

3. Query Cache

- In traditional fetching, the "loading..." always appear
- By default, every query result will be cached 5 minutes
- However, React Query knows that the data might updated so the cache might not contains
  the latest data. So the background will refresh and trigger for the same query and if
  the fetch is successful, data will be updated in the UI
  Because the isLoading = false => React Query needs another flags to refetching ->
  isFetching
- Console.log isLoading, isFetching
- Config cache time:

4. Stale time

- Cache time helps us reduce number of network request for data doesnt change to often
- For example, VM list not change often, it is ok if user see stale data (old data) for a while,
  and we will use the cache result without refresh in the background
  ------>staleTime -> fresh() in devtool will remain in to staleTime
- By default, staleTime = 0

5. Dependent Queries

- Dependent (or serial) queries depend on previous ones to finish before they can execute.
  To achieve this, it's as easy as using the enabled option to tell a query when it is ready to run

6. Query from Cache

7. Paginated Query

- By setting keepPreviousData to true we get a few new things:
  The data from the last successful fetch available while new data is being requested, even though the query key has changed.
  When the new data arrives, the previous data is seamlessly swapped to show the new data.
  isPreviousData is made available to know what data the query is currently providing you

8. Mutation
   useQuery is declarative, useMutation is imperative
   useQuery mostly run automatically
   usMutation must to be invoke by Mutate or MutateAsync
   mutate doesn't return anything, while mutateAsync returns a Promise containing the result of the mutation
   To get screen up to date, after mutate, call queryClient.invalidateQueries([])
