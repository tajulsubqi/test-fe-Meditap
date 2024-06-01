import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Fade from "@mui/material/Fade"
import Modal from "@mui/material/Modal"
import ModalButton from "./ui/ModalButton"
import Input from "./ui/Input"
import { ChangeEvent, useState } from "react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 5,
}

interface ModalAddPokemonProps {
  open: boolean
  handleClose: () => void
  handleCatchPokemon: (nickname: string) => void
}

const ModalAddPokemon = (props: ModalAddPokemonProps) => {
  const router = useRouter()
  const { open, handleClose, handleCatchPokemon } = props
  const [nickname, setNickname] = useState("")

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    handleCatchPokemon(nickname)
    toast.success("Catched!")
    router.push("/pokebag")
    setNickname("")
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <form onSubmit={handleSubmit} className="py-4 px-4">
            <h3 className="text-center font-semibold">
              Catched! Give your pokemon a nickname.
            </h3>

            <Input
              placeholder="Name your pokemon!"
              onChange={(e) => setNickname(e.target.value)}
              value={nickname}
            />

            <div className="flex justify-end gap-2 mr-4">
              <ModalButton type="button" red="red" text="Cancel" onClick={handleClose} />
              <ModalButton type="submit" blue="sky" text="Confirm" />
            </div>
          </form>
        </Box>
      </Fade>
    </Modal>
  )
}

export default ModalAddPokemon
