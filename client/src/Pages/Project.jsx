import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {Spinner} from '../components/'
import { useQuery } from '@apollo/client';
import {GET_PROJECTS} from '../queries/projectQueries'
const Project = () => {
  const {id}= useParams()
  const {loading,data,error}= useQuery(GET_PROJECTS,{variables:{id}})
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <div>Project</div>
  )
}

export default Project