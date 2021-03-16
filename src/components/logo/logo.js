import * as React from "react"
import { makeStyles, Button } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import { Link } from "gatsby"

const useStyles = makeStyles({
  logo: {
    padding: 0,
    margin: 0,
    position: "static",
    fontSize: "1rem",
    fontWeight: 600,
    noWrap: "true",
    color: "white",
    textTransform: "capitalize",
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    textDecoration: "none",
    marginTop: "1rem",
  },
})

const Logo = props => {
  const classes = useStyles()
  return (
    <Button>
      <Link className={classes.logo} to="/">
        <Typography variant="h6">StartDust Jazz Duo</Typography>
      </Link>
    </Button>
  )
}

export default Logo
