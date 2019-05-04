import {mergeTypes} from 'merge-graphql-schemas';
import User from './user/';
import Building from './building/';
import Game from './game/';

const types = [User, Building, Game];

export default mergeTypes(types, {all: true});
