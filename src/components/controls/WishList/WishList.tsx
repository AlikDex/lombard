import { Done } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export interface IWishList {
  title: string;
  terms: string[];
}
export function WishList(props: IWishList) {
  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Grid
        container
        // spacing={{ xs: 1, sm: 2 }}
        // direction="row"
        columns={12}
      >
        {props.terms.map((term, key) => (
          <Grid item xs={12} sm={6} md={6} key={key}>
            <Typography display="flex">
              <Done color="success" fontSize="small" sx={{ mr: 1 }} />
              {term}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
