import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Chip,
  LinearProgress,
  Card
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';

interface AmazonQuestionsProps {
  darkMode: boolean;
}

interface Question {
  id: number;
  title: string;
  isPremium: boolean;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  frequency: number;
  status: 'Not Completed' | 'Completed';
  starred: boolean;
}

const amazonQuestions: Question[] = [
  { id: 1, title: "Substring With Largest Variance", isPremium: false, difficulty: "Hard", frequency: 100, status: "Not Completed", starred: false },
  { id: 2, title: "Sum of Total Strength of Wizards", isPremium: false, difficulty: "Hard", frequency: 97.704, status: "Not Completed", starred: false },
  // ... rest of the questions array ...
];

const LOCAL_STORAGE_KEY = 'amazonQuestionsProgress';

const AmazonQuestions: React.FC<AmazonQuestionsProps> = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [questions, setQuestions] = useState<Question[]>(() => {
    const savedProgress = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedProgress) {
      return JSON.parse(savedProgress);
    }
    return amazonQuestions.map(q => ({ ...q, status: 'Not Completed', starred: false }));
  });
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [showStarredOnly, setShowStarredOnly] = useState(false);
  const [progress, setProgress] = useState({
    total: { completed: 0, total: 0, percentage: 0 },
    easy: { completed: 0, total: 0, percentage: 0 },
    medium: { completed: 0, total: 0, percentage: 0 },
    hard: { completed: 0, total: 0, percentage: 0 }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    const calculateProgress = () => {
      const stats = {
        total: { completed: 0, total: questions.length, percentage: 0 },
        easy: { completed: 0, total: 0, percentage: 0 },
        medium: { completed: 0, total: 0, percentage: 0 },
        hard: { completed: 0, total: 0, percentage: 0 }
      };

      questions.forEach(question => {
        if (question.status === 'Completed') {
          stats.total.completed++;
          if (question.difficulty === 'Easy') {
            stats.easy.completed++;
            stats.easy.total++;
          } else if (question.difficulty === 'Medium') {
            stats.medium.completed++;
            stats.medium.total++;
          } else if (question.difficulty === 'Hard') {
            stats.hard.completed++;
            stats.hard.total++;
          }
        } else {
          if (question.difficulty === 'Easy') stats.easy.total++;
          else if (question.difficulty === 'Medium') stats.medium.total++;
          else if (question.difficulty === 'Hard') stats.hard.total++;
        }
      });

      stats.total.percentage = (stats.total.completed / stats.total.total) * 100;
      stats.easy.percentage = (stats.easy.completed / stats.easy.total) * 100;
      stats.medium.percentage = (stats.medium.completed / stats.medium.total) * 100;
      stats.hard.percentage = (stats.hard.completed / stats.hard.total) * 100;

      setProgress(stats);
    };

    calculateProgress();
  }, [questions]);

  const handleSortClick = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const handleDifficultyChange = (event: SelectChangeEvent) => {
    setDifficultyFilter(event.target.value);
  };

  const toggleStarredOnly = () => {
    setShowStarredOnly(prev => !prev);
  };

  const filteredQuestions = questions
    .filter(question => {
      const matchesSearch = question.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = difficultyFilter === 'all' || question.difficulty === difficultyFilter;
      const matchesStarred = !showStarredOnly || question.starred;
      return matchesSearch && matchesDifficulty && matchesStarred;
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.frequency - b.frequency;
      }
      return b.frequency - a.frequency;
    });

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? (
        <span key={i} style={{ backgroundColor: '#ffd700', color: '#000000' }}>
          {part}
        </span>
      ) : part
    );
  };

  const handleStatusChange = (id: number) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q => {
        if (q.id === id) {
          return { 
            ...q, 
            status: q.status === 'Completed' ? 'Not Completed' : 'Completed'
          };
        }
        return q;
      })
    );
  };

  const toggleStar = (id: number) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q =>
        q.id === id ? { ...q, starred: !q.starred } : q
      )
    );
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
        Amazon Interview Questions
      </Typography>

      <Card sx={{ 
        p: 3, 
        mb: 4, 
        bgcolor: darkMode ? '#262626' : '#ffffff',
        boxShadow: 3
      }}>
        <Typography variant="h6" sx={{ mb: 2, color: darkMode ? '#ffffff' : '#333333' }}>
          Overall Progress
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#333333' }}>
              Total Progress
            </Typography>
            <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#333333' }}>
              {progress.total.completed}/{progress.total.total} ({progress.total.percentage.toFixed(1)}%)
            </Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={progress.total.percentage} 
            sx={{ 
              height: 10, 
              borderRadius: 5,
              bgcolor: darkMode ? '#424242' : '#e0e0e0',
              '& .MuiLinearProgress-bar': {
                bgcolor: '#4caf50'
              }
            }} 
          />
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' }, gap: 2 }}>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" sx={{ color: '#4caf50', fontWeight: 'bold' }}>
                Easy
              </Typography>
              <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#333333' }}>
                {progress.easy.completed}/{progress.easy.total}
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={progress.easy.percentage} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                bgcolor: darkMode ? '#424242' : '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#4caf50'
                }
              }} 
            />
          </Box>

          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" sx={{ color: '#ffa726', fontWeight: 'bold' }}>
                Medium
              </Typography>
              <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#333333' }}>
                {progress.medium.completed}/{progress.medium.total}
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={progress.medium.percentage} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                bgcolor: darkMode ? '#424242' : '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#ffa726'
                }
              }} 
            />
          </Box>

          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" sx={{ color: '#f44336', fontWeight: 'bold' }}>
                Hard
              </Typography>
              <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#333333' }}>
                {progress.hard.completed}/{progress.hard.total}
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={progress.hard.percentage} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                bgcolor: darkMode ? '#424242' : '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#f44336'
                }
              }} 
            />
          </Box>
        </Box>
      </Card>

      <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        <TextField
          sx={{ 
            flexGrow: 1, 
            maxWidth: 400,
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
          variant="outlined"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: darkMode ? '#bdbdbd' : '#666666' }} />
              </InputAdornment>
            ),
          }}
        />

        <FormControl sx={{ minWidth: 120 }}>
          <Select
            value={difficultyFilter}
            onChange={handleDifficultyChange}
            displayEmpty
            sx={{
              bgcolor: darkMode ? '#262626' : '#ffffff',
              color: darkMode ? '#ffffff' : '#333333',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: darkMode ? '#424242' : '#e0e0e0',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: darkMode ? '#616161' : '#bdbdbd',
              },
            }}
          >
            <MenuItem value="all">All Difficulties</MenuItem>
            <MenuItem value="Easy">Easy</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Hard">Hard</MenuItem>
          </Select>
        </FormControl>

        <Chip
          icon={showStarredOnly ? <StarIcon /> : <StarBorderIcon />}
          label={showStarredOnly ? "Show All" : "Show Starred"}
          onClick={toggleStarredOnly}
          sx={{
            bgcolor: showStarredOnly ? (darkMode ? '#424242' : '#f5f5f5') : 'transparent',
            color: showStarredOnly ? (darkMode ? '#ffd700' : '#f57c00') : (darkMode ? '#ffffff' : '#333333'),
            border: `1px solid ${darkMode ? '#424242' : '#e0e0e0'}`,
            '&:hover': {
              bgcolor: darkMode ? '#424242' : '#f5f5f5',
            },
          }}
        />
      </Box>

      <TableContainer 
        component={Paper} 
        sx={{ 
          bgcolor: darkMode ? '#262626' : '#ffffff',
          boxShadow: 3
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: darkMode ? '#ffffff' : '#333333' }}>Status</TableCell>
              <TableCell sx={{ color: darkMode ? '#ffffff' : '#333333' }}>Sl.No</TableCell>
              <TableCell sx={{ color: darkMode ? '#ffffff' : '#333333' }}>Title</TableCell>
              <TableCell sx={{ color: darkMode ? '#ffffff' : '#333333' }}>Premium</TableCell>
              <TableCell sx={{ color: darkMode ? '#ffffff' : '#333333' }}>Difficulty</TableCell>
              <TableCell 
                sx={{ 
                  color: darkMode ? '#ffffff' : '#333333',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                onClick={handleSortClick}
              >
                Frequency {sortOrder === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
              </TableCell>
              <TableCell sx={{ color: darkMode ? '#ffffff' : '#333333' }}>Solution</TableCell>
              <TableCell sx={{ color: darkMode ? '#ffffff' : '#333333' }}>Star</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredQuestions.map((question) => (
              <TableRow 
                key={question.id}
                sx={{ 
                  '&:hover': { 
                    bgcolor: darkMode ? '#333333' : '#f5f5f5' 
                  }
                }}
              >
                <TableCell>
                  <Tooltip title={question.status}>
                    <IconButton 
                      onClick={() => handleStatusChange(question.id)}
                      sx={{ 
                        color: question.status === 'Completed' ? '#4caf50' : 
                               darkMode ? '#bdbdbd' : '#666666'
                      }}
                    >
                      <AssignmentTurnedInOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell sx={{ color: darkMode ? '#ffffff' : '#333333' }}>{question.id}</TableCell>
                <TableCell sx={{ color: darkMode ? '#ffffff' : '#333333' }}>
                  {highlightText(question.title, searchTerm)}
                </TableCell>
                <TableCell sx={{ color: darkMode ? '#ffffff' : '#333333' }}>
                  {question.isPremium ? 'Y' : 'N'}
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      color: question.difficulty === 'Easy' ? '#4caf50' :
                             question.difficulty === 'Medium' ? '#ffa726' :
                             '#f44336',
                      fontWeight: 'bold'
                    }}
                  >
                    {question.difficulty}
                  </Box>
                </TableCell>
                <TableCell sx={{ color: darkMode ? '#ffffff' : '#333333' }}>
                  {question.frequency.toFixed(2)}%
                </TableCell>
                <TableCell>
                  <IconButton 
                    href={`https://github.com/your-username/leetcode-solutions/blob/main/amazon/${question.id}.md`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: darkMode ? '#bdbdbd' : '#666666',
                      '&:hover': {
                        color: darkMode ? '#ffffff' : '#333333'
                      }
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton 
                    onClick={() => toggleStar(question.id)}
                    sx={{ 
                      color: question.starred ? '#ffd700' : 
                             darkMode ? '#bdbdbd' : '#666666'
                    }}
                  >
                    {question.starred ? <StarIcon /> : <StarBorderIcon />}
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AmazonQuestions; 