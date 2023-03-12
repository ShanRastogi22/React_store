import React from 'react';
import Nav from '../../component/Nav';
import Cards from '../../component/Cards';
import { FlexBox, StyledCard } from '../../component/style.jsx'
import {Grid} from '@mui/material';
import {datas} from './Data';

const Home = () => {
  return (
    <div>
      <Nav />
      <Grid container sx={{justifyContent: 'space-around;'}}>
        {
          datas &&
          datas.map((data, index) => {
            return (
              <div item key={index} sm={12} md={4}>
                <Cards data={data} />
              </div>
            )
          })
        }
      </Grid>
    </div>
  );
}

export default Home;
