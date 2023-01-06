# Tileserver-gl 
This is form : https://github.com/maptiler/tileserver-gl

## Usage
You need first to install the server on the machine. For simplicity, we use node but it best to use the docker container if you deploy it in a production environment.
```
npm install -g tileserver-gl
```

Then you need to download the data. For this example :
```
wget https://github.com/maptiler/tileserver-gl/releases/download/v1.3.0/zurich_switzerland.mbtiles
tileserver-gl --mbtiles zurich_switzerland.mbtiles
[in your browser, visit http://[server ip]:8080]
```

Now that your server is started your can start the frontend of it example and it should connect to the server directly. The important line for this example is `http://[::]:8080/styles/basic-preview/style.json`.