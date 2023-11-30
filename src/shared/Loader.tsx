import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <CircularProgress
      sx={{
        color: "#000",
        width: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    />
  );
};

export default Loader;
