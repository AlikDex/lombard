import React from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import StoreProvider from "@/store/StoreProvider";
import { getConfig } from "@/utils/config/getConfig";
import { Box, Container, Stack } from "@mui/material";
import MuiProvider from "@/components/providers/MuiProvider"; // Тот, что мы создали

export const revalidate = 1;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const config = await getConfig();

  return (
    <html lang="ru">
    <body>
    <MuiProvider>
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
    </MuiProvider>
    </body>
    </html>
  );
}
