import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      justifyContent: 'center'
    }
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {
    textAlign: 'center'
  }
}))
