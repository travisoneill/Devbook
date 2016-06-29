// <Router>
//   <Route path="/" component={App}>
//     <Route path="/splash" component={Splash} />
//     <Route path="/user" component={CurrentUser}>
//       <Route path="/index" component={CurrentUserWall} />
//       <Route path="/show/(:id)" component={Timeline} />
//       <Route path="/edit/(:id)" component={Profile} />
//       // <Route path="/show/:id2" component={OtherUserTimeline} />
//       // <Route path="/edit/:id2" component={OtherUserAbout} />
//     </Route>
//   </Route>
// </Router>

// func == if !current user hashHistory push splash

<Router>
  <Route path="/" component={App} onEnter={func}> //titlebar & feed
    <IndexRoute component={Wall} />
    <Route path="/index" component={Wall} />
    <Route path="/show/(:id)" component={Timeline} />
    <Route path="/edit/(:id)" component={Profile} />
  </Route>
  <Route path="/splash" component={Splash} />
</Router>



  <Router>
    <Route path="/" component={app} >
      <IndexRoute component={Wall} />
      <Route path="/wall" component={Wall} />
      <Route path="/timeline/(:id)" component={Timeline} />
      <Route path="/about/(:id)" component={About} />
      <Route path="/friends/(:id)" component={Friends} />
      <Route path="/photos/(:id)" component={Photos} />
    </Route>

  </Router>



/api/users
/api/users/:id
/api/users/:id/edit

/api/users/current

/api/session/new
