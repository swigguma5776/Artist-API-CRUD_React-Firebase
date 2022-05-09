import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel, GridValueGetterParams } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText, 
    DialogTitle } from '@mui/material';
import { ArtistForm } from '../ArtistForm';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'first_name',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'last_name',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'nationality',
    headerName: 'Nationality',
    width: 150,
    editable: true,
  },
  {
    field: 'art_period',
    headerName: 'Art Period',
    width: 150,
    editable: true,
  },
  {
    field: 'style',
    headerName: 'Style',
    width: 150,
    editable: true,
  },
  {
    field: 'most_famous_work',
    headerName: 'Most Famous Work',
    width: 150,
    editable: true,
  },
  {
    field: 'scandals',
    headerName: 'Scandals',
    width: 200,
    editable: true,
  },
  
];

interface gridData{
    data:{
        id?: string; 
    }
}


export const DataTable = () => {
    let { artistData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    console.log(gridData) // a list of id's from checked rows
    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Artist In Inventory</h2>
        <DataGrid
          rows={artistData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={newSelectionModel => setData(newSelectionModel)}
          {...artistData}
        />

        <Button variant='contained' onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="warning" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update Your Artist</DialogTitle>
          <DialogContent>
            <DialogContentText>Update Artist: {gridData[1]} {gridData[2]}</DialogContentText>
              <ArtistForm id={`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
      </div>
    );
  }