import React from 'react';
import { CustomTable } from '../../components';
import { makeStyles } from '@material-ui/styles';
import {GlobalContext} from '../../context/GlobalState'

const useStyles = makeStyles({
    wrapper: {
        width: '100vw',
        height: '100vh',
        margin: '0 auto',
        backgroundColor: '#eaeaea'
    },
    heading: {
        padding: '5vh 0',
        width: '80%',
        margin: '0 auto'
    },
    tableContainer: {
        width: '80%',
        margin: '0 auto'
    }
})

function Dashboard() {
    const classes = useStyles();
    const context = React.useContext(GlobalContext);

    React.useEffect(() => {
        console.log(context.got.rows);
    }, [context])

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>
                Dashboard table
            </h1>
            <div className={classes.tableContainer}>
                {/* <CustomTable cells={cells} rows={rows} checkboxSelection  /> */}
            </div>
            <button onClick={context.getGotData.bind(
                    this,
                    'ssss'
                  )}>test</button>
        </div>
    )
}

export default Dashboard;