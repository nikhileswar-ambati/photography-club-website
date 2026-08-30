"use strict";

module.exports = {
  async find(ctx) {
    try {
      const members = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
        {
          fields: [
            "documentId",
            "name",
            "username",
            "email",
            "bio",
            "photographerRole",
            "instagram",
            "team",
          ],
          populate: {
            avatar: true,
            posts: {
              fields: ["documentId", "title", "description"],
              populate: {
                images: true,
              },
            },
          },
        },
      );

      const teamMembers = members.filter((member) => member.team);

      ctx.body = {
        data: teamMembers.map((member) => ({
          documentId: member.documentId,
          name: member.name,
          username: member.username,
          email: member.email,
          bio: member.bio,
          photographerRole: member.photographerRole,
          instagram: member.instagram,
          team: member.team,
          avatar: member.avatar,
          posts: member.posts || [],
        })),
      };
    } catch (error) {
      strapi.log.error("Unable to load team members:", error);

      ctx.status = 500;
      ctx.body = {
        error: "Unable to load team members",
      };
    }
  },
};