import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { itemData } from "../mock";

function RightSection() {
  return (
    <Box
      flex={1.5}
      p={3}
      sx={{ display: { xs: "none", md: "block" }, overflowY: "auto" }}
      maxHeight="92vh"
    >
      <Box position="fied" width={300}>
        <Box>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>

          <AvatarGroup max={7}>
            <Avatar
              alt="Remy Sharp"
              src="https://lh3.googleusercontent.com/bip/AKnpU_ynKJBoCQd7drf3xKtQR7LAC_ooMo__4PbeYW0swWuks5TEhqIwQXVavNFQRmiqlUGtzrWxAPPoTuDaXbWO-iD7h2g5UnpNMjfOxTAhrw8ZkBmlr4rPHmHczNF_A2DVmVJjdGGf24WfFr206Ld1VMuAu6irtdB_pQ=w250-h200-p"
            />
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/bip/AKnpU_yMchtkTo20wAGdiIYvWcY6TEXjrD98uTWEuCoXB6mmW4D4J7EhVikFF8YXryQ709UX1mlLjd0gFFc7SMTMsgMliBZzOqXcKWQVXpvJ3U0kBqrx21RLOY9s19B15syFsiJSrLQIK8XTew1KQcci4EUYdin978agplXcv17zJgs0svBhDzlboWfApxXpCVj--lj8zzmeJup69l_OuEaAWVPWojqVZySTP76xHxr_DOapfEn3svFlleng5J1Jwt7yGxY8ccVHxqz1uOo=w250-h200-p"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://lh3.googleusercontent.com/bip/AKnpU_xPa8ilmgiUrp0VdzsDOEaIYJR97_dgaN9qe4QRMNSIoXhQ6Fga3CrzhidCSqglRfo-Y3e3K33gabMW_2efPfUH9kHngc4pAh8TCC9DTNVxflSGgzYBMPJh_BxCs3KbU6GBtluag5rhHjEQ-B5eixzBu8EUqtz4ewq7Yep0f2zc34SXxGQwqTbhLsBJPM0nBfiQuFiAaXd03uEETSnIrCoyM-rpsxjTWoSA8MiVn_dIKPo=w250-h200-p"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://lh3.googleusercontent.com/bip/AKnpU_yMchtkTo20wAGdiIYvWcY6TEXjrD98uTWEuCoXB6mmW4D4J7EhVikFF8YXryQ709UX1mlLjd0gFFc7SMTMsgMliBZzOqXcKWQVXpvJ3U0kBqrx21RLOY9s19B15syFsiJSrLQIK8XTew1KQcci4EUYdin978agplXcv17zJgs0svBhDzlboWfApxXpCVj--lj8zzmeJup69l_OuEaAWVPWojqVZySTP76xHxr_DOapfEn3svFlleng5J1Jwt7yGxY8ccVHxqz1uOo=w250-h200-p"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://lh3.googleusercontent.com/bip/AKnpU_wC_8EmH2RsjLSzpQdtbxlvYGZsdmHULmSHHh_C7TT9OUsb7TbrOGtzt_GPvJENhOhAvUDAu5HkfDVxV6oUFG4Gmoht0qFpVvjjCRwzfbXS3el0We1B4DFNNfxcXe4VzwwJIhWsFXp-VpPJkBuYJwRhCEY0F4IB49vXsBXr1ud0gemIT2-vO9NiIpKpNavWoK_fU643Tps6wb2izAayjw_wF5wahtgiiJgF7-3vJt1TIiu7l4UG-CIeMtQGKQoE=w250-h200-p"
            />
            <Avatar
              alt="Remy Sharp"
              src="https://lh3.googleusercontent.com/bip/AKnpU_ynKJBoCQd7drf3xKtQR7LAC_ooMo__4PbeYW0swWuks5TEhqIwQXVavNFQRmiqlUGtzrWxAPPoTuDaXbWO-iD7h2g5UnpNMjfOxTAhrw8ZkBmlr4rPHmHczNF_A2DVmVJjdGGf24WfFr206Ld1VMuAu6irtdB_pQ=w250-h200-p"
            />
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/bip/AKnpU_yMchtkTo20wAGdiIYvWcY6TEXjrD98uTWEuCoXB6mmW4D4J7EhVikFF8YXryQ709UX1mlLjd0gFFc7SMTMsgMliBZzOqXcKWQVXpvJ3U0kBqrx21RLOY9s19B15syFsiJSrLQIK8XTew1KQcci4EUYdin978agplXcv17zJgs0svBhDzlboWfApxXpCVj--lj8zzmeJup69l_OuEaAWVPWojqVZySTP76xHxr_DOapfEn3svFlleng5J1Jwt7yGxY8ccVHxqz1uOo=w250-h200-p"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://lh3.googleusercontent.com/bip/AKnpU_xPa8ilmgiUrp0VdzsDOEaIYJR97_dgaN9qe4QRMNSIoXhQ6Fga3CrzhidCSqglRfo-Y3e3K33gabMW_2efPfUH9kHngc4pAh8TCC9DTNVxflSGgzYBMPJh_BxCs3KbU6GBtluag5rhHjEQ-B5eixzBu8EUqtz4ewq7Yep0f2zc34SXxGQwqTbhLsBJPM0nBfiQuFiAaXd03uEETSnIrCoyM-rpsxjTWoSA8MiVn_dIKPo=w250-h200-p"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://lh3.googleusercontent.com/bip/AKnpU_wC_8EmH2RsjLSzpQdtbxlvYGZsdmHULmSHHh_C7TT9OUsb7TbrOGtzt_GPvJENhOhAvUDAu5HkfDVxV6oUFG4Gmoht0qFpVvjjCRwzfbXS3el0We1B4DFNNfxcXe4VzwwJIhWsFXp-VpPJkBuYJwRhCEY0F4IB49vXsBXr1ud0gemIT2-vO9NiIpKpNavWoK_fU643Tps6wb2izAayjw_wF5wahtgiiJgF7-3vJt1TIiu7l4UG-CIeMtQGKQoE=w250-h200-p"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://lh3.googleusercontent.com/bip/AKnpU_xPa8ilmgiUrp0VdzsDOEaIYJR97_dgaN9qe4QRMNSIoXhQ6Fga3CrzhidCSqglRfo-Y3e3K33gabMW_2efPfUH9kHngc4pAh8TCC9DTNVxflSGgzYBMPJh_BxCs3KbU6GBtluag5rhHjEQ-B5eixzBu8EUqtz4ewq7Yep0f2zc34SXxGQwqTbhLsBJPM0nBfiQuFiAaXd03uEETSnIrCoyM-rpsxjTWoSA8MiVn_dIKPo=w250-h200-p"
            />
          </AvatarGroup>
        </Box>

        <Box mt={4}>
          <Typography variant="h6" mb={2} fontWeight={100}>
            Latest Photos
          </Typography>

          <ImageList
            sx={{ width: { md: 300, xl: 450 }, height: 200 }}
            cols={3}
            rowHeight={164}
            gap={5}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=22x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Box>
          <Typography variant="h6" fontWeight={100}>
            Latest Conversations
          </Typography>

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default RightSection;
