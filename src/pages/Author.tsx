import React from 'react';
import {
  Box,
  Typography,
  Container,
  IconButton,
  useTheme
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Pic from '../pic.jpg'; // Replace with your image path
import { motion } from 'framer-motion';

interface AuthorProps {
  darkMode: boolean;
}

const Author: React.FC<AuthorProps> = ({ darkMode }) => {
  const theme = useTheme();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const profileImageVariants = {
    animate: {
      y: [0, -5, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const headingStyles = {
    position: 'relative',
    display: 'block',
    fontWeight: 'bold',
    mb: 4,
    textAlign: 'left',
    width: '100%',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '1px',
      backgroundImage: `repeating-linear-gradient(
        to right,
        ${darkMode ? '#90caf9' : '#1976d2'} 0px,
        ${darkMode ? '#90caf9' : '#1976d2'} 4px,
        transparent 4px,
        transparent 8px
      )`,
      bottom: -8,
      left: 0,
    },
  };

  const techStack = [
    'C++',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'SQL',
    'Python',
    'Git',
    'HTML/CSS',
    'Express',
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: darkMode ? '#1a1a1a' : '#f5f5f5',
        minHeight: '100vh',
        color: darkMode ? '#e0e0e0' : '#333333',
        py: 8,
        px: 2,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          bgcolor: darkMode ? '#212121' : '#ffffff',
          p: { xs: 4, md: 6 },
          borderRadius: 3,
          boxShadow: 6,
          textAlign: 'center',
        }}
      >
        {/* Profile Section */}
        <Box sx={{ mb: 6 }}>
          <motion.div variants={profileImageVariants} animate="animate">
            <Box
              component="img"
              src={Pic}
              alt="Subham Kumar"
              sx={{
                width: 180,
                height: 180,
                borderRadius: '50%',
                objectFit: 'cover',
                mb: 3,
                border: `5px solid ${darkMode ? '#424242' : '#e0e0e0'}`,
                boxShadow: 3,
              }}
            />
          </motion.div>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Hi there! I'm Subham.
          </Typography>
          <Typography variant="h6" paragraph sx={{ fontStyle: 'italic' }}>
            Developer • Problem Solver • Open Source Enthusiast
          </Typography>
        </Box>

        {/* Bio */}
        <Box sx={{ mb: 6, textAlign: 'left' }}>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            I'm a final-year dual degree student at IIT (ISM) Dhanbad in Mathematics & Computing. I'm passionate about building software products, contributing to open source, and exploring web development and machine learning. I've mentored in open-source programs, built real-world apps, and love solving algorithmic problems.
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Recently, I contributed to projects at Metamask, OpenMRS, and CircuitVerse, and worked on a full-stack CDC Portal for my institute. I'm currently looking for opportunities in frontend/backend roles where I can build scalable, impactful products.
          </Typography>
        </Box>

        {/* Work Experience */}
        <Typography variant="h4" sx={headingStyles}>
          💼 Work Experience
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mb: 6, pl: 1, textAlign: 'left' }}>
          {[
            {
              role: 'Frontend Engineer Intern',
              company: 'Sportthon',
              date: 'Jan 2025 – Mar 2025',
              tech: 'React, CSS, REST API, MySQL',
              color: darkMode ? '#66bb6a' : '#4caf50',
            },
            {
              role: 'Open Source Contributor',
              company: 'Self-Directed',
              date: 'Dec 2023 – Apr 2024',
              tech: 'Projects: Metamask, CircuitVerse, OpenMRS',
              color: darkMode ? '#ffa726' : '#ff9800',
            },
            {
              role: 'Open Source Mentor',
              company: 'CircuitVerse',
              date: 'May 2024 – Aug 2024',
              tech: 'Guided contributors, reviewed PRs, improved docs',
              color: darkMode ? '#0288d1' : '#03a9f4',
            },
          ].map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 + idx * 0.2 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    mr: 2,
                    mt: '4px',
                    color: exp.color,
                    minWidth: '30px',
                  }}
                >
                  ● →
                </Typography>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                    {exp.role}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    {exp.date}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {exp.tech}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Education */}
        <Typography variant="h4" sx={headingStyles}>
          🎓 Education
        </Typography>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box
            sx={{
              bgcolor: darkMode ? '#212121' : '#eeeeee',
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              mb: 6,
              borderLeft: `4px solid ${darkMode ? '#9575cd' : '#673ab7'}`,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
              Integrated Master of Technology (B.Tech + M.Tech)
            </Typography>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic', mb: 1 }}>
              Mathematics and Computing, IIT (ISM) Dhanbad
            </Typography>
            <Typography variant="body2">Dec 2021 – Apr 2026</Typography>
          </Box>
        </motion.div>

        {/* Tech Stack */}
        <Typography variant="h4" sx={headingStyles}>
          🧰 Tech Stack
        </Typography>
        <Box
          sx={{
            overflow: 'hidden',
            width: '100%',
            position: 'relative',
            mb: 6,
            height: '60px',
          }}
        >
          <motion.div
            animate={{ x: ['100%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            style={{ whiteSpace: 'nowrap', display: 'inline-block' }}
          >
            {techStack.map((tech, index) => (
              <Box
                key={index}
                sx={{
                  display: 'inline-block',
                  bgcolor: darkMode ? '#424242' : '#e0e0e0',
                  color: darkMode ? '#ffffff' : '#333',
                  px: 2,
                  py: 1,
                  mx: 1.5,
                  borderRadius: '20px',
                  fontWeight: 500,
                  fontSize: '14px',
                  boxShadow: 2,
                  minWidth: '80px',
                  textAlign: 'center',
                  userSelect: 'none',
                }}
              >
                {tech}
              </Box>
            ))}
          </motion.div>
        </Box>

        {/* Socials */}
        <Typography variant="h4" sx={{ ...headingStyles, textAlign: 'center' }}>
          Find Me On
        </Typography>

        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <IconButton
            href="https://github.com/yourusername"
            target="_blank"
            sx={{
              color: darkMode ? '#bdbdbd' : '#666666',
              '&:hover': {
                color: darkMode ? '#ffffff' : '#333333',
                transform: 'scale(1.2)',
              },
              m: 1,
            }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            sx={{
              color: darkMode ? '#bdbdbd' : '#666666',
              '&:hover': {
                color: darkMode ? '#ffffff' : '#333333',
                transform: 'scale(1.2)',
              },
              m: 1,
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://twitter.com/yourusername"
            target="_blank"
            sx={{
              color: darkMode ? '#bdbdbd' : '#666666',
              '&:hover': {
                color: darkMode ? '#ffffff' : '#333333',
                transform: 'scale(1.2)',
              },
              m: 1,
            }}
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Author;
