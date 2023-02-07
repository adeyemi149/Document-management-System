import React, { FormEvent, FormEventHandler } from 'react'
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import DirectionsIcon from '@mui/icons-material/Directions';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { SearchFieldProps } from '../models/types';

const SearchField: React.FC<SearchFieldProps> = ({setSearchTerm}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

	return (
	  <Container>
        <Paper onSubmit={handleSubmit}
          component="form"
           sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
      
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Documents"
          inputProps={{ 'aria-label': 'search' }}
          onChange= {e => {setSearchTerm(e.target.value)}}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </Paper>
		</Container>
  )
}

export default SearchField

const Container = styled.div`
	margin-bottom: 20px;
  z-index: -1;
`