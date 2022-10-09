import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { vmKeys } from '../queryKeys'

const fetchVmDetail = (vmId)=> {
    return axios.get(`http://localhost:4000/vm/${vmId}`)
  }
const VmDetail = () => {
 
    const {vmId} = useParams()
    const {isLoading, isError, data, error}= useQuery([vmKeys.detail(), vmId],() => fetchVmDetail(vmId))

    if(isLoading) {
        return <h2>Loading...</h2>
      }
      if(isError) {
        return <h2>{error.message}</h2> 
      }
  return (
   <>
    <h2>VM Detail</h2>
    <div>{data.data.name} - {data.data.cpu} CPU - {data.data.ram} RAM</div>
    </>
  )
}

export default VmDetail