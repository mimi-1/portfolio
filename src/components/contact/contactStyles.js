import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    // width: "auto",
    // height: 500,
    backgroundColor: theme.palette.white.light,
  },
  form: {
    padding: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
}))

export default useStyles
