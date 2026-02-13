"use client";
import { useAppSelector } from "@/store/utils/useAppSelector";
import logo from "@assets/logo.png";
import { Call, Telegram } from "@mui/icons-material";
import { Grid, Link, Typography } from "@mui/material";
import { Menu } from "./Menu";

export function Header() {
  const app = useAppSelector((store) => store.app);
  const texts = useAppSelector((store) => store.texts);
  return (
    <div>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={6} sm={6} md={6} alignItems={"center"} alignContent={"center"} style={{ paddingBottom: "10px" }}>
          <Link href="/">
            <img src={logo.src} />
          </Link>
        </Grid>
        <Grid item xs={6} md={6} sm={6} alignItems={"center"} alignContent={"center"}>
          <Typography variant="h5" align="right">
            <Link
              sx={{
                display: "inline",
                pr: "20px",
              }}
              href={`https://t.me/+${app.contactPhone}`}
              target="_blank"
            >
              <Telegram sx={{ verticalAlign: "middle" }} color="info" />
            </Link>
            <Link
              sx={{
                display: { xs: "inline", md: "none", sm: "none" },
                pr: "20px",
              }}
              href={`tel:${app.contactPhone}`}
              target="_blank"
            >
              <Call sx={{ verticalAlign: "middle" }} color="success" />
            </Link>
            <Link
              sx={{
                display: { xs: "none", md: "inline", sm: "inline" },
                color: "#000000",
                fontWeight: "bold",
              }}
              href={`tel:${app.contactPhone}`}
              underline="none"
            >
              {texts.common.contactPhone}
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Menu />
    </div>
  );
}
