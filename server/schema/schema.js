import { projects, clients } from "../sampledata.js";
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} from "graphql";

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
      resolve(parentValue,arg){
        return clients
      }
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue,args){
        return clients.find(client=>client.id===args.id)
      }
    },
  },
});

const query = new GraphQLSchema({
  query: RootQuery,
});
export default query