import Container from "@/components/Container"
import { Skeleton } from "@mui/material"
import { BiSolidRightArrow } from "react-icons/bi"

const PokemonDetailSkeleton = () => {
  return (
    <div>
      <Container>
        <div className="flex mt-7 gap-x-2 items-center">
          <BiSolidRightArrow color="red" size={20} />
          <Skeleton variant="text" width={200} height={40} />
        </div>
        <div className="flex flex-col">
          <div className="md:ml-14 md:flex items-center">
            <div className="mt-3 md:mt-3">
              <Skeleton variant="text" width={250} height={60} />
              <Skeleton variant="rectangular" width={150} height={30} />
              <Skeleton variant="rounded" className="my-7" width={250} height={410} />
            </div>
            <div className="md:ml-7">
              <Skeleton variant="rectangular" width={300} height={60} />
              <Skeleton variant="rectangular" width={300} height={60} />
              <Skeleton variant="rectangular" width={300} height={60} />
              <Skeleton variant="rectangular" width={150} height={40} className="mt-7" />
            </div>
          </div>
        </div>
        <Skeleton variant="rectangular" width="100%" height={300} />
      </Container>
    </div>
  )
}

export default PokemonDetailSkeleton
