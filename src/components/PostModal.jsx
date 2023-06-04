import styled from "@emotion/styled";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function PostModal({ open, handleClose }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    // height: 280,
    bgcolor: "background.paper",
    color: "text.primary",
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
  };

  const UserInfo = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    cursor: "pointer",
    // color: "",
    // [theme.breakpoints.up("sm")]: {
    //   display: "none",
    // },
  }));

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} bgColor="Background.default">
        <Typography variant="h6" color="gray" textAlign="center">
          {" "}
          Create a Post
        </Typography>

        <UserInfo>
          <Avatar
            src="https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            sx={{ width: 30, height: 30, objectFit: "cover" }}
          />
          <Typography variant="body2" fontWeight={500}>
            John Doe
          </Typography>
        </UserInfo>

        <TextField
          multiline
          margin="normal"
          placeholder="What's on your mind?"
          rows={4}
          fullWidth
          variant="standard"
        />

        <Stack gap={1} direction="row" my={2}>
          <EmojiEmotions color="action" />
          <Image color="action" />
          <VideoCameraBack color="action" />
          <PersonAdd color="action" />
        </Stack>

        <ButtonGroup variant="contained" fullWidth>
          <Button> Post </Button>
          <Button sx={{ width: 100 }}>
            {" "}
            <DateRange />{" "}
          </Button>
        </ButtonGroup>
      </Box>
    </Modal>
  );
}

export default PostModal;
