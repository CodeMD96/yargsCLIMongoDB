const yargs = require("yargs");
const connection = require("./db/connection");
const { addMovie, removeOneMovie, updateOneMovie, listMovies } = require("./movie")

const app = async (args) => {
    try {
        if (args.add) {
            const movieObj = {title: args.title, actor: args.actor};
            await connection(addMovie, movieObj);
        } else if (args.removeOne) {
            const movieObj = {title: args.title, actor: args.actor};
            await connection(removeOneMovie, movieObj);
        } else if (args.updateOne) {
            const movieObj = {title: args.title, actor: args.actor};
            await connection(updateOneMovie, movieObj);
        } else if (args.list) {
            const movieObj ={};
            await connection(listMovies, movieObj)
        }
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv)