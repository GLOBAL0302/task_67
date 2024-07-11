import { Box, Button, Grid, Typography } from '@mui/material';
import CONSTANTS from '../../Constants.ts';

const Calculator = () => {
  return (
      <Box width={450} border={3}>
        <Box
          mb={2}
          p={5}
          border={5}
          component={'div'}>sdsd
        </Box>
        <Grid container  component={"div"} rowGap={2}  justifyContent={'space-between'} alignItems={'center'}>
          {CONSTANTS.map((item)=>(
            <Grid
              item xs={parseInt(item)?3: 2} sm={parseInt(item)?3: 2} md={parseInt(item)?3: 2}>
              <Button
                fullWidth
                variant={'contained'}>
                <Typography variant="h5" component="h5">
                  <strong>{item}</strong>
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
  );
};

export default Calculator;