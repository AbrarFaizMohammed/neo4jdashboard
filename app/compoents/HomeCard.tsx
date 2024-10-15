import {makeStyles, mergeClasses, shorthands, tokens} from '@fluentui/react-components';

const useStyles = makeStyles({
  root:{   
    height:'605px',
    margin:'10px 0px',
    ...shorthands.borderRadius(tokens.borderRadiusLarge)
  },
  frame:{
    border:'none',
    ...shorthands.borderRadius(tokens.borderRadiusLarge)
  }
})

const HomeCard = () => {
  const classes = useStyles();
  return (
    <section className={mergeClasses(classes.root)}>
       <iframe
       className={classes.frame}
          src="http://localhost:3000/" 
          width="100%"
          height="100%"
          allowFullScreen
          loading='lazy'
        ></iframe>
    </section>
  )
}

export default HomeCard
