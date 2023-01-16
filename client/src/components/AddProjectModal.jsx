import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { useQuery, useMutation } from "@apollo/client";
import Spinner from "./Spinner";
import { GET_CLIENTS } from "../queries/clientQueries";

const AddProjectModal = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("new");
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || description === "" || status === "") {
      return alert("Please fill in all fields");
    }
  };
  if (loading) return <Spinner />;
  if (error) return <p>Something, went wrong</p>;

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal-1"
      >
        <div className="d-flex align-items-center">
          <FaList className="icon" />
          <div>New Project</div>
        </div>
      </button>
      <div
        className="modal fade"
        id="exampleModal-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title " id="exampleModalLabel">
                New Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="" onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="phone"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    id="status"
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="new">Not Started</option>
                    <option value="progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Client</label>
                  <select
                    id="client"
                    className="form-select"
                  >
                    <option value="">Select Client</option>
                    {data?.clients?.length ? (
                      data?.clients?.map((client) => (
                        <option value="progress" key={client.id}>
                          {client.name}
                        </option>
                      ))
                    ) : (
                      <option>No Clients are available</option>
                    )}
                    {}
                  </select>
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  {" "}
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProjectModal;
