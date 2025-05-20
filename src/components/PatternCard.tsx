import React from 'react';
import { Card, Typography, LinearProgress, Box, IconButton, Link, List, ListItem, ListItemText, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Pattern, Question } from '../data/patterns';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LaunchIcon from '@mui/icons-material/Launch';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { motion } from 'framer-motion';

interface PatternCardProps {
  pattern: Pattern;
  isStarred: boolean;
  onToggleStar: () => void;
  onQuestionStatusChange: (patternName: string, questionName: string, newStatus: Question['status']) => void;
  onToggleStarQuestion: (patternName: string, questionName: string) => void;
  darkMode: boolean;
  searchTerm: string;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy': return '#4caf50';
    case 'Medium': return '#ff9800';
    case 'Hard': return '#f44336';
    default: return '#757575';
  }
};

// Function to highlight text
const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm) {
    return text;
  }
  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <span key={index} style={{ backgroundColor: 'yellow', color: 'black' }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

const PatternCard: React.FC<PatternCardProps> = ({
  pattern,
  isStarred,
  onToggleStar,
  onQuestionStatusChange,
  onToggleStarQuestion,
  darkMode,
  searchTerm
}) => {
  const completedQuestions = pattern.questions.filter(q => q.status === 'Completed').length;
  const progress = (completedQuestions / pattern.questions.length) * 100;

  return (
    <Card
      elevation={3}
      sx={{
        bgcolor: darkMode ? '#212121' : '#ffffff',
        borderRadius: 2,
        boxShadow: 3,
        overflow: 'hidden'
      }}
    >
      <Box sx={{ p: 2, borderBottom: `1px solid ${darkMode ? '#424242' : '#e0e0e0'}` }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              color: darkMode ? '#ffffff' : '#333333',
              textAlign: 'center'
            }}
          >
            {pattern.name}
          </Typography>
          {/* <IconButton
            onClick={onToggleStar}
            sx={{ 
              color: isStarred ? (darkMode ? '#ffd700' : '#f57c00') : (darkMode ? '#bdbdbd' : '#757575'),
              '&:hover': { color: darkMode ? '#ffd700' : '#f57c00' }
            }}
          >
            {isStarred ? <StarIcon /> : <StarBorderIcon />}
          </IconButton> */}
        </Box>
        {/* <Typography variant="body2" sx={{ color: darkMode ? '#bdbdbd' : '#666666', mb: 2 }}>
          {pattern.name}
        </Typography> */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Typography variant="body2" sx={{ color: darkMode ? '#bdbdbd' : '#666666' }}>
            Progress: {completedQuestions}/{pattern.questions.length}
          </Typography>
          <Typography variant="body2" sx={{ color: darkMode ? '#bdbdbd' : '#666666' }}>
            ({Math.round(progress)}%)
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 4,
            bgcolor: darkMode ? '#424242' : '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              bgcolor: '#4caf50',
              borderRadius: 4
            }
          }}
        />
      </Box>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: darkMode ? '#1a1a1a' : '#f5f5f5' }}>
              <TableCell sx={{ color: darkMode ? '#e0e0e0' : '#333333', fontWeight: 'bold', width: '10%' }}>Status</TableCell>
              <TableCell sx={{ color: darkMode ? '#e0e0e0' : '#333333', fontWeight: 'bold', width: '40%' }}>Problem</TableCell>
              <TableCell sx={{ color: darkMode ? '#e0e0e0' : '#333333', fontWeight: 'bold', width: '15%' }}>Difficulty</TableCell>
              <TableCell sx={{ color: darkMode ? '#e0e0e0' : '#333333', fontWeight: 'bold', width: '20%' }}>Solution</TableCell>
              <TableCell sx={{ color: darkMode ? '#e0e0e0' : '#333333', fontWeight: 'bold', width: '15%' }}>Star</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pattern.questions.map((question) => (
              <TableRow key={question.name}>
                <TableCell sx={{ width: '10%' }}>
                    <IconButton
                      size="small"
                      onClick={() => onQuestionStatusChange(pattern.name, question.name, 
                        question.status === 'Completed' ? 'Not Started' : 'Completed'
                      )}
                      sx={{
                        color: question.status === 'Completed' ? '#4caf50' : (darkMode ? '#bdbdbd' : '#757575'),
                        '&:hover': { color: '#4caf50' },
                        '& .MuiSvgIcon-root': {
                          fontSize: '1.5rem'
                        }
                      }}
                    >
                      <AssignmentTurnedInOutlinedIcon />
                    </IconButton>
                </TableCell>
                <TableCell sx={{ width: '40%' }}>
                  <Link
                    href={question.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: darkMode ? '#90caf9' : '#0288d1', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    <Typography variant="body2" sx={{ color: 'inherit' }}>
                      {highlightText(question.name, searchTerm)}
                    </Typography>
                    {/* Optional: Add LaunchIcon next to problem name if needed */}
                    {/* <LaunchIcon sx={{ fontSize: '0.8em', ml: 0.5 }} /> */}
                  </Link>
                </TableCell>
                <TableCell sx={{ width: '15%' }}>
                  <Chip
                    label={question.difficulty}
                    size="small"
                    sx={{
                      color: getDifficultyColor(question.difficulty),
                      fontWeight: 'bold',
                      height: '20px',
                      bgcolor: 'transparent',
                      border: 'none',
                      '& .MuiChip-label': {
                        px: 1
                      }
                    }}
                  />
                </TableCell>
                <TableCell sx={{ width: '20%' }}>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    {/* GitHub Icon Link */}
                    <Link
                      href={question.solution?.github || '#'} // Use dummy link or actual if exists
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: darkMode ? '#bdbdbd' : '#666666',
                        display: 'flex',
                        alignItems: 'center',
                        '&:hover': { color: darkMode ? '#ffffff' : '#333333' }
                      }}
                    >
                      <GitHubIcon fontSize="small" />
                    </Link>

                    {/* YouTube Icon Link (optional, based on your data) */}
                    {/* {question.solution?.youtube && (
                       <Link
                        href={question.solution.youtube || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: darkMode ? '#bdbdbd' : '#666666',
                          display: 'flex',
                          alignItems: 'center',
                          '&:hover': { color: darkMode ? '#ffffff' : '#333333' }
                        }}
                      >
                        <YouTubeIcon fontSize="small" />
                      </Link>
                    )} */}
                  </Box>
                </TableCell>
                <TableCell sx={{ width: '15%' }}>
                   <IconButton
                      size="small"
                      onClick={() => onToggleStarQuestion(pattern.name, question.name)}
                      sx={{
                        color: question.starred ? (darkMode ? '#ffd700' : '#f57c00') : (darkMode ? '#bdbdbd' : '#757575'),
                        '&:hover': { color: darkMode ? '#ffd700' : '#f57c00' }
                      }}
                    >
                      {question.starred ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
                    </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default PatternCard; 