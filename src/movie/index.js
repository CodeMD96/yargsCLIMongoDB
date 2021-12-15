exports.addMovie = async (movieObj, collection) => {
    try {
        await collection.insertOne(movieObj);
        console.log(`Successfully added ${movieObj.title}`);
    } catch (error) {
        console.log(error);
    }
}

exports.removeOneMovie = async (movieObj, collection) => {
    try {
        await collection.deleteOne(movieObj);
        console.log(`Successfully deleted ${movieObj.title}`);
    } catch (error) {
        console.log(error);
    }
}

exports.updateOneMovie = async (movieObj, collection) => {
    try {
        await collection.updateOne({title: movieObj.title}, {$set: {actor: movieObj.actor}});
        console.log(`Successfully updated ${movieObj.title}`);
    } catch (error) {
        console.log(error);
    }
}

exports.listMovies = async (movieObj, collection) => {
    try {
        const listItems = await collection.find( movieObj ).toArray();
        console.log(listItems);
    } catch (error) {
        console.log(error);
    }
}