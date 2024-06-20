"use client"
import { useState } from 'react';
import { Card, CardContent, Typography, Divider, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import Layout from '../layout';

const initialSuggestions = [
  { heading: 'Suggestion 1', content: 'This is the content for suggestion 1.' },
  { heading: 'Suggestion 2', content: 'This is the content for suggestion 2.' },
  { heading: 'Suggestion 3', content: 'This is the content for suggestion 3.' },
];

export default function SuggestionsPage() {
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
    <Layout>
      <Card style={{ margin: '3rem', padding: '1rem' }}>
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
    </Layout>
  );
}
