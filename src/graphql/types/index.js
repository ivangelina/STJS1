import {mergeTypes} from 'merge-graphql-schemas';
import User from './user/';
import Object from './object';
import Game from './game/';

const types = [User, Object, Game];

export default mergeTypes(types, {all: true});