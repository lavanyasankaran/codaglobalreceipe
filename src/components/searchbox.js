/*import React from 'react';

const SearchBox = ({  searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search receipe'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const SearchBox = ({  searchChange }) => {
  const classes = useStyles();

  return (
    <div>
      
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="SearchField"
        onChange={searchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="center">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      
    </div>
  );
}
export default SearchBox;