# React and Redux Demo

## Setup

To run the demo first install babel loader and required packages with:

        npm install

Next create js bundle with:

        webpack -d

Now open demo.html in your browser

## The Code

js folder structure:

        .
        ├── components
        │   ├── add_message.js
        │   ├── app.js
        │   └── text_panel.js
        ├── main.js
        └── store
            ├── actions
            │   └── chat.js
            ├── main.js
            └── middlewares
                └── thunk.js


components holds all React components, where the top component is called App. This is also the only component that deals with redux store.
In store folder you can find redux related code, including actions definitions, reducers and middlewares.