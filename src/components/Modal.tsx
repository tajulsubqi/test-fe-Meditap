import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Fade from "@mui/material/Fade"
import Modal from "@mui/material/Modal"
import ModalButton from "./ui/ModalButton"

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
}

const ModalAddPokemon = ({ open, handleClose }: ModalAddPokemonProps) => {
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
          <div className="py-4 px-4">
            <h3 className="text-center font-semibold">
              Catched! Give your pokemon a nickname.
            </h3>

            <input
              type="text"
              placeholder="Name your pokemon"
              className="bg-slate-100 rounded-md px-4 py-2 outline-none w-full mt-4 placeholder:text-sm border-slate-300 border"
            />

            <div className="flex justify-end gap-2 mr-4">
              <ModalButton red="red" text="Cancel" onClick={handleClose} />
              <ModalButton blue="sky" text="Confirm" onClick={() => {}} />
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}

export default ModalAddPokemon
