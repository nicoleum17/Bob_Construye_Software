exports.get_login = (request, response, next) => {
  response.render("login.ejs", {
    // falsif - valor vacío que pasa como falso
    isLoggedIn: request.session.isLoggedIn || false,
    username: request.session.username || " ",
  });
};

exports.post_login = (request, response, next) => {
  //console.log(request.body.username);
  request.session.isLoggedIn = true;
  request.session.username = request.body.username;
  response.redirect("/plantas");
};
