var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    // development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    development: 'mongodb+srv://alvo:barry1234@gallery.svei8sh.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://alvo:barry1234@gallery.svei8sh.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
