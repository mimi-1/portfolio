import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    // width: "auto",
    // height: 500,
    backgroundColor: theme.palette.white.light,
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
  },
  form: {
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  input: {
    margin: theme.spacing(1),
  },
}))

export default useStyles
