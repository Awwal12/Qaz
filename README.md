# QAZ Social Media App README

This repository contains the code for a social media app similar to Facebook. The app allows users to create accounts, connect with friends, share content such as photos and videos, post updates, comment on posts, and more.

## Features

- User registration and authentication
- User profiles with profile pictures, cover photos, and other information
- Friend connections and friend suggestions
- News feed displaying posts from friends and followed pages
- Post creation with support for text, photos, and videos
- Commenting on posts
- Like and reaction system for posts and comments
- Search functionality to find users and pages
- Privacy settings for posts and profiles
- Notifications for friend requests, likes, comments, and more
- Messaging system for private conversations between users

## Technologies Used

- React for the frontend
- Node.js and Express for the backend
- MongoDB for the database
- Socket.io for real-time messaging
- Amazon S3 for storing and serving user-uploaded media

## Getting Started

To get started with the app, follow these steps:

1. Clone the repository to your local machine

1. Install the necessary dependencies by running **`npm install`** in the root directory

1. Create a **`.env`** file in the root directory with the following environment variables:

```
MONGODB_URI=<your MongoDB URI>
JWT_SECRET=<your JWT secret>
AWS_ACCESS_KEY_ID=<your AWS access key ID>
AWS_SECRET_ACCESS_KEY=<your AWS secret access key>
AWS_REGION=<the region where your S3 bucket is located>
AWS_BUCKET=<the name of your S3 bucket>
```

Run the app by running **`npm start`** in the root directory

Visit **http://localhost:3000** in your browser to use the app

## Contribution

Contributions to the app are welcome! If you notice a bug or have a feature request, please open an issue. If you would like to contribute code, please fork the repository and submit a pull request.

## License

This app is licensed under the MIT License. See the LICENSE file for more information.
