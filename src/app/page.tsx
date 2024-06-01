import Banner from "@/components/Banner"
import Nav from "@/components/Nav"
import NavLink from "@/components/NavLink"

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
        { href: "/abilities", text: "Abilities", bgColor: "bg-sky_primary" },
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
    <>
      <div className="mt-6 pb-4">
        <Nav />
      </div>

      <section className="mt-2">
        <Banner />
      </section>

      <div className="px-7 py-10 text-white rounded-b-3xl">
        <h1 className="text-3xl font-bold">What Pokemon are you looking for?</h1>

        <div>
          {linkGroups.map((group, index) => (
            <NavLink key={index} links={group.links} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
