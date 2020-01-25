import React from 'react';
import Table from '../table';
import TableHead from '../table-head';
import TableRow from '../table-row';
import TableCell from '../table-cell';
import TableBody from '../table-body';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TablePage = () => {
    return(
        <section className="table-page">
            <div>
                <h4>Простая таблица</h4>
                <Table className={2}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat (g)</TableCell>
                            <TableCell align="right">Carbs (g)</TableCell>
                            <TableCell align="right">Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((row, idx) => {
                                return(
                                    <TableRow key={idx}>
                                        <TableCell tag="th">{row.name}</TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
            <div>
                <h4>Плотная компоновка таблицы</h4>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat (g)</TableCell>
                            <TableCell align="right">Carbs (g)</TableCell>
                            <TableCell align="right">Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((row) => {
                                return(
                                    <TableRow key={row.name}>
                                        <TableCell tag="th">{row.name}</TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}

export default TablePage;