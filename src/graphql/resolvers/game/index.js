import Game from '../../../models/Game';

export default {
    Query: {
        game: (root, args) => {
            return new Promise((resolve, reject) => {
                Game.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                }) 
            })
        },
        games: () => {
            return new Promise((resolve, reject) => {
                Game.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        }
    },
    Mutation: {
        addGame: (root, {name, description, image}) => {
            const newGame = new Game({name, description, image});

            return new Promise((resolve, reject) => {
                newGame.save((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        editGame: (root, {_id, name, description, image}) => {
            return new Promise((resolve, reject) => {
                Game.findOneAndUpdate({_id}, {$set: {name, description, image}})
                .exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        deleteGame: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Game.findOneAndRemove({_id}).exec((err, res)=>{
                    err ? reject(err) : resolve(res);
                })
            });
        }
    }
}