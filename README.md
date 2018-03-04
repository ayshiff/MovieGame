# The Movie Game
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Here I use my own API key to access movies data. You can use your own by going on https://www.themoviedb.org

![ScreenShot](/reference/ScreenShot.jpg)

Below you will find some information.

# Step 1
Run ```git clone https://github.com/ayshiff/MovieGame.git ```
It will initialize the dependencies.
And then ```cd MovieGame ```

# Step 2
Run ```npm install ```
It will initialize the dependencies.

# Step 3
Run ``` npm start ```

# Step 4
Go to ```localhost:3000```

# To run it with Docker

Build and tag the Docker image:   
``` $ docker build -t movie-game . ```   

Then, spin up the container once the build is done:   
```bash
$ docker run -it \
  -v ${PWD}:/usr/src/app \
  -v /usr/src/app/node_modules \
  -p 3000:3000 \
  --rm \
  sample-app
```

Open your browser to http://localhost:3000/ and you should see the app.

Note : this project is still in developpement.
