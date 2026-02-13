import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

export interface ITermsOfSale {
  title: string;
  terms: string[];
  icon: ReactNode;
}

export function TermsOfSale(props: ITermsOfSale) {
  return (
    <Box>
      <Typography variant="h6">{props.title}</Typography>
      <List>
        {props.terms.map((text, index) => (
          <ListItem key={index} sx={{ py: 0 }}>
            <ListItemIcon>{props.icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
