import Container from "@/components/Container"
import { Skeleton } from "@mui/material"

const PokemonDetailSkeleton = () => {
  return (
    <div>
      <Container>
        <h1 className="my-7 text-3xl font-bold">
          <Skeleton variant="text" width={100} height={30} />
        </h1>
        <div className="flex items-center gap-2">
          <Skeleton variant="text" width={80} height={50} />
          <Skeleton variant="text" width={80} height={50} />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex gap-x-4 mt-11">
            <Skeleton variant="rounded" width={80} height={80} />
            <Skeleton variant="rounded" width={80} height={80} />
          </div>
          <Skeleton variant="rounded" width={150} height={24} className="mt-8 mb-4" />
        </div>
        <div className="bg-white w-full px-10 py-4 rounded-t-3xl">
          <Skeleton variant="text" width={100} height={30} />
          <Skeleton variant="text" width={200} height={20} />
          <Skeleton variant="text" width={100} height={20} />
        </div>
      </Container>
    </div>
  )
}

export default PokemonDetailSkeleton
