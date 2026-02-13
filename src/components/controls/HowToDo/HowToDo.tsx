import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { CircleWithNumber } from "../CircleWithNumber/CircleWithNumber";

export interface IHowToDoProps {
  title: string;
  todos: string[];
}

export function HowToDo(props: IHowToDoProps) {
  return (
    <Box>
      <Typography variant="h6">{props.title}</Typography>
      <List>
        {props.todos.map((text, index) => (
          <ListItem key={index} sx={{ py: 0 }}>
            <ListItemIcon>
              <CircleWithNumber number={index + 1} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
