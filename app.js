const http = require("http");
const path = require("path");
const hostname = "127.0.0.1";
const port = 3000;



const morgan = require("morgan");

const helmet = require("helmet");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const cookieParser = require("cookie-parser");

const logger = morgan("tiny");

const express = require('express');
const es6Renderer = require("express-es6-template-engine");
const app = express();

app.use(logger);
app.use(helmet());
app.engine("html", es6Renderer);
app.set("views", "./views");
app.set("view engine", "html");


app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    session({
        store: new FileStore(),
        secret: "super cool",
        resave: false,
        saveUninitialized: true,
        is_logged_in: false // This is ours
    })
);





const server = http.createServer(app);



server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`)
});

// Controller Creator
const usersController = require("./routes/usersRoute");
const indexController = require("./routes/index");

// Use Controllers
app.use("/users", usersController);
app.use("/", indexController);

