import { Friends, Aliens } from './dbConnectors';

// resolver map
export const resolvers = {
    Query: {
        getOneFriend: (root, { id }) => {
            return new Promise( (resolve, object ) => {
                Friends.findById(id, (err, friend) => {
                    if (err) console.log(err)
                    else resolve(friend)
                })
            })
        },
        getFriends: (() => {
            return new Promise( (resolve, object) => {
                Friends.find({}, (err, friends) => {
                    if (err) console.log(err)
                    else resolve (friends)
                })
            })
            
        }),
        getAliens: () => {
            return Aliens.findAll();
        }
    },

    Mutation: {
        createFriend: (root, { input }) => {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                language: input.language,
                age: input.age,
                email: input.email,
                contacts: input.contacts
            });

            newFriend.id = newFriend._id;

            return new Promise((resolve, object) => {
                newFriend.save((err) => {
                    if (err) reject(err)
                    else resolve(newFriend)
                });
            })
        },
        updateFriend: (root, { input }) => {
            return new Promise(( resolve, object ) => {
                Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
                    if (err) {
                        console.log(err)
                    } else {
                        resolve(friend)
                    }
                })
            })
        },
        deleteFriend: (root, { id }) => {
            return new Promise(( resolve, object ) => {
                Friends.findByIdAndDelete({ _id: id }), (err) => {
                    if (err) console.log(err)
                     else resolve('Deleted')
                }
            })
        }
    },
};