import StoryCard from "./StoryCard";

const names = [
  {
    name: "Sandhya Aryal",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Ramesh Aryal",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Hari Aryal",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Ramu Aryal",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/fop",
  },
  {
    name: "Sandhya Aryal",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {names.map((name) => (
        <StoryCard
          key={name.src}
          name={name.name}
          src={name.src}
          profile={name.profile}
        />
      ))}
    </div>
  );
}
export default Stories;
