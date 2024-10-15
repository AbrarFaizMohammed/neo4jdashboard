
import {makeStyles, mergeClasses, tokens} from '@fluentui/react-components'
import {IotFilled} from '@fluentui/react-icons';

const useStyles = makeStyles({
    icon:{
        fontSize:'40px'
    },
    container:{
        height:'60px',
        display:'flex',
        alignItems:'center',
        padding:'0px 10px',
        color:'#343a40',
        fontFamily: tokens.fontFamilyBase,
        borderBottom:'1px solid #343a40'
    },
    list:{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display:'flex',
        alignItems:'center',
    },
    listiteams:{        
        float: 'left'
    },
    listiteamsinner:{
        margin: '0px 16px'
    },
    partation:{
        height:'30px',
        border:'1px solid #343a40'
    }
})

const Navigationbar = () => {

    const classes = useStyles();

  return (
    <section className={classes.container}>
        <ul className={classes.list}>
        <li className={classes.listiteams}><IotFilled className={mergeClasses(classes.icon,classes.listiteamsinner)}/></li>
        <li className={classes.listiteams}><div className={mergeClasses(classes.partation,classes.listiteamsinner)}></div></li> 
        <li className={classes.listiteams}><h1 className={mergeClasses(classes.listiteamsinner)}>Europian Gap Pipe</h1></li>     
      </ul>
    </section>
  )
}

export default Navigationbar
