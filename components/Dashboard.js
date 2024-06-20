import React, { useState } from 'react';
import { Container, Box, Card, CardContent, Typography, Grid, Badge, Divider, Button, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -15,
    top: -10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const metricsAll = [
  { title: 'Total Students', value: 500, trend: 25, isPositive: true },
  { title: 'Questions Processed', value: 10000, trend: 250, isPositive: true },
  { title: 'Silly Mistake', value: 83.5, trend: -4.7, isPositive: false },
  { title: 'Time Management', value: 73.9, trend: 2.2, isPositive: true },
  { title: 'Concentration', value: 81.2, trend: -3.2, isPositive: false },
];

const metricsBatch = [
  { title: 'Total Students', value: 300, trend: 15, isPositive: true },
  { title: 'Questions Processed', value: 7000, trend: 200, isPositive: true },
  { title: 'Silly Mistake', value: 60.2, trend: -3.1, isPositive: false },
  { title: 'Time Management', value: 68.4, trend: 1.9, isPositive: true },
  { title: 'Concentration', value: 75.3, trend: -2.5, isPositive: false },
];

const DashboardCard = () => {
  const [view, setView] = useState('ALL');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const metrics = view === 'ALL' ? metricsAll : metricsBatch;

  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card sx={{ width: '100%', p: 2 }}>
          <CardContent>
            <Typography component="h1" variant="h4">
              Dashboard
            </Typography>
            <Typography component="h2" variant="subtitle1" sx={{ mb: 2 }}>
              Consolidation of all data
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Box>
                <Button variant={view === 'ALL' ? 'contained' : 'outlined'} onClick={() => handleViewChange('ALL')}>
                  ALL
                </Button>
                <Button variant={view === 'BATCH' ? 'contained' : 'outlined'} onClick={() => handleViewChange('BATCH')} sx={{ ml: 1 }}>
                  BATCH
                </Button>
              </Box>
              {view === 'BATCH' && (
                <Button variant="outlined" onClick={handleFilterClick}>
                  Filter
                </Button>
              )}
              <Menu anchorEl={anchorEl} open={open} onClose={handleFilterClose}>
                {['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B', '5A', '5B'].map((option) => (
                  <MenuItem key={option} onClick={handleFilterClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              {metrics.map((metric, index) => (
                <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h6">{metric.title}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h5">{metric.value}</Typography>
                      <StyledBadge
                        badgeContent={`${metric.trend > 0 ? '+' : ''}${metric.trend}`}
                        color={metric.isPositive ? 'primary' : 'error'}
                      />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default DashboardCard;
