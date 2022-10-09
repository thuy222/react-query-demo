import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import { vmKeys } from '../queryKeys'

const QueryFromCache = () => {
const queryClient = useQueryClient()

const cachedVmData = queryClient.getQueryData([vmKeys.all])

  return (
    <>
    <div>QueryFromCache</div>
    {cachedVmData?.data.map(vm => {
      return <div key={vm.id}>
        <Link to={`/vm/${vm.id}`}>{vm.name}</Link>
      </div>
    })}
    </>
  )
}

export default QueryFromCache