import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {Spinner,DeleteProjectButton} from '../components/'
import { useQuery } from '@apollo/client';
import {GET_PROJECT} from '../queries/projectQueries'
const Project = () => {
  const {id}= useParams()
  const {loading,data,error}= useQuery(GET_PROJECT,{variables:{id}})
  // console.log(data?.project?.id)
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  return (
   <>
   {
    !error && !loading && (
      <div className='mx-auto w-75 card p-5'>
        <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className='mt-3'>Project Status</h5>
          <p className='lead'>{data.project.status}</p>
          <DeleteProjectButton  projectId={data?.project?.id}  />
      </div>
    )
   }
   </>
  )
}

export default Project