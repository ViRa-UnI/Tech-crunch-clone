# Usage

## Running the Server

To start the server, navigate to the root directory of the project and run the following command:

```
npm start
```

This will start the server on the port specified in the .env file.

## Using the Frontend

To use the frontend, open your web browser and navigate to `http://localhost:<PORT>`, where `<PORT>` is the port number specified in the .env file.

You will be presented with the homepage of the TechCrunch clone. Here, you can browse articles, search for specific articles, and sort articles by different criteria.

To read an article, click on its title. This will take you to a page with the full text of the article.

## Using the Admin Dashboard

To access the admin dashboard, navigate to `http://localhost:<PORT>/admin`, where `<PORT>` is the port number specified in the .env file.

You will be prompted to log in. Enter the admin credentials specified in the .env file.

Once logged in, you will be presented with the admin dashboard. Here, you can create, edit, and delete articles. You can also manage users and their permissions.

## API Endpoints

The server provides several API endpoints for interacting with the data:

- `GET /articles`: Fetches a list of all articles.
- `POST /articles`: Creates a new article. Requires admin authentication.
- `GET /articles/:id`: Fetches a specific article by its ID.
- `PUT /articles/:id`: Updates a specific article by its ID. Requires admin authentication.
- `DELETE /articles/:id`: Deletes a specific article by its ID. Requires admin authentication.
- `GET /users`: Fetches a list of all users. Requires admin authentication.
- `POST /users`: Creates a new user. Requires admin authentication.
- `GET /users/:id`: Fetches a specific user by their ID. Requires admin authentication.
- `PUT /users/:id`: Updates a specific user by their ID. Requires admin authentication.
- `DELETE /users/:id`: Deletes a specific user by their ID. Requires admin authentication.

For more detailed information on how to use these endpoints, refer to the API documentation.