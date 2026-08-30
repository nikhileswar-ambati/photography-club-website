import axios from "axios";
import { API_URL, getMediaUrl } from "./api";

const mapPortfolioPhotos = (posts = []) =>
  posts.flatMap((post) =>
    (post.images || []).map((image) => ({
      id: image.documentId || image.id || image.url,
      title: post.title || "Portfolio photo",
      description: post.description || "",
      url: getMediaUrl(image.url),
    })),
  );

const mapMember = (member) => ({
  id: member.documentId || String(member.id),
  name: member.name || member.username || "Unknown Photographer",
  role: member.photographerRole || "Photographer",
  team: member.team || "Photographers",
  bio: member.bio || "",
  mail: member.email || "",
  instagram: member.instagram || "",
  avatar: getMediaUrl(member.avatar?.url),
  photos: mapPortfolioPhotos(member.posts),
});

export const getTeamMembers = async () => {
  const response = await axios.get(`${API_URL}/api/team-members`);
  return response.data.data.map(mapMember);
};