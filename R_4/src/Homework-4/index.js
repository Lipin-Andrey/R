import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {AppBar, Toolbar, Button} from "@material-ui/core";

import { Home } from "./routers/Home";
import { Chats } from "./routers/Chats";
import { Profile } from "./routers/Profile";

export const Homework = () => {
    return (
        <div>
            <BrowserRouter>
                <AppBar position="static">
                  <Toolbar>
                      <Button to="/" component={{Link}} color="inherit">
                          Home
                      </Button>
                      <Button to="/profile" component={{Link}} color="inherit">
                          Home
                      </Button>
                      <Button to="/chats" component={{Link}} color="inherit">
                          Home
                      </Button>
                  </Toolbar>
                </AppBar>
                <Switch>
                    <Route component={Chats} path="/chats" />
                    <Route component={Profile} path="/profile" />
                    <Route component={Home} path="/" />
                </Switch>
            </BrowserRouter>
        </div>
    );
};