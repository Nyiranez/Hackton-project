// import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export default function BasicTable() {
  const [data, setData] = useState([

  ]); ``

  const fetchedData=(()=>{
  axios.get("https://api.restful-api.dev/objects").then((res)=>{
    setData(res.data);
  })
  })
  useEffect(()=>{
    fetchedData();
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Capacity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Screen Size</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Generation</TableCell>
            <TableCell align="right">Strap Colour</TableCell>
            <TableCell align="right">Case Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{(item.data) ? item.data.color : "None"}</TableCell>
              <TableCell align="right">{(item.data) ? item.data.capacity : "None"}</TableCell>
              <TableCell align="right">{(item.data) ? item.data.price : "None"}</TableCell>
              <TableCell align="right">{(item.data) ? item.data.Screen_size : "None"}</TableCell>
              <TableCell align="right">{(item.data) ? item.data.Generation : "None"}</TableCell>
              <TableCell align="right">{(item.data) ? item.data.Description : "None"}</TableCell>
              <TableCell align="right">{(item.data) ? item.data.Strap_Colour : "None"}</TableCell>
              <TableCell align="right">{(item.data) ? item.data.Case_Size : "None"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

