import {makeStyles} from '@fluentui/react-components'


const useStyles = makeStyles({
    root:{
        padding:'10px 0px',
        borderTop:'1px solid #343a40'
    }
})

const Footer = () => {
    const classes = useStyles();
  return (
    <section className={classes.root}>
      <p>© faizmohammed@adaptready.com</p>
    </section>
  )
}

export default Footer
