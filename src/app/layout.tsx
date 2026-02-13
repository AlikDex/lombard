import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import StoreProvider from "@/store/StoreProvider";
import { getConfig } from "@/utils/config/getConfig";
import { Box, Container, CssBaseline, Stack } from "@mui/material";
import React from "react";

export const revalidate = 1;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const config = await getConfig();
  return (
    <html lang="ru">
      <body>
        <CssBaseline />
        {config && (
          <StoreProvider config={config}>
            <Container maxWidth="md">
              <Box sx={{ my: 2 }}>
                <Stack spacing={2}>
                  <Header />
                  {children}
                  <Footer />
                </Stack>
              </Box>
            </Container>
          </StoreProvider>
        )}
      </body>
    </html>
  );
}
