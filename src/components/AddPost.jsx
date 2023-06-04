import { Add, Delete } from "@mui/icons-material";
import { Fab, IconButton, Tooltip } from "@mui/material";

function AddPost({ setOpen }) {
  return (
    <Tooltip
      title="Add Post"
      sx={{
        position: "fixed",
        bottom: 20,
        left: { xs: "calc(50% - 25px)", md: 30 },
      }}
      onClick={() => setOpen(true)}
    >
      <Fab color="primary" aria-label="add">
        <Add />
      </Fab>
    </Tooltip>
  );
}

export default AddPost;
