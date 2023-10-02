# Installation Guide

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm.
- You have a Windows/Linux/Mac machine.

## Installing TechCrunchClone

To install TechCrunchClone, follow these steps:

1. Clone the repository:

```
git clone https://github.com/yourusername/TechCrunchClone.git
```

2. Navigate to the project directory:

```
cd TechCrunchClone
```

3. Install server dependencies:

```
npm install
```

4. Navigate to the client directory:

```
cd client
```

5. Install client dependencies:

```
npm install
```

6. Return to the root directory:

```
cd ..
```

7. Create a .env file in the root directory and add the following environment variables:

```
DB_CONNECTION=your_mongodb_connection_string
SECRET_KEY=your_secret_key
PORT=5000
```

Replace `your_mongodb_connection_string` with your MongoDB connection string and `your_secret_key` with a secret key of your choice.

8. Start the server:

```
npm run dev
```

The server runs in the development mode and starts on [http://localhost:5000](http://localhost:5000).

9. In a new terminal, navigate to the client directory:

```
cd client
```

10. Start the client:

```
npm run dev
```

The client runs in the development mode and starts on [http://localhost:3000](http://localhost:3000).

You have now successfully installed and started the TechCrunchClone on your local machine.