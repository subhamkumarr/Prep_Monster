import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface CompaniesProps {
  darkMode: boolean;
}

const companies = [
  'Google',
  'Amazon',
  'Netflix',
  'Meta',
  'Microsoft',
  'Apple',
  'Twitter',
  'LinkedIn',
  'Uber',
  'Airbnb',
  'Adobe',
  'Salesforce'
];

const Companies: React.FC<CompaniesProps> = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredCompanies = companies.filter(company =>
    company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCompanyClick = (company: string) => {
    navigate(`/companies/${company.toLowerCase()}`);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ 
          mb: 4, 
          textAlign: 'center',
          color: darkMode ? '#ffffff' : '#333333',
          fontWeight: 'bold'
        }}
      >
        Top Tech Companies
      </Typography>

      <Box sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search companies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: darkMode ? '#bdbdbd' : '#666666' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              bgcolor: darkMode ? '#262626' : '#ffffff',
              '& fieldset': {
                borderColor: darkMode ? '#424242' : '#e0e0e0',
              },
              '&:hover fieldset': {
                borderColor: darkMode ? '#616161' : '#bdbdbd',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00aaff',
              },
            },
            '& .MuiInputBase-input': {
              color: darkMode ? '#ffffff' : '#333333',
            },
          }}
        />
      </Box>
      
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 3
      }}>
        {filteredCompanies.map((company) => (
          <motion.div
            key={company}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            layout
          >
            <Card 
              onClick={() => handleCompanyClick(company)}
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: darkMode ? '#262626' : '#ffffff',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 6
                }
              }}
            >
              <CardContent>
                <Typography 
                  variant="h5" 
                  component="div"
                  sx={{ 
                    color: darkMode ? '#ffffff' : '#333333',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}
                >
                  {company}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>

      {filteredCompanies.length === 0 && (
        <Box sx={{ 
          textAlign: 'center', 
          mt: 4,
          color: darkMode ? '#bdbdbd' : '#666666'
        }}>
          <Typography variant="h6">
            No companies found matching "{searchTerm}"
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Companies; 