import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<{}>()((theme) => ({
  root: {
    display: "flex",
  },
  hover: {
    position: "relative",
    transition: "300ms",
    width: "25px",
    height: "25px",
    "&:hover": {
      color: "#8181fb",
      cursor: "pointer",
      $delete: {
        display: "block",
      },
    },
  },
  icon: {
    color: "#8181fb",
  },
  table: {
    minWidth: 650,
  },
  loader: {
    width: "700%",
  },
  flex: {
    display: "flex",
  },
}));

export default useStyles;
