import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Box,
  Grid,
  AppBar,
  Toolbar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Link,
  IconButton,
  LinearProgress,
  Switch,
  FormControlLabel,
  CircularProgress,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Card,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import type { GridProps } from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import RefreshIcon from '@mui/icons-material/Refresh';
import TuneIcon from '@mui/icons-material/Tune';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { motion } from 'framer-motion';

import { patterns as initialPatterns, Pattern, Question } from './data/patterns';
import PatternCard from './components/PatternCard';
import Author from './pages/Author';
import Companies from './pages/Companies';
import AmazonQuestions from './pages/AmazonQuestions';

const LOCAL_STORAGE_KEY = 'dsaPatternsProgress';
const DARK_MODE_STORAGE_KEY = 'darkModePreference';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem(DARK_MODE_STORAGE_KEY);
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [patterns, setPatterns] = useState<Pattern[]>(() => {
    const savedPatterns = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedPatterns ? JSON.parse(savedPatterns) : initialPatterns;
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [patternFilter, setPatternFilter] = useState<string>('all');
  const [patternSearchTerm, setPatternSearchTerm] = useState('');
  const [showStarredOnly, setShowStarredOnly] = useState(false);
  const [starredPatterns, setStarredPatterns] = useState<Set<string>>(new Set());
  const [overallProgress, setOverallProgress] = useState(0);
  const [difficultyProgress, setDifficultyProgress] = useState({
    easy: { completed: 0, total: 0, percentage: 0 },
    medium: { completed: 0, total: 0, percentage: 0 },
    hard: { completed: 0, total: 0, percentage: 0 },
  });
  const [openResetDialog, setOpenResetDialog] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(patterns));
    localStorage.setItem(DARK_MODE_STORAGE_KEY, JSON.stringify(darkMode));
    let totalQuestions = 0;
    let completedQuestions = 0;
    let easyCompleted = 0, easyTotal = 0;
    let mediumCompleted = 0, mediumTotal = 0;
    let hardCompleted = 0, hardTotal = 0;

    patterns.forEach(pattern => {
      totalQuestions += pattern.questions.length;
      completedQuestions += pattern.questions.filter(q => q.status === 'Completed').length;

      pattern.questions.forEach(question => {
        if (question.difficulty === 'Easy') {
          easyTotal++;
          if (question.status === 'Completed') easyCompleted++;
        } else if (question.difficulty === 'Medium') {
          mediumTotal++;
          if (question.status === 'Completed') mediumCompleted++;
        } else if (question.difficulty === 'Hard') {
          hardTotal++;
          if (question.status === 'Completed') hardCompleted++;
        }
      });
    });

    setOverallProgress(totalQuestions === 0 ? 0 : (completedQuestions / totalQuestions) * 100);
    setDifficultyProgress({
      easy: { completed: easyCompleted, total: easyTotal, percentage: easyTotal === 0 ? 0 : (easyCompleted / easyTotal) * 100 },
      medium: { completed: mediumCompleted, total: mediumTotal, percentage: mediumTotal === 0 ? 0 : (mediumCompleted / mediumTotal) * 100 },
      hard: { completed: hardCompleted, total: hardTotal, percentage: hardTotal === 0 ? 0 : (hardCompleted / hardTotal) * 100 },
    });
  }, [patterns, darkMode]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleDifficultyChange = (event: SelectChangeEvent) => {
    setDifficultyFilter(event.target.value);
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatusFilter(event.target.value);
  };

  const handlePatternSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPatternSearchTerm(event.target.value);
  };

  const handlePatternChange = (event: SelectChangeEvent) => {
    setPatternFilter(event.target.value);
  };

  const toggleStarredOnly = () => {
    setShowStarredOnly(prev => !prev);
  };

  const toggleStarPattern = (patternName: string) => {
    setStarredPatterns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(patternName)) {
        newSet.delete(patternName);
      } else {
        newSet.add(patternName);
      }
      return newSet;
    });
  };

  const handleQuestionStatusChange = React.useCallback((patternName: string, questionName: string, newStatus: Question['status']) => {
    setPatterns(prevPatterns => {
      return prevPatterns.map(pattern => {
        if (pattern.name === patternName) {
          const updatedQuestions = pattern.questions.map(question => {
            if (question.name === questionName) {
              return { ...question, status: newStatus };
            }
            return question;
          });
          
          // Calculate new progress
          const completedQuestions = updatedQuestions.filter(q => q.status === 'Completed').length;
          return { 
            ...pattern, 
            questions: updatedQuestions,
            progress: {
              completed: completedQuestions,
              total: updatedQuestions.length
            }
          };
        }
        return pattern;
      });
    });
  }, []);

  const toggleStarQuestion = (patternName: string, questionName: string) => {
    setPatterns(prevPatterns => {
      return prevPatterns.map(pattern => {
        if (pattern.name === patternName) {
          const updatedQuestions = pattern.questions.map(question => {
            if (question.name === questionName) {
              return { ...question, starred: !question.starred };
            }
            return question;
          });
          return { ...pattern, questions: updatedQuestions };
        }
        return pattern;
      });
    });
  };

  const filteredPatterns = patterns.filter(pattern => {
    const matchesPattern = patternFilter === 'all' || pattern.name === patternFilter;

    const questionsMatchFilters = pattern.questions.filter(question => {
      const matchesSearch = searchTerm === '' || 
        question.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pattern.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = difficultyFilter === 'all' || question.difficulty === difficultyFilter;
      const matchesStatus = statusFilter === 'all' || question.status === statusFilter;
      const matchesStarred = !showStarredOnly || question.starred;

      return matchesSearch && matchesDifficulty && matchesStatus && matchesStarred;
    });

    return matchesPattern && questionsMatchFilters.length > 0;
  }).map(pattern => {
    const questionsMatchFilters = pattern.questions.filter(question => {
      const matchesSearch = searchTerm === '' || 
        question.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pattern.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = difficultyFilter === 'all' || question.difficulty === difficultyFilter;
      const matchesStatus = statusFilter === 'all' || question.status === statusFilter;
      const matchesStarred = !showStarredOnly || question.starred;
      return matchesSearch && matchesDifficulty && matchesStatus && matchesStarred;
    });
    return { ...pattern, questions: questionsMatchFilters };
  });

  const memoizedToggleStarQuestion = React.useCallback((patternName: string, questionName: string) => {
    setPatterns(prevPatterns => {
      return prevPatterns.map(pattern => {
        if (pattern.name === patternName) {
          const updatedQuestions = pattern.questions.map(question => {
            if (question.name === questionName) {
              return { ...question, starred: !question.starred };
            }
            return question;
          });
          return { ...pattern, questions: updatedQuestions };
        }
        return pattern;
      });
    });
  }, []);

  const handleOpenResetDialog = () => {
    setOpenResetDialog(true);
  };

  const handleCloseResetDialog = () => {
    setOpenResetDialog(false);
  };

  const handleConfirmReset = () => {
    setSearchTerm('');
    setDifficultyFilter('all');
    setStatusFilter('all');
    setPatternFilter('all');
    setShowStarredOnly(false);
    setStarredPatterns(new Set());

    const resetPatterns = initialPatterns.map(pattern => ({
      ...pattern,
      questions: pattern.questions.map(question => ({
        ...question,
        status: 'Not Started' as Question['status'],
        starred: false,
      })),
      progress: { completed: 0, total: pattern.questions.length }
    }));
    setPatterns(resetPatterns);

    handleCloseResetDialog();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredPatternOptions = initialPatterns.filter(pattern => 
    pattern.name.toLowerCase().includes(patternSearchTerm.toLowerCase())
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Router>
      <Box sx={{ 
        flexGrow: 1, 
        bgcolor: darkMode ? '#1a1a1a' : '#f5f5f5', 
        minHeight: '100vh', 
        color: darkMode ? '#e0e0e0' : '#333333' 
      }}>
        <AppBar position="sticky" sx={{ bgcolor: darkMode ? '#262626' : '#ffffff', boxShadow: 3, zIndex: 1100 }}>
          <Toolbar>
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  flexGrow: 0, 
                  fontWeight: 'bold', 
                  color: darkMode ? '#ffffff' : '#333333', 
                  letterSpacing: '0.1em',
                  mr: 4,
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 0.8
                  }
                }}>
                Prep<Box component="span" sx={{ color: '#00aaff' }}>Monster</Box>
              </Typography>
            </RouterLink>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 3, gap: 3 }}>
              <Link href="/author" color="inherit" underline="none" sx={{ color: darkMode ? '#bdbdbd' : '#666666', fontWeight: 'medium', '&:hover': { color: darkMode ? '#ffffff' : '#333333' } }}>Author</Link>
              <Link href="/companies" color="inherit" underline="none" sx={{ color: darkMode ? '#bdbdbd' : '#666666', fontWeight: 'medium', '&:hover': { color: darkMode ? '#ffffff' : '#333333' } }}>Companies</Link>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            
            <motion.div
              key={darkMode ? 'dark' : 'light'}
              initial={{ opacity: 0, rotate: darkMode ? -90 : 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={toggleDarkMode}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginRight: '16px' }}
            >
              {darkMode ? (
                <DarkModeOutlinedIcon sx={{ color: '#90caf9' }} fontSize="small" />
              ) : (
                <WbSunnyOutlinedIcon sx={{ color: '#f57c00' }} fontSize="small" />
              )}
            </motion.div>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <IconButton color="inherit" href="#" target="_blank" sx={{ color: darkMode ? '#bdbdbd' : '#666666', '&:hover': { color: darkMode ? '#ffffff' : '#333333' } }}><GitHubIcon fontSize="small"/></IconButton>
              <IconButton 
                color="inherit" 
                onClick={toggleMobileMenu}
                sx={{ 
                  display: { xs: 'block', md: 'none' }, 
                  color: darkMode ? '#bdbdbd' : '#666666', 
                  '&:hover': { color: darkMode ? '#ffffff' : '#333333' } 
                }}
              >
                <MenuIcon fontSize="small"/>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Mobile Menu Drawer */}
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={handleMobileMenuClose}
          PaperProps={{
            sx: {
              bgcolor: darkMode ? '#262626' : '#ffffff',
              color: darkMode ? '#ffffff' : '#333333',
              width: 240
            }
          }}
        >
          <List>
            <ListItem button component={RouterLink} to="/author" onClick={handleMobileMenuClose}>
              <ListItemText primary="Author" />
            </ListItem>
            <Divider sx={{ bgcolor: darkMode ? '#424242' : '#e0e0e0' }} />
            <ListItem button component={RouterLink} to="/companies" onClick={handleMobileMenuClose}>
              <ListItemText primary="Companies" />
            </ListItem>
          </List>
        </Drawer>

        <Routes>
          <Route path="/author" element={<Author darkMode={darkMode} />} />
          <Route path="/companies" element={<Companies darkMode={darkMode} />} />
          <Route path="/companies/amazon" element={<AmazonQuestions darkMode={darkMode} />} />
          <Route path="/" element={
            <Container maxWidth={false} sx={{ mt: 4, mb: 4, px: { xs: 2, sm: 3, md: 4 } }}>
              <Card
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 3 },
                  bgcolor: darkMode ? '#212121' : '#ffffff',
                  borderRadius: 2,
                  boxShadow: 3,
                  mb: 4,
                  width: { xs: '91%', sm: '96%' },
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'flex-start',
                  gap: { xs: 3, md: 4 }
                }}
              >
                <Box sx={{ 
                  flexGrow: 1, 
                  width: '100%', 
                  pr: { md: 4 }
                }}>
                  <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 'bold', color: darkMode ? '#ffffff' : '#333333' }}>Filters</Typography>
                  <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, 
                    gap: { xs: 3, sm: 2 }
                  }}>
                    <Box>
                      <Typography variant="caption" sx={{ display: 'block', mb: 0.5, fontWeight: 'medium', color: darkMode ? '#ffffff' : '#333333' }}>Search</Typography>
                      <TextField
                        size="small"
                        placeholder="Search problems..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        fullWidth
                        InputProps={{ startAdornment: (<SearchIcon sx={{ color: darkMode ? '#ffffff' : '#333333', mr: 1 }} />) }}
                        sx={{ 
                          bgcolor: darkMode ? '#121212' : '#ffffff', 
                          '.MuiOutlinedInput-notchedOutline': { borderColor: darkMode ? '#424242' : '#e0e0e0' }, 
                          input: { color: darkMode ? '#ffffff' : '#333333' }, 
                          label: { color: darkMode ? '#ffffff' : '#333333' }, 
                          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: darkMode ? '#616161' : '#e0e0e0' }, 
                          '.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: darkMode ? '#00aaff' : '#333333' } 
                        }}
                        InputLabelProps={{ style: { color: darkMode ? '#ffffff' : '#333333' } }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ display: 'block', mb: 0.5, fontWeight: 'medium', color: darkMode ? '#ffffff' : '#333333' }}>Pattern</Typography>
                      <FormControl size="small" fullWidth>
                        <Select
                          value={patternFilter}
                          onChange={handlePatternChange}
                          displayEmpty
                          sx={{ 
                            bgcolor: darkMode ? '#121212' : '#ffffff', 
                            '.MuiOutlinedInput-notchedOutline': { borderColor: darkMode ? '#424242' : '#e0e0e0' }, 
                            '.MuiSelect-select': { color: darkMode ? '#ffffff' : '#333333' }, 
                            '.MuiSvgIcon-root': { color: darkMode ? '#ffffff' : '#333333' }, 
                            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: darkMode ? '#616161' : '#e0e0e0' }, 
                            '.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: darkMode ? '#00aaff' : '#333333' } 
                          }}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                maxHeight: 300,
                                bgcolor: darkMode ? '#121212' : '#ffffff',
                                color: darkMode ? '#ffffff' : '#333333',
                                '& .MuiMenuItem-root': {
                                  color: darkMode ? '#ffffff' : '#333333',
                                  '&:hover': {
                                    bgcolor: darkMode ? '#424242' : '#f5f5f5',
                                  },
                                  '&.Mui-selected': {
                                    bgcolor: darkMode ? '#424242' : '#e0e0e0',
                                  },
                                },
                              },
                            },
                          }}
                        >
                          <MenuItem value="all">All</MenuItem>
                          {filteredPatternOptions.map((pattern) => (
                            <MenuItem key={pattern.name} value={pattern.name}>{pattern.name}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ display: 'block', mb: 0.5, fontWeight: 'medium', color: darkMode ? '#ffffff' : '#333333' }}>Difficulty</Typography>
                      <FormControl size="small" fullWidth>
                        <Select 
                          value={difficultyFilter} 
                          onChange={handleDifficultyChange} 
                          displayEmpty 
                          sx={{ 
                            bgcolor: darkMode ? '#121212' : '#ffffff', 
                            '.MuiOutlinedInput-notchedOutline': { borderColor: darkMode ? '#424242' : '#e0e0e0' }, 
                            '.MuiSelect-select': { color: darkMode ? '#ffffff' : '#333333' }, 
                            '.MuiSvgIcon-root': { color: darkMode ? '#ffffff' : '#333333' }, 
                            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: darkMode ? '#616161' : '#e0e0e0' }, 
                            '.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: darkMode ? '#00aaff' : '#333333' } 
                          }}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                bgcolor: darkMode ? '#121212' : '#ffffff',
                                color: darkMode ? '#ffffff' : '#333333',
                                '& .MuiMenuItem-root': {
                                  color: darkMode ? '#ffffff' : '#333333',
                                  '&:hover': {
                                    bgcolor: darkMode ? '#424242' : '#f5f5f5',
                                  },
                                  '&.Mui-selected': {
                                    bgcolor: darkMode ? '#424242' : '#e0e0e0',
                                  },
                                },
                              },
                            },
                          }}
                        >
                          <MenuItem value="all">All</MenuItem>
                          <MenuItem value="Easy">Easy</MenuItem>
                          <MenuItem value="Medium">Medium</MenuItem>
                          <MenuItem value="Hard">Hard</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
                    <Tooltip title={showStarredOnly ? "Show All" : "Show Starred Only"}>
                      <IconButton
                        onClick={toggleStarredOnly}
                        sx={{ 
                          color: showStarredOnly ? (darkMode ? '#ffd700' : '#f57c00') : (darkMode ? '#bdbdbd' : '#757575'),
                          '&:hover': { color: darkMode ? '#ffd700' : '#f57c00' }
                        }}
                      >
                        {showStarredOnly ? <StarIcon /> : <StarBorderIcon />}
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Reset Progress">
                      <IconButton
                        onClick={handleOpenResetDialog}
                        sx={{ color: darkMode ? '#bdbdbd' : '#757575', '&:hover': { color: darkMode ? '#ffffff' : '#333333'} }}
                      >
                        <RefreshIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>

                <Box sx={{ 
                  flexShrink: 0, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: 2, 
                  width: { xs: '100%', md: 'auto' }, 
                  borderLeft: { xs: 'none', md: `1px solid ${darkMode ? '#424242' : '#e0e0e0'}` }, 
                  pl: { xs: 0, md: 7 },
                  pr: { xs: 0, md: 3 },
                  mt: { xs: 2, md: 0 }
                }}>
                  <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ 
                      fontWeight: 'bold', 
                      color: darkMode ? '#ffffff' : '#333333', 
                      textAlign: 'center',
                      mb: 2
                    }}
                  >
                    Overall Progress
                  </Typography>

                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' }, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: { xs: 3, sm: 4 }, 
                    width: '100%' 
                  }}>
                    <Box sx={{ position: 'relative', display: 'inline-flex', flexShrink: 0 }}>
                      <CircularProgress
                        variant="determinate"
                        value={overallProgress}
                        size={100}
                        thickness={4}
                        sx={{
                          color: '#4caf50',
                          transition: 'stroke-dashoffset 0.3s ease 0s',
                          '& .MuiCircularProgress-circle': {
                            stroke: darkMode ? '#66bb6a' : '#66bb6a',
                            strokeLinecap: 'round',
                          },
                          '& .MuiCircularProgress-circleDeterminate': {
                            color: '#4caf50'
                          }
                        }}
                      />
                      <Box
                        sx={{
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          position: 'absolute',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column',
                        }}
                      >
                        <Typography variant="h4" component="div" sx={{ color: darkMode ? '#ffffff' : '#333333', fontWeight: 'bold', lineHeight: 1 }}>
                          {patterns.reduce((sum, pattern) => sum + pattern.questions.filter(q => q.status === 'Completed').length, 0)}
                          <Box component="span" sx={{ fontSize: '0.7em', color: darkMode ? '#bdbdbd' : '#666666' }}>
                            /{patterns.reduce((sum, pattern) => sum + pattern.questions.length, 0)}
                          </Box>
                        </Typography>
                        <Typography variant="body2" sx={{ color: darkMode ? '#bdbdbd' : '#666666' }}>
                          Solved
                        </Typography>
                      </Box>
                    </Box>

                    <Box display="flex" flexDirection="column" gap={1} sx={{ flexGrow: 1, width: { xs: '100%', sm: 'auto' }, maxWidth: { sm: 200 } }}>
                      <Box sx={{ bgcolor: darkMode ? '#333333' : '#eeeeee', p: 1, borderRadius: 1, borderLeft: `4px solid #66bb6a`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#66bb6a' }}>Easy</Typography>
                        <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#333333' }}>{difficultyProgress.easy.completed}/{difficultyProgress.easy.total}</Typography>
                      </Box>
                      <Box sx={{ bgcolor: darkMode ? '#333333' : '#eeeeee', p: 1, borderRadius: 1, borderLeft: `4px solid #ffa726`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#ffa726' }}>Med.</Typography>
                        <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#333333' }}>{difficultyProgress.medium.completed}/{difficultyProgress.medium.total}</Typography>
                      </Box>
                      <Box sx={{ bgcolor: darkMode ? '#333333' : '#eeeeee', p: 1, borderRadius: 1, borderLeft: `4px solid #ef5350`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#ef5350' }}>Hard</Typography>
                        <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#333333' }}>{difficultyProgress.hard.completed}/{difficultyProgress.hard.total}</Typography>
                      </Box>
                    </Box>
                  </Box>



                  
                </Box>
              </Card>

              <Box sx={{ width: '100%', mt: 0 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {filteredPatterns.map((pattern) => (
                    <Box key={pattern.name} sx={{ mb: 3, width: '100%' }}>
                      <PatternCard
                        pattern={pattern}
                        isStarred={starredPatterns.has(pattern.name)}
                        onToggleStar={() => toggleStarPattern(pattern.name)}
                        onQuestionStatusChange={handleQuestionStatusChange}
                        onToggleStarQuestion={memoizedToggleStarQuestion}
                        darkMode={darkMode}
                        searchTerm={searchTerm}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>

              <Dialog
                open={openResetDialog}
                onClose={handleCloseResetDialog}
                aria-labelledby="reset-dialog-title"
                aria-describedby="reset-dialog-description"
              >
                <DialogTitle id="reset-dialog-title" sx={{ bgcolor: darkMode ? '#212121' : '#ffffff', color: darkMode ? '#ffffff' : '#333333' }}>
                  Confirm Reset
                </DialogTitle>
                <DialogContent sx={{ bgcolor: darkMode ? '#212121' : '#ffffff', color: darkMode ? '#e0e0e0' : '#333333' }}>
                  Are you sure you want to reset your progress?
                </DialogContent>
                <DialogActions sx={{ bgcolor: darkMode ? '#212121' : '#ffffff' }}>
                  <Button onClick={handleCloseResetDialog} sx={{ color: darkMode ? '#bdbdbd' : '#666666' }}>Cancel</Button>
                  <Button onClick={handleConfirmReset} color="error" variant="contained" autoFocus>Yes, Reset</Button>
                </DialogActions>
              </Dialog>
            </Container>
          } />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;