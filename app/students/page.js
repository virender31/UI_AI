"use client"
import { useState } from 'react';
import { TextField, MenuItem, Card, CardContent, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Layout from '../layout';

const studentsData = [
  { id: 1, name: 'John Doe', age: 20, grade: 'A' },
  { id: 2, name: 'Jane Smith', age: 22, grade: 'B' },
  { id: 3, name: 'Michael Johnson', age: 21, grade: 'A' },
  { id: 4, name: 'Emily Davis', age: 23, grade: 'C' },
  { id: 5, name: 'David Wilson', age: 22, grade: 'B' },
  // Add more student data as needed
];

export default function StudentsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Layout>
      <Card style={{ margin: '2rem', padding: '1rem' }}>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Typography variant="h5">Students</Typography>
              <Typography variant="subtitle1">All students data</Typography>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <TextField
                label="Search"
                variant="outlined"
                value={search}
                onChange={handleSearchChange}
              />
              <TextField
                select
                label="Filter"
                value={filter}
                onChange={handleFilterChange}
                variant="outlined"
                style={{ width: '150px' }} // Fixed width for the filter TextField
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="A">Grade A</MenuItem>
                <MenuItem value="B">Grade B</MenuItem>
                <MenuItem value="C">Grade C</MenuItem>
              </TextField>
            </div>
          </div>
          <Divider style={{ margin: '1rem 0' }} />
          <TableContainer component={Paper} style={{ maxHeight: '400px', backgroundColor: 'black' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: 'white' }}>ID</TableCell>
                  <TableCell style={{ color: 'white' }}>Name</TableCell>
                  <TableCell style={{ color: 'white' }}>Age</TableCell>
                  <TableCell style={{ color: 'white' }}>Grade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentsData
                  .filter(student => 
                    student.name.toLowerCase().includes(search.toLowerCase()) &&
                    (filter === '' || student.grade === filter)
                  )
                  .map(student => (
                    <TableRow key={student.id}>
                      <TableCell style={{ color: 'white' }}>{student.id}</TableCell>
                      <TableCell style={{ color: 'white' }}>{student.name}</TableCell>
                      <TableCell style={{ color: 'white' }}>{student.age}</TableCell>
                      <TableCell style={{ color: 'white' }}>{student.grade}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Layout>
  );
}
