import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { vmKeys, workspaceKeys } from '../queryKeys'

const fetchVm = ()=> {
    return axios.get("http://localhost:4000/vm")
  } 
const fetchWorkspace = ()=> {
    return axios.get("http://localhost:4000/workspace")
  } 

const DependentQuery = () => {
    const workspaceQuery = useQuery([workspaceKeys.all], fetchWorkspace)
    const workspaceName = workspaceQuery?.data?.data?.name

    const vmQuery = useQuery([vmKeys.all], fetchVm, {
        enabled: !!workspaceName
    })

    console.log("🚀 ~ file: DependentQuery.js ~ line 20 ~ DependentQuery ~ vmQuery", vmQuery)
  return (
    <>
    <div>DependentQuery</div>
    </>
  )
}

export default DependentQuery