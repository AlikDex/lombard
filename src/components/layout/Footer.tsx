"use client";
import { useAppSelector } from "@/store/utils/useAppSelector";
import footerLogo from "@assets/logo.png";
import { Call, WhatsApp } from "@mui/icons-material";
import { Grid, Link, Paper, Typography } from "@mui/material";

export function Footer() {
  const app = useAppSelector((store) => store.app);
  const texts = useAppSelector((store) => store.texts);
  return (
    <Paper elevation={3} sx={{ padding: 1, bgcolor: "#eaeef2" }}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={6} sm={6} md={6}>
          <img src={footerLogo.src} />
        </Grid>
        <Grid item xs={6} md={6} sm={6}>
          <Typography variant="h5" align="right">
            <Link
              sx={{
                display: "inline",
                pr: "20px",
              }}
              href={`https://api.whatsapp.com/send?phone=${app.contactPhone}&text=`}
              target="_blank"
            >
              <WhatsApp sx={{ verticalAlign: "middle" }} color="success" />
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
          <Typography align="right" fontWeight={"bold"}>
            <Link href={texts.common.email} rel="nofollow">
              {texts.common.email}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
