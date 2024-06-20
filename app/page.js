"use client"
import Layout from './layout';
import { useState } from 'react';
import ProtectedRoute from '../contexts/ProtectedRoute';
import DashboardCard from '../components/Dashboard';
import { Card,Container, CardContent, Typography, Divider, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';

const initialSuggestions = [
  { heading: 'Suggestion 1', content: 'This is the content for suggestion 1.' },
  { heading: 'Suggestion 2', content: 'This is the content for suggestion 2.' },
  { heading: 'Suggestion 3', content: 'This is the content for suggestion 3.' },
];

export default function HomePage() {
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const [open, setOpen] = useState(false);
  const [currentSuggestion, setCurrentSuggestion] = useState(null);

  const handleClickOpen = (suggestion) => {
    setCurrentSuggestion(suggestion);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentSuggestion(null);
  };
  return (
    <ProtectedRoute>
    <Layout>
      <DashboardCard />
      <Container>
      <Card style={{ marginTop: '2rem',marginBottom: '2rem', padding: '1rem' }}>
        <CardContent>
          <Typography variant="h5">AI Suggestions</Typography>
          <Divider style={{ margin: '1rem 0' }} />
          <Card style={{ backgroundColor: '#f0f0f0', padding: '1rem', margin: '1rem 0' }}>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {suggestions.map((suggestion, index) => (
                <Card key={index} style={{ margin: '1rem 0', padding: '1rem' }}>
                  <Typography variant="h6">{suggestion.heading}</Typography>
                  <Typography variant="body2" style={{ marginBottom: '1rem' }}>{suggestion.content}</Typography>
                  <Button variant="outlined" onClick={() => handleClickOpen(suggestion)}>Learn More</Button>
                </Card>
              ))}
            </div>
          </Card>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentSuggestion?.heading}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{currentSuggestion?.content}</Typography>
        </DialogContent>
      </Dialog>
      </Container>
    </Layout>
    </ProtectedRoute>
  );
}
