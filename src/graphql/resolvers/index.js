import {mergeResolvers} from "merge-graphql-schemas";
import User from "./user/";
import Game from "./game/"

const resolvers = [User,Object, Game];

export default mergeResolvers(resolvers);
