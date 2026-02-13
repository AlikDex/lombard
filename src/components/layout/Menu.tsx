import { Box, Button, Paper, Stack } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Menu() {
  return (
    <Paper
      elevation={2}
      sx={{
        bgcolor: "#eaeef2",
      }}
    >
      <Box padding={2}>
        <Stack spacing={2} direction={{ xs: "column", md: "row", sm: "row" }} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>
          <MenuButton title="Оборудование" url="equipment" isMainPage />
          <MenuButton title="Автомобили" url="cars" />
          <MenuButton title="Недвижимость" url="realty" />
          <MenuButton title="Инструмент" url="instruments" />
          <MenuButton title="Телефоны" url="phones" />
        </Stack>
      </Box>
    </Paper>
  );
}

const MenuButton = ({ title, url, isMainPage }: { title: string; url: string; isMainPage?: boolean }) => {
  const pathname = usePathname();
  const isThisUrl = (url: string) => {
    const path = pathname?.replace("/", "");
    return path === url || (!path && isMainPage);
  };
  return (
    <Link href={`/${url}`} style={{ width: "100%" }}>
      <Button variant={isThisUrl(url) ? "outlined" : "text"} sx={{ bgcolor: isThisUrl(url) ? "" : "#e2eaf1" }} fullWidth>
        {title}
        {/* <ExpandMore /> */}
      </Button>
    </Link>
  );
};
