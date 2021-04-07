import React from 'react';
import { CustomTable } from '../../components'
import { makeStyles } from '@material-ui/styles'

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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const cells = [
    { name: 'Dessert (100g serving)'},
    { name: 'Calories' },
    { name: 'Fat' },
    { name: 'Carbs' },
    { name: 'Protein' }
]

function Dashboard() {
    const classes = useStyles();


    return (
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>
                Dashboard table
            </h1>
            <div className={classes.tableContainer}>
                <CustomTable cells={cells} rows={rows} checkboxSelection  />
            </div>
        </div>
    )
}

export default Dashboard;