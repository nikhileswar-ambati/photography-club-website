export function TeamMember({ name, role, imageUrl, isHighlighted, onClick }) {
  return (
    <div
      className={`relative group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-2 ${
        isHighlighted ? "rounded-2xl ring-2 ring-black ring-offset-4" : ""
      }`}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-2xl bg-gray-100 transition-shadow duration-300 ease-out group-hover:shadow-2xl">
        <img
          src={imageUrl}
          alt={`${name}, ${role}`}
          className="w-full aspect-square object-cover object-center"
        />
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max">
        <div className={`rounded-full px-6 py-3 shadow-lg transition-shadow duration-300 group-hover:shadow-xl ${
          isHighlighted
            ? "border-2 border-black bg-white"
            : "border-[1.2px] border-black bg-white"
        }`}>
          <h3 className="text-gray-900 font-medium text-center">{name}</h3>
          <p className="text-gray-600 text-sm text-center">{role}</p>
        </div>
      </div>
    </div>
  );
}
