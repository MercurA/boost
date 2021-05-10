import { CssBaseline } from "@material-ui/core";

const MainApp = ({ Component, pageProps }) => {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
    )
}

export default MainApp;
