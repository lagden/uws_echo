# Segmentation Fault using Docker Alpine

Below is a step by step to reproduce the error
This is only happens with `Docker - node:10.5-alpine`

## Repository

The repository with the code: https://github.com/lagden/uws_echo


## How to reproduce

Run the image with **Node.js** using `uws@10.148.1`
```
docker run -d --name uws_echo -p 3001:3000 -i -t lagden/uws_echo:v1 ash
```

Execute the application
```
docker exec -it uws_echo ash -c "node index.js"
```

Connect to server locally
```
docker exec -it uws_echo ash -c "wscat -c 'ws://127.0.0.1:3000'"
```

And connect to server externally
```
wscat -c 'ws://127.0.0.1:3001'
```

When you end connection externally, the `Segmentation Fault` happens

---

![Sample](https://github.com/lagden/uws_echo/raw/master/show.gif)
