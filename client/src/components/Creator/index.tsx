import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Select, { SelectChangeEvent } from '@mui/material/Select';



import "./Creator.scss"
import Button from '../Button';



const Creator = () => {


  return (

    <Box className='creator'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > 
      <h2 className='creator__title'>Character Creator</h2>
      <TextField id="Name" label="Name" variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="character-race">Race</InputLabel>
        <Select
          labelId="character-race"
          id="character-race"
          value={"Race"}
          label="race"
          // onChange={handleChange}
        >
          <MenuItem value={""}>Human</MenuItem>
          <MenuItem value={""}>Dwarf</MenuItem>
          <MenuItem value={""}>Halfling</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="character-class">Class</InputLabel>
        <Select
          labelId="character-class"
          id="character-class"
          value={"Class"}
          label="class"
          // onChange={handleChange}
        >
          <MenuItem value={""}>Barbarian</MenuItem>
          <MenuItem value={""}>Bard</MenuItem>
          <MenuItem value={""}>Cleric</MenuItem>
          <MenuItem value={""}>Druid</MenuItem>
          <MenuItem value={""}>Fighter</MenuItem>
          <MenuItem value={""}>Monk</MenuItem>
          <MenuItem value={""}>Paladin</MenuItem>
          <MenuItem value={""}>Ranger</MenuItem>
          <MenuItem value={""}>Rogue</MenuItem>
          <MenuItem value={""}>Sorcerer</MenuItem>
          <MenuItem value={""}>Warlock</MenuItem>
          <MenuItem value={""}>Wizard</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="male"
          name="radio-buttons-group"
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <Button text={"Create Character"} />
      <TextField
        label="Character Weight"
        id="character-weight"
        sx={{ m: 1, width: '25ch' }}
        InputProps={{
        startAdornment: <InputAdornment position="start">lb</InputAdornment>,
        }}
      />
      <FormControl fullWidth>
        <InputLabel id="character-alignment">Alignment</InputLabel>
        <Select
          labelId="character-alignment"
          id="character-alignment"
          value={"alignment"}
          label="alignment"
          // onChange={handleChange}
        >
          <MenuItem value={""}>Lawful Good</MenuItem>
          <MenuItem value={""}>Lawful Neutral</MenuItem>
          <MenuItem value={""}>Lawful Evil</MenuItem>
          <MenuItem value={""}>Neutral Good</MenuItem>
          <MenuItem value={""}>Neutral</MenuItem>
          <MenuItem value={""}>Neutral Evil</MenuItem>
          <MenuItem value={""}>Chaotic Good</MenuItem>
          <MenuItem value={""}>Chaotic Neutral</MenuItem>
          <MenuItem value={""}>Chaotic Evil</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Creator