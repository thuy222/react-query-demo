import {useQuery} from "@tanstack/react-query"
import { Link } from "react-router-dom"
import axios from "axios"
import { vmKeys } from "../queryKeys"

const fetchVm = ()=> {
  return axios.get("http://localhost:4000/vm")
}

const VmRQ = () => {
  const {isLoading, data, error,isError, isFetching, refetch} = useQuery([vmKeys.all], fetchVm, {
    // cacheTime: 5000,
    // staleTime: 30000,
    // enabled:false,
  })
  console.log({isLoading},{isFetching})

  if(isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
  if(isError) {
    return <h2>{error.message}</h2> 
  }

  return (
    <>
    <h2>VmRQ</h2>
    <button onClick={refetch}>Fetch on click</button>
    {data?.data.map(vm => {
      return <div key={vm.id}>
        <Link to={`/vm/${vm.id}`}>{vm.name}</Link>
      </div>
    })}
    </>
  )
}

export default VmRQ