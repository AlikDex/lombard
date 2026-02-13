import StoreProvider from "@/store/StoreProvider";
import { IConfig } from "@/utils/config/IConfig";
import { Box, Container, CssBaseline, Stack } from "@mui/material";
import { Footer } from "./Footer";
import { Header } from "./Header";

const RootLayoutContent = ({ children, config }: { children: React.ReactNode; config: IConfig }) => {
  return (
    <>
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
    </>
  );
};

export default RootLayoutContent;
