import App from './'

let port = process.env.PORT || 3000;

App.listen(port, () => {
    console.log('Server started on port', port);
})
