import {
  TextField,
  Box,
  Alert,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { basicInfo } from '../../../utils/Data/FormUIData'

const useStyles = makeStyles({
  info: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,auto)',
    columnGap: '1.5rem',
    rowGap: '1rem',
  },
})

export default function FormOne() {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Basic Info
      </Typography>
      <Box className={classes.info}>
        {basicInfo.map((info) => (
          <Stack key={info.id} spacing={2}>
            {info.type === 'field' ? (
              <TextField key={info.id} label={info.label} variant="standard" size="small" />
            ) : (
              <Box sx={{ width: '95%', minWidth: '400px' }} key={info.id}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>{info.label}</InputLabel>
                  <Select id={info.id.toString()} label={info.label} size="small" key={info.id}>
                    {info.options?.map((option) => (
                      <MenuItem key={option.id} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}

            {/* <Alert severity="error">Error</Alert> */}
          </Stack>
        ))}
      </Box>
    </>
  )
}
