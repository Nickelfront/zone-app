import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Search = (props: any) => {
  
    return <div>
        <TextField
            className="bg-gray-200 rounded-full" 
            placeholder="Search for your favorite food"
            InputProps={{
                style: {
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingRight: 50,
                    paddingLeft: 50,
                    width: 500
                },
                disableUnderline: true,
                startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
            }}
        />
    </div>
 }

 export default Search;