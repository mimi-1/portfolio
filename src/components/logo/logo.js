import * as React from "react"
import { makeStyles, Button } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import { Link } from "gatsby"

const useStyles = makeStyles({
  logo: {
    padding: 0,
    margin: 0,
    position: "static",
    fontSize: "0.8rem",
    fontWeight: 600,
    noWrap: "true",
    color: "white",
    textTransform: "capitalize",
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    textDecoration: "none",
    marginTop: "4rem",
    paddingLeft: 0,
    paddingRight: "1rem",
  },
})

const Logo = () => {
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
