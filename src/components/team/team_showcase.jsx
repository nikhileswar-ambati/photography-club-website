import { useContext } from "react";
import { TeamMember } from "./team_member";
import { TabContext } from "../../context/TabContext";
import { useNavigate } from "react-router-dom";

export function TeamShowcase() {
  const navigate = useNavigate();
  const { candidates, activeItem, searchQuery } = useContext(TabContext);

  const selectedCandidates = candidates.filter(
    (candidate) =>
      activeItem === "View all" || candidate.role === activeItem,
  );

  const finalCandidates = selectedCandidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const goToIndividualPortfolio = (candidate) => {
    sessionStorage.setItem("scrollPositionY", window.scrollY);

    navigate("/portfolio/", {
      state: { photographer: candidate },
    });
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {finalCandidates.map((candidate) => (
            <TeamMember
              key={candidate.id}
              name={candidate.name}
              role={candidate.role}
              imageUrl={candidate.avatar}
              onClick={() => goToIndividualPortfolio(candidate)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}