import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { CustomTable } from '../../components';
import { GlobalContext } from '../../context/GlobalState'
import { GET_GRID_STATE } from '../../context/constants';

const useStyles = makeStyles({
    wrapper: {
        width: '100vw',
        minHeight: '100vh',
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

    console.log('context', context)

    React.useEffect(() => {
        context.getGridData({
            action: GET_GRID_STATE,
            gridName: 'yuy',
            stk: 'sdfsdfsdf'
        })
    }, [])

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>
                Dashboard table
            </h1>
            <div className={classes.tableContainer}>
                <CustomTable rows={context.yuy ? context.yuy.rows : []} />
            </div>
        </div>
    )
}

export default Dashboard;