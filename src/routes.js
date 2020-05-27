import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import EventsIndex from "./components/events_index";
import CreateEvent from "./components/create_event";
import ViewEvent from "./components/event_view";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={EventsIndex} />
    <Route path="/event/create" component={CreateEvent} />
    <Route path="/event/view" component={ViewEvent} />
  </Route>
);
