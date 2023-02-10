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
  Card,
  CardHeader,
  CardContent,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { educationInfo } from '../../../utils/Data/FormUIData'

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
})

export default function FormTwo() {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Box className={classes.info}>
        {educationInfo.map((info) => (
          <Stack key={info.id} spacing={2}>
            <TextField
              className={classes.field}
              key={info.id}
              label={info.label}
              id="outlined-size-small"
              size="small"
            />

            {/* <Alert severity="error">Error</Alert> */}
          </Stack>
        ))}
      </Box>
    </>
  )
}
