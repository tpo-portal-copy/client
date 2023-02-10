import * as React from 'react'
import { Box, Container } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Cluster ID', width: 100, sortable: false },
  { field: 'startingCtc', headerName: 'Starting CTC', width: 130, sortable: false },
  { field: 'endingCtc', headerName: 'Ending CTC', width: 130, sortable: false },
]

const rows = [
  { id: 1, endingCtc: '4.5 Lakhs', startingCtc: '0' },
  { id: 2, endingCtc: '10 Lakhs', startingCtc: '5 Lakhs' },
  { id: 3, endingCtc: '18 Lakhs', startingCtc: '12 Lakhs' },
  { id: 4, endingCtc: '26 Lakhs', startingCtc: '18 Lakhs' },
  { id: 5, endingCtc: '35 Lakhs', startingCtc: '26 Lakhs' },
  { id: 6, endingCtc: null, startingCtc: '36 Lakhs' },
]

export default function DataGridDemo() {
  return (
    <Container sx={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5]}
        sx={{ width: '450px' }}
        checkboxSelection
        disableSelectionOnClick
        disableColumnSelector
        disableColumnFilter
        disableColumnMenu
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Container>
  )
}
