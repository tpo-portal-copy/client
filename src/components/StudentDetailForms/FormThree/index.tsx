import {
  TextField,
  Box,
  Container,
  Alert,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { collegeInfo } from '../../../utils/Data/FormUIData'

const useStyles = makeStyles({
  info: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,auto)',
    columnGap: '1.5rem',
    rowGap: '1rem',
  },
  field: {
    width: '95%',
    minWidth: '400px',
  },
  select: {
    width: '95%',
    minWidth: '400px',
  },
})

export default function FormTwo() {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h4" gutterBottom>
        College
      </Typography>
      <Box className={classes.info}>
        {collegeInfo.map((info) => (
          <Stack key={info.id} spacing={2}>
            {info.type === 'field' ? (
              <TextField
                className={classes.field}
                key={info.id}
                label={info.label}
                id="outlined-size-small"
                size="small"
              />
            ) : (
              <Box sx={{ width: '95%', minWidth: '400px' }} key={info.id}>
                <FormControl fullWidth>
                  <InputLabel component={Typography} id={info.id}>
                    {info.label}
                  </InputLabel>
                  <Select
                    className={classes.select}
                    id={info.id}
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
              </Box>
            )}

            {/* <Alert severity="error">Error</Alert> */}
          </Stack>
        ))}
      </Box>
    </>
  )
}
