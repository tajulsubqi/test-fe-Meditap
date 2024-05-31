import NavLink from "@/components/NavLink"
import SearchInput from "@/components/ui/SearchInput"

const Home = () => {
  const linkGroups = [
    {
      links: [
        { href: "/pokemon", text: "Pokemon", bgColor: "bg-success" },
        { href: "/moves", text: "Moves", bgColor: "bg-danger" },
      ],
    },
    {
      links: [
        { href: "/abilities", text: "Abilities", bgColor: "bg-primary" },
        { href: "/genders", text: "Genders", bgColor: "bg-accent" },
      ],
    },
    {
      links: [
        { href: "/locations", text: "Locations", bgColor: "bg-primary_purple" },
        { href: "/type", text: "Types", bgColor: "bg-primary_brown" },
      ],
    },
  ]

  return (
    <div className="px-7 py-10 bg-white rounded-b-3xl">
      <h1 className="text-3xl font-bold">What Pokemon are you looking for?</h1>

      <div className="mt-6 pb-4">
        <SearchInput placeholder="Search Pokemon ..." />
      </div>

      <div>
        {linkGroups.map((group, index) => (
          <NavLink key={index} links={group.links} />
        ))}
      </div>
    </div>
  )
}

export default Home
