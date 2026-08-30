"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/team-members",
      handler: "team-member.find",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};