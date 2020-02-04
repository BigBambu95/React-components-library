import * as React from 'react';
import Table from '../table';
import TableHead from '../table-head';
import TableRow from '../table-row';
import TableCell from '../table-cell';
import TableBody from '../table-body';

export interface TableDataProps {
    name: string;
    calories: string;
    fat: string;
    carbs: string;
    protein: string;
}

function createData(name: string, calories: number, fat: number, carbs: number, protein: number): object {
    return { name, calories, fat, carbs, protein };
  }

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TablePage = (): JSX.Element => {
    return(
        <section className="table-page">
            <div>
                <h4>Простая таблица</h4>
                <Table className="custom-class">
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
                            data.map((row: TableDataProps, idx: number): JSX.Element => {
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
                            data.map((row: TableDataProps, idx: number) => {
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
        </section>
    )
}

export default TablePage;