import {mergeResolvers} from "merge-graphql-schemas";
import User from "./user/";
import Building from "./building/";
import Game from "./game/"


const resolvers = [User, Building, Game];

export default mergeResolvers(resolvers);

