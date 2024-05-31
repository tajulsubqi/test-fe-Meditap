import React from "react"
import Container from "../Container"

const AbilitiesPage = () => {
  return (
    <Container>
      <h1 className="my-7 text-3xl font-bold">Abilities</h1>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
        {/* map */}
        <div className="w-full flex items-center px-4 py-3 bg-white rounded-xl shadow">
          <h4 className="text-lg font-bold">Charmander</h4>
        </div>
      </div>
    </Container>
  )
}

export default AbilitiesPage
