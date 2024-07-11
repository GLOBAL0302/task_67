import { Box, Button, Grid, Typography } from '@mui/material';
import CONSTANTS from '../../Constants.ts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store.ts';
import { addSymbol, makeResult } from '../../Redux/ReduxSlices/CalculatorSlice.ts';

const Calculator = () => {
  const resultValue = useSelector<RootState>(state => state.calculator.value);
  const dispatch = useDispatch();

  return (
      <Box maxWidth={450} border={3}>
        <Box
          mb={2}
          p={5}
          border={5}
          component={'div'}>
          <Typography variant="h4" component='h5' height={2}>{resultValue? resultValue.join(""): ""}</Typography>
        </Box>
        <Grid container
              padding={2}
              component={"div"}
              rowGap={2}
              justifyContent={'space-between'}>
          {CONSTANTS.map((item)=>(
            <Grid
              key={item}
              item
              xs={parseInt(item) || item =="0"?3: 2} sm={parseInt(item) || item =="0"?3: 2} md={parseInt(item) || item =="0"?3: 2}>
              <Button
                onClick={()=>dispatch(addSymbol(item))}
                fullWidth
                color= {item === "C"? "error":"success"}
                variant={'contained'}>
                <Typography variant="h5" component="p">
                  <strong>{item}</strong>
                </Typography>
              </Button>
            </Grid>
          ))}

          <Grid
            item
            xs={3} sm={3} md={3}>
            <Button
              color="primary"
              onClick={()=>dispatch(makeResult())}
              fullWidth
              variant={'contained'}>
              <Typography variant="h5" component="h5">
                <strong>=</strong>
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
  );
};

export default Calculator;