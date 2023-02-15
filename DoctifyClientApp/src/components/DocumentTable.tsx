import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector } from '../store/hook';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import useStyles from '../styles/styles';
import { DocumentTableProps } from '../models/types';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { dateConvert, timeConvert } from "../helpers/helpers"
import useHttp from '../CustomHooks/useHttp';
import DocumentViewer from '../Pages/DocumentViewer';
import { Link, useNavigate } from 'react-router-dom';
import { base64toBlob } from '../helpers/helpers';
import { useRef } from 'react';
import { useAppDispatch } from '../store/hook';
import { addFiles } from '../features/docsSlice';


const DocumentTable: React.FC<DocumentTableProps> = ({ className, searchTerm }) => {
  const [loading, data, removeData] = useHttp("https://localhost:7214/api/Docs");
  const dispatch = useAppDispatch()
  const { classes, cx } = useStyles({})
  const navigate = useNavigate()

  const deleteFile = (id: number) => {
    const userPrompt = confirm("Are you sure you want to Delete File");
    if (userPrompt) {
      removeData(id);
    }
  }

  const sendBase64 = (base64: string) => {
    const blob = base64toBlob(base64);
    const address = URL.createObjectURL(blob);
    dispatch(addFiles(address))
    const url = '/documentViewer'
    window.open(url, '_blank')
    navigate(url)
  }

  console.log(data)

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" className={cx(classes.table, className)} >
        <TableHead>
          <TableRow>
            <TableCell>File</TableCell>
            <TableCell align="right">Date(Last Modified)</TableCell>
            <TableCell align="right">Time(Last Modified)</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={cx(classes.loader, className)}>
          <TableRow>
            {loading &&
              <Box className={cx(classes.loader, className)}>
                <LinearProgress />
              </Box>}
          </TableRow>
          {
            data.filter((file) => {
              if (searchTerm == "") {
                return file;
              } else if (file.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                return file;
              }
            }
            ).map((file) => (
              <>
                <TableRow
                  key={file.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">

                    <FolderIcon className={cx(classes.icon, className)} />
                    {"  "}
                    {file.description}
                  </TableCell>
                  <TableCell align="right">{dateConvert(file.timeStamp)}</TableCell>
                  <TableCell align="right">{timeConvert(file.timeStamp)}</TableCell>
                  <TableCell align="right">
                    <span title='Delete'>
                      <DeleteIcon className={cx(classes.hover, className)} color='disabled'
                        onClick={() => deleteFile(file.id)} fontSize='small' />
                    </span>
                    <span title='Open With'>
                      <Link to="/documentViewer" target="_blank">
                        <OpenWithIcon onClick={() => sendBase64(file.binaryString)} className={cx(classes.hover, className)}
                          color='disabled' fontSize='small' />
                      </Link>
                    </span>
                  </TableCell>
                </TableRow>
              </>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DocumentTable;




