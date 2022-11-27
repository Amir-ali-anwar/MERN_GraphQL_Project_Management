import { projects, clients } from "../sampledata.js";
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";
import Project from "../models/Project.js";
import Client from "../models/Client.js";
const ProjectType = new GraphQLObjectType({
  name: "project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

const ClientType = new GraphQLObjectType({
  name: "client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RoolQueryType",
  fields: {
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parentValue, arg) {
        return clients;
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return clients.find((client) => client.id === args.id);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parentValue, arg) {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return Project.findById(args.id);
      },
    },
  },
});
const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addClient: {
      type: ClientType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });

        return client.save();
      },
    },
    deleteClient: {
      type: ClientType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent,args){
        Project.find({ clientId: args.id }).then((proejcts)=>{
          projects.forEach((project)=>{
            project.remove()
          })
        });
        return Client.findByIdAndRemove(args.id);
      }
    },
  },
});
const query = new GraphQLSchema({
  query: RootQuery,
  mutations,
});
export default query;
