import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { FormControl, MenuItem, Select, Box, InputLabel, TextareaAutosize } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { makeStyles } from '@mui/styles'
import { experienceFormData } from '../../../utils/Data/FormUIData'

const useStyles = makeStyles({
  dropdownContainer: {
    width: 200,
  },
  select: {
    height: 50,
  },
  textArea: {
    width: 400,
    height: 400,
  },
})

export default function ExperienceForm() {
  const classes = useStyles()
  return (
    <Grid rowGap={3} container spacing={3}>
      {experienceFormData.map((info) =>
        info.type === 'field' ? (
          <Grid key={info.id} item>
            <TextField fullWidth name={info.name} label={info.label} variant="outlined" />
          </Grid>
        ) : (
          <Grid key={info.id} item>
            <FormControl size="medium" variant="outlined" className={classes.dropdownContainer}>
              <InputLabel>{info.label}</InputLabel>
              <Select
                className={classes.select}
                id={info.id.toString()}
                label={info.label}
                size="small"
                key={info.id}
              >
                {info.options?.map((option) => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ),
      )}
      <Grid item />
    </Grid>
  )
}
