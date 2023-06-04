import { Box } from "@mui/material";
import FeedItem from "../components/FeedItem";

function Feed({ mode }) {
  return (
    <Box
      flex={2}
      p={2}
      gap={2}
      bgcolor={mode === "light" ? "#eee" : "Background.default"}
      maxHeight="92vh"
      overflow="auto"
    >
      {Array.from({ length: 6 }).map(() => (
        <FeedItem />
      ))}
    </Box>
  );
}

export default Feed;
