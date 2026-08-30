import { createContext, useEffect, useState } from "react";
import { getCandidates } from "../components/util/candidateApi";

export const TabContext = createContext(null);

export const TabContextProvider = (props) => {
  const navItems = [
    { name: "View all", href: "#" },
    { name: "Management", href: "#" },
    { name: "Design", href: "#" },
    { name: "Photography", href: "#" },
    { name: "Operations", href: "#" },
  ];

  const [candidates, setCandidates] = useState([]);
  const [activeItem, setActiveItem] = useState("View all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadCandidates = async () => {
      try {
        const candidateData = await getCandidates();
        setCandidates(candidateData);
      } catch (error) {
        console.error("Unable to load candidates:", error);
        setCandidates([]);
      }
    };

    loadCandidates();
  }, []);

  return (
    <TabContext.Provider
      value={{
        navItems,
        candidates,
        activeItem,
        setActiveItem,
        searchQuery,
        setSearchQuery,
      }}
    >
      {props.children}
    </TabContext.Provider>
  );
};