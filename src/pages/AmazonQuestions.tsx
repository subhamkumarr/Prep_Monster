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
  { id: 3, title: "Minimum Health to Beat Game", isPremium: true, difficulty: "Medium", frequency: 95.4081, status: "Not Completed", starred: false },
  { id: 4, title: "Analyze User Website Visit Pattern", isPremium: true, difficulty: "Medium", frequency: 95.3566, status: "Not Completed", starred: false },
  { id: 5, title: "Concatenated Words", isPremium: false, difficulty: "Hard", frequency: 93.1081, status: "Not Completed", starred: false },
  { id: 6, title: "Reorder Data in Log Files", isPremium: false, difficulty: "Medium", frequency: 91.001, status: "Not Completed", starred: false },
  { id: 7, title: "Maximum Number of Books You Can Take", isPremium: true, difficulty: "Hard", frequency: 90.0621, status: "Not Completed", starred: false },
  { id: 8, title: "Minimum Number of Moves to Make Palindrome", isPremium: false, difficulty: "Hard", frequency: 87.7661, status: "Not Completed", starred: false },
  { id: 9, title: "Count Unique Characters of All Substrings of a Given String", isPremium: false, difficulty: "Hard", frequency: 87.2043, status: "Not Completed", starred: false },
  { id: 10, title: "Minimum Number of Keypresses", isPremium: true, difficulty: "Medium", frequency: 84.9083, status: "Not Completed", starred: false },
  { id: 11, title: "LRU Cache", isPremium: false, difficulty: "Medium", frequency: 83.3923, status: "Not Completed", starred: false },
  { id: 12, title: "Number of Ways to Select Buildings", isPremium: false, difficulty: "Medium", frequency: 81.0963, status: "Not Completed", starred: false },
  { id: 13, title: "Plates Between Candles", isPremium: false, difficulty: "Medium", frequency: 80.9185, status: "Not Completed", starred: false },
  { id: 14, title: "Number of Islands", isPremium: false, difficulty: "Medium", frequency: 80.2562, status: "Not Completed", starred: false },
  { id: 15, title: "Minimum Adjacent Swaps to Make a Valid Array", isPremium: true, difficulty: "Medium", frequency: 79.7405, status: "Not Completed", starred: false },
  { id: 16, title: "Total Appeal of A String", isPremium: false, difficulty: "Hard", frequency: 79.1995, status: "Not Completed", starred: false },
  { id: 17, title: "Find K-th Smallest Pair Distance", isPremium: false, difficulty: "Hard", frequency: 76.9036, status: "Not Completed", starred: false },
  { id: 18, title: "Sum of Subarray Ranges", isPremium: false, difficulty: "Medium", frequency: 76.7894, status: "Not Completed", starred: false },
  { id: 19, title: "Sequentially Ordinal Rank Tracker", isPremium: false, difficulty: "Hard", frequency: 76.442, status: "Not Completed", starred: false },
  { id: 20, title: "Maximum Number of Robots Within Budget", isPremium: false, difficulty: "Hard", frequency: 75.8822, status: "Not Completed", starred: false },
  { id: 21, title: "Search Suggestions System", isPremium: false, difficulty: "Medium", frequency: 73.5862, status: "Not Completed", starred: false },
  { id: 22, title: "Find Triangular Sum of an Array", isPremium: false, difficulty: "Medium", frequency: 73.1715, status: "Not Completed", starred: false },
  { id: 23, title: "Integer to English Words", isPremium: false, difficulty: "Hard", frequency: 73.0024, status: "Not Completed", starred: false },
  { id: 24, title: "K Closest Points to Origin", isPremium: false, difficulty: "Medium", frequency: 70.9466, status: "Not Completed", starred: false },
  { id: 25, title: "Minimum Number of Swaps to Make the Binary String Alternating", isPremium: false, difficulty: "Medium", frequency: 69.0576, status: "Not Completed", starred: false },
  { id: 26, title: "Word Ladder", isPremium: false, difficulty: "Hard", frequency: 67.7724, status: "Not Completed", starred: false },
  { id: 27, title: "Meeting Rooms II", isPremium: true, difficulty: "Medium", frequency: 66.3116, status: "Not Completed", starred: false },
  { id: 28, title: "Design In-Memory File System", isPremium: true, difficulty: "Hard", frequency: 65.327, status: "Not Completed", starred: false },
  { id: 29, title: "Build Binary Expression Tree From Infix Expression", isPremium: true, difficulty: "Hard", frequency: 64.3988, status: "Not Completed", starred: false },
  { id: 30, title: "Make Array Zero by Subtracting Equal Amounts", isPremium: false, difficulty: "Easy", frequency: 63.9838, status: "Not Completed", starred: false },
  { id: 31, title: "Find the K-Sum of an Array", isPremium: false, difficulty: "Hard", frequency: 62.9952, status: "Not Completed", starred: false },
  { id: 32, title: "Trapping Rain Water", isPremium: false, difficulty: "Hard", frequency: 60.6992, status: "Not Completed", starred: false },
  { id: 33, title: "Merge k Sorted Lists", isPremium: false, difficulty: "Hard", frequency: 60.4348, status: "Not Completed", starred: false },
  { id: 34, title: "Word Break II", isPremium: false, difficulty: "Hard", frequency: 59.804, status: "Not Completed", starred: false },
  { id: 35, title: "Design an Expression Tree With Evaluate Function", isPremium: true, difficulty: "Medium", frequency: 59.1473, status: "Not Completed", starred: false },
  { id: 36, title: "Reorganize String", isPremium: false, difficulty: "Medium", frequency: 58.4964, status: "Not Completed", starred: false },
  { id: 37, title: "Boundary of Binary Tree", isPremium: true, difficulty: "Medium", frequency: 57.8269, status: "Not Completed", starred: false },
  { id: 38, title: "All Nodes Distance K in Binary Tree", isPremium: false, difficulty: "Medium", frequency: 57.8269, status: "Not Completed", starred: false },
  { id: 39, title: "Sliding Window Maximum", isPremium: false, difficulty: "Hard", frequency: 55.9204, status: "Not Completed", starred: false },
  { id: 40, title: "Course Schedule", isPremium: false, difficulty: "Medium", frequency: 55.8441, status: "Not Completed", starred: false },
  { id: 41, title: "Copy List with Random Pointer", isPremium: false, difficulty: "Medium", frequency: 55.2474, status: "Not Completed", starred: false },
  { id: 42, title: "Race Car", isPremium: false, difficulty: "Hard", frequency: 53.9446, status: "Not Completed", starred: false },
  { id: 43, title: "Group Anagrams", isPremium: false, difficulty: "Medium", frequency: 53.9385, status: "Not Completed", starred: false },
  { id: 44, title: "Longest Duplicate Substring", isPremium: false, difficulty: "Hard", frequency: 52.8976, status: "Not Completed", starred: false },
  { id: 45, title: "Find Good Days to Rob the Bank", isPremium: false, difficulty: "Medium", frequency: 52.8976, status: "Not Completed", starred: false },
  { id: 46, title: "Maximum Total Beauty of the Gardens", isPremium: false, difficulty: "Hard", frequency: 52.8976, status: "Not Completed", starred: false },
  { id: 47, title: "Partition Array Such That Maximum Difference Is K", isPremium: false, difficulty: "Medium", frequency: 52.8976, status: "Not Completed", starred: false },
  { id: 48, title: "Rotting Oranges", isPremium: false, difficulty: "Medium", frequency: 51.8456, status: "Not Completed", starred: false },
  { id: 49, title: "Find Median from Data Stream", isPremium: false, difficulty: "Hard", frequency: 51.8142, status: "Not Completed", starred: false },
  { id: 50, title: "Two Sum", isPremium: false, difficulty: "Easy", frequency: 51.3461, status: "Not Completed", starred: false },
  { id: 51, title: "Evaluate Division", isPremium: false, difficulty: "Medium", frequency: 50.8975, status: "Not Completed", starred: false },
  { id: 52, title: "Design Tic-Tac-Toe", isPremium: true, difficulty: "Medium", frequency: 50.7365, status: "Not Completed", starred: false },
  { id: 53, title: "Maximum Units on a Truck", isPremium: false, difficulty: "Easy", frequency: 49.8519, status: "Not Completed", starred: false },
  { id: 54, title: "Maximum Length of Subarray With Positive Product", isPremium: false, difficulty: "Medium", frequency: 49.8045, status: "Not Completed", starred: false },
  { id: 55, title: "Minimum Cost to Connect Sticks", isPremium: true, difficulty: "Medium", frequency: 49.5636, status: "Not Completed", starred: false },
  { id: 56, title: "Integer to Roman", isPremium: false, difficulty: "Medium", frequency: 49.3056, status: "Not Completed", starred: false },
  { id: 57, title: "Letter Combinations of a Phone Number", isPremium: false, difficulty: "Medium", frequency: 49.0148, status: "Not Completed", starred: false },
  { id: 58, title: "Candy", isPremium: false, difficulty: "Hard", frequency: 47.8847, status: "Not Completed", starred: false },
  { id: 59, title: "Course Schedule II", isPremium: false, difficulty: "Medium", frequency: 47.5932, status: "Not Completed", starred: false },
  { id: 60, title: "Basic Calculator II", isPremium: false, difficulty: "Medium", frequency: 46.3177, status: "Not Completed", starred: false },
  { id: 61, title: "Word Abbreviation", isPremium: true, difficulty: "Hard", frequency: 46.2616, status: "Not Completed", starred: false },
  { id: 62, title: "Maximum Number of Eaten Apples", isPremium: false, difficulty: "Medium", frequency: 46.2616, status: "Not Completed", starred: false },
  { id: 63, title: "Binary Tree Zigzag Level Order Traversal", isPremium: false, difficulty: "Medium", frequency: 45.6783, status: "Not Completed", starred: false },
  { id: 64, title: "Maximum Performance of a Team", isPremium: false, difficulty: "Hard", frequency: 45.6746, status: "Not Completed", starred: false },
  { id: 65, title: "First and Last Call On the Same Day", isPremium: true, difficulty: "Hard", frequency: 45.6746, status: "Not Completed", starred: false },
  { id: 66, title: "Word Ladder II", isPremium: false, difficulty: "Hard", frequency: 45.6066, status: "Not Completed", starred: false },
  { id: 67, title: "Serialize and Deserialize Binary Tree", isPremium: false, difficulty: "Hard", frequency: 44.9716, status: "Not Completed", starred: false },
  { id: 68, title: "Design Parking System", isPremium: false, difficulty: "Easy", frequency: 44.6967, status: "Not Completed", starred: false },
  { id: 69, title: "Word Search", isPremium: false, difficulty: "Medium", frequency: 44.6295, status: "Not Completed", starred: false },
  { id: 70, title: "Sequential Digits", isPremium: false, difficulty: "Medium", frequency: 44.5652, status: "Not Completed", starred: false },
  { id: 71, title: "Sum of Subarray Minimums", isPremium: false, difficulty: "Medium", frequency: 44.0606, status: "Not Completed", starred: false },
  { id: 72, title: "Asteroid Collision", isPremium: false, difficulty: "Medium", frequency: 43.967, status: "Not Completed", starred: false },
  { id: 73, title: "Smallest Range Covering Elements from K Lists", isPremium: false, difficulty: "Hard", frequency: 43.5016, status: "Not Completed", starred: false },
  { id: 74, title: "Lowest Common Ancestor of a Binary Tree", isPremium: false, difficulty: "Medium", frequency: 43.3451, status: "Not Completed", starred: false },
  { id: 75, title: "Word Search II", isPremium: false, difficulty: "Hard", frequency: 42.8948, status: "Not Completed", starred: false },
  { id: 76, title: "Next Greater Element III", isPremium: false, difficulty: "Medium", frequency: 42.6427, status: "Not Completed", starred: false },
  { id: 77, title: "Valid Permutations for DI Sequence", isPremium: false, difficulty: "Hard", frequency: 41.6627, status: "Not Completed", starred: false },
  { id: 78, title: "Merge Intervals", isPremium: false, difficulty: "Medium", frequency: 41.4706, status: "Not Completed", starred: false },
  { id: 79, title: "Snakes and Ladders", isPremium: false, difficulty: "Medium", frequency: 40.7267, status: "Not Completed", starred: false },
  { id: 80, title: "Apply Discount to Prices", isPremium: false, difficulty: "Medium", frequency: 40.7078, status: "Not Completed", starred: false },
  { id: 81, title: "Number of Provinces", isPremium: false, difficulty: "Medium", frequency: 40.2711, status: "Not Completed", starred: false },
  { id: 82, title: "LFU Cache", isPremium: false, difficulty: "Hard", frequency: 40.1815, status: "Not Completed", starred: false },
  { id: 83, title: "Minimum Difference in Sums After Removal of Elements", isPremium: false, difficulty: "Hard", frequency: 40.0067, status: "Not Completed", starred: false },
  { id: 84, title: "Single Element in a Sorted Array", isPremium: false, difficulty: "Medium", frequency: 39.8822, status: "Not Completed", starred: false },
  { id: 85, title: "Robot Room Cleaner", isPremium: true, difficulty: "Hard", frequency: 38.88, status: "Not Completed", starred: false },
  { id: 86, title: "Maximum Subarray", isPremium: false, difficulty: "Medium", frequency: 38.7427, status: "Not Completed", starred: false },
  { id: 87, title: "Minimum Number of Refueling Stops", isPremium: false, difficulty: "Hard", frequency: 38.2393, status: "Not Completed", starred: false },
  { id: 88, title: "Minimum Difficulty of a Job Schedule", isPremium: false, difficulty: "Hard", frequency: 38.2393, status: "Not Completed", starred: false },
  { id: 89, title: "Minimum Knight Moves", isPremium: true, difficulty: "Medium", frequency: 38.1761, status: "Not Completed", starred: false },
  { id: 90, title: "Number of Smooth Descent Periods of a Stock", isPremium: false, difficulty: "Medium", frequency: 38.1761, status: "Not Completed", starred: false },
  { id: 91, title: "Best Time to Buy and Sell Stock", isPremium: false, difficulty: "Easy", frequency: 38.0873, status: "Not Completed", starred: false },
  { id: 92, title: "Making A Large Island", isPremium: false, difficulty: "Hard", frequency: 37.7417, status: "Not Completed", starred: false },
  { id: 93, title: "Koko Eating Bananas", isPremium: false, difficulty: "Medium", frequency: 37.5164, status: "Not Completed", starred: false },
  { id: 94, title: "Furthest Building You Can Reach", isPremium: false, difficulty: "Medium", frequency: 37.5061, status: "Not Completed", starred: false },
  { id: 95, title: "Distribute Coins in Binary Tree", isPremium: false, difficulty: "Medium", frequency: 37.183, status: "Not Completed", starred: false },
  { id: 96, title: "Count Special Integers", isPremium: false, difficulty: "Hard", frequency: 37.183, status: "Not Completed", starred: false },
  { id: 97, title: "Word Break", isPremium: false, difficulty: "Medium", frequency: 37.1035, status: "Not Completed", starred: false },
  { id: 98, title: "Angle Between Hands of a Clock", isPremium: false, difficulty: "Medium", frequency: 36.5587, status: "Not Completed", starred: false },
  { id: 99, title: "Knight Probability in Chessboard", isPremium: false, difficulty: "Medium", frequency: 36.4372, status: "Not Completed", starred: false },
  { id: 100, title: "Top K Frequent Elements", isPremium: false, difficulty: "Medium", frequency: 36.1359, status: "Not Completed", starred: false },
  { id: 101, title: "Basic Calculator III", isPremium: true, difficulty: "Hard", frequency: 35.9618, status: "Not Completed", starred: false },
  { id: 102, title: "Longest Substring Without Repeating Characters", isPremium: false, difficulty: "Medium", frequency: 35.6042, status: "Not Completed", starred: false },
  { id: 103, title: "Recover Binary Search Tree", isPremium: false, difficulty: "Medium", frequency: 35.4319, status: "Not Completed", starred: false },
  { id: 104, title: "First Unique Number", isPremium: true, difficulty: "Medium", frequency: 35.3902, status: "Not Completed", starred: false },
  { id: 105, title: "Time Based Key-Value Store", isPremium: false, difficulty: "Medium", frequency: 35.3204, status: "Not Completed", starred: false },
  { id: 106, title: "Longest Palindromic Substring", isPremium: false, difficulty: "Medium", frequency: 35.2257, status: "Not Completed", starred: false },
  { id: 107, title: "Group Shifted Strings", isPremium: true, difficulty: "Medium", frequency: 35.1903, status: "Not Completed", starred: false },
  { id: 108, title: "Single-Threaded CPU", isPremium: false, difficulty: "Medium", frequency: 35.1903, status: "Not Completed", starred: false },
  { id: 109, title: "Convert BST to Greater Tree", isPremium: false, difficulty: "Medium", frequency: 35.1133, status: "Not Completed", starred: false },
  { id: 110, title: "Median of Two Sorted Arrays", isPremium: false, difficulty: "Hard", frequency: 34.9848, status: "Not Completed", starred: false },
  { id: 111, title: "Largest Rectangle in Histogram", isPremium: false, difficulty: "Hard", frequency: 34.8942, status: "Not Completed", starred: false },
  { id: 112, title: "Robot Bounded In Circle", isPremium: false, difficulty: "Medium", frequency: 34.7992, status: "Not Completed", starred: false },
  { id: 113, title: "Find Leaves of Binary Tree", isPremium: true, difficulty: "Medium", frequency: 34.7751, status: "Not Completed", starred: false },
  { id: 114, title: "Roman to Integer", isPremium: false, difficulty: "Easy", frequency: 34.3407, status: "Not Completed", starred: false },
  { id: 115, title: "Coin Change", isPremium: false, difficulty: "Medium", frequency: 33.9647, status: "Not Completed", starred: false },
  { id: 116, title: "Insert Delete GetRandom O(1)", isPremium: false, difficulty: "Medium", frequency: 33.9317, status: "Not Completed", starred: false },
  { id: 117, title: "Minimum Cost For Tickets", isPremium: false, difficulty: "Medium", frequency: 33.9317, status: "Not Completed", starred: false },
  { id: 118, title: "Reverse Nodes in k-Group", isPremium: false, difficulty: "Hard", frequency: 33.8612, status: "Not Completed", starred: false },
  { id: 119, title: "House Robber", isPremium: false, difficulty: "Medium", frequency: 33.7973, status: "Not Completed", starred: false },
  { id: 120, title: "Minimum Window Substring", isPremium: false, difficulty: "Hard", frequency: 33.5563, status: "Not Completed", starred: false },
  { id: 121, title: "Find All Possible Recipes from Given Supplies", isPremium: false, difficulty: "Medium", frequency: 33.4878, status: "Not Completed", starred: false },
  { id: 122, title: "Append K Integers With Minimal Sum", isPremium: false, difficulty: "Medium", frequency: 33.3416, status: "Not Completed", starred: false },
  { id: 123, title: "Valid Parentheses", isPremium: false, difficulty: "Easy", frequency: 33.3355, status: "Not Completed", starred: false },
  { id: 124, title: "Maximum Frequency Stack", isPremium: false, difficulty: "Hard", frequency: 33.3224, status: "Not Completed", starred: false },
  { id: 125, title: "Lonely Pixel I", isPremium: true, difficulty: "Medium", frequency: 33.0855, status: "Not Completed", starred: false },
  { id: 126, title: "Sort Items by Groups Respecting Dependencies", isPremium: false, difficulty: "Hard", frequency: 33.0855, status: "Not Completed", starred: false },
  { id: 127, title: "Generate Parentheses", isPremium: false, difficulty: "Medium", frequency: 32.6884, status: "Not Completed", starred: false },
  { id: 128, title: "Shortest Path to Get Food", isPremium: true, difficulty: "Medium", frequency: 32.3468, status: "Not Completed", starred: false },
  { id: 129, title: "Longest Happy String", isPremium: false, difficulty: "Medium", frequency: 32.3468, status: "Not Completed", starred: false },
  { id: 130, title: "Basic Calculator", isPremium: false, difficulty: "Hard", frequency: 32.2893, status: "Not Completed", starred: false },
  { id: 131, title: "Subarray Sum Equals K", isPremium: false, difficulty: "Medium", frequency: 32.0896, status: "Not Completed", starred: false },
  { id: 132, title: "Valid Sudoku", isPremium: false, difficulty: "Medium", frequency: 32.0787, status: "Not Completed", starred: false },
  { id: 133, title: "Minimum Rounds to Complete All Tasks", isPremium: false, difficulty: "Medium", frequency: 32.0317, status: "Not Completed", starred: false },
  { id: 134, title: "Strong Password Checker", isPremium: false, difficulty: "Hard", frequency: 31.9628, status: "Not Completed", starred: false },
  { id: 135, title: "Find Minimum Time to Finish All Jobs", isPremium: false, difficulty: "Hard", frequency: 31.9628, status: "Not Completed", starred: false },
  { id: 136, title: "Remove All Adjacent Duplicates in String II", isPremium: false, difficulty: "Medium", frequency: 31.6486, status: "Not Completed", starred: false },
  { id: 137, title: "Minimum Average Difference", isPremium: false, difficulty: "Medium", frequency: 31.5922, status: "Not Completed", starred: false },
  { id: 138, title: "Jump Game", isPremium: false, difficulty: "Medium", frequency: 31.4782, status: "Not Completed", starred: false },
  { id: 139, title: "Find the Celebrity", isPremium: true, difficulty: "Medium", frequency: 31.1313, status: "Not Completed", starred: false },
  { id: 140, title: "Find K Pairs with Smallest Sums", isPremium: false, difficulty: "Medium", frequency: 30.6958, status: "Not Completed", starred: false },
  { id: 141, title: "Binary Trees With Factors", isPremium: false, difficulty: "Medium", frequency: 30.6869, status: "Not Completed", starred: false },
  { id: 142, title: "Binary Search Tree to Greater Sum Tree", isPremium: false, difficulty: "Medium", frequency: 30.5422, status: "Not Completed", starred: false },
  { id: 143, title: "House Robber III", isPremium: false, difficulty: "Medium", frequency: 30.4706, status: "Not Completed", starred: false },
  { id: 144, title: "Concatenation of Consecutive Binary Numbers", isPremium: false, difficulty: "Medium", frequency: 30.352, status: "Not Completed", starred: false },
  { id: 145, title: "Vertical Order Traversal of a Binary Tree", isPremium: false, difficulty: "Hard", frequency: 30.2917, status: "Not Completed", starred: false },
  { id: 146, title: "Number of Distinct Islands", isPremium: true, difficulty: "Medium", frequency: 30.1647, status: "Not Completed", starred: false },
  { id: 147, title: "Longest Substring with At Most K Distinct Characters", isPremium: true, difficulty: "Medium", frequency: 29.4431, status: "Not Completed", starred: false },
  { id: 148, title: "Valid Palindrome III", isPremium: true, difficulty: "Hard", frequency: 29.4431, status: "Not Completed", starred: false },
  { id: 149, title: "Amount of Time for Binary Tree to Be Infected", isPremium: false, difficulty: "Medium", frequency: 29.4431, status: "Not Completed", starred: false },
  { id: 150, title: "Compare Version Numbers", isPremium: false, difficulty: "Medium", frequency: 29.347, status: "Not Completed", starred: false },
  { id: 151, title: "Kth Largest Element in an Array", isPremium: false, difficulty: "Medium", frequency: 29.2225, status: "Not Completed", starred: false },
  { id: 152, title: "Evaluate Reverse Polish Notation", isPremium: false, difficulty: "Medium", frequency: 29.22, status: "Not Completed", starred: false },
  { id: 153, title: "Find K Closest Elements", isPremium: false, difficulty: "Medium", frequency: 29.1472, status: "Not Completed", starred: false },
  { id: 154, title: "Add Two Numbers", isPremium: false, difficulty: "Medium", frequency: 29.1345, status: "Not Completed", starred: false },
  { id: 155, title: "Longest ZigZag Path in a Binary Tree", isPremium: false, difficulty: "Medium", frequency: 28.929, status: "Not Completed", starred: false },
  { id: 156, title: "Longest Valid Parentheses", isPremium: false, difficulty: "Hard", frequency: 28.9085, status: "Not Completed", starred: false },
  { id: 157, title: "Flatten Binary Tree to Linked List", isPremium: false, difficulty: "Medium", frequency: 28.6009, status: "Not Completed", starred: false },
  { id: 158, title: "K-Concatenation Maximum Sum", isPremium: false, difficulty: "Medium", frequency: 28.2766, status: "Not Completed", starred: false },
  { id: 159, title: "Next Greater Element II", isPremium: false, difficulty: "Medium", frequency: 28.1721, status: "Not Completed", starred: false },
  { id: 160, title: "Binary Tree Cameras", isPremium: false, difficulty: "Hard", frequency: 28.0752, status: "Not Completed", starred: false },
  { id: 161, title: "Unique Paths II", isPremium: false, difficulty: "Medium", frequency: 28.0022, status: "Not Completed", starred: false },
  { id: 162, title: "Next Closest Time", isPremium: true, difficulty: "Medium", frequency: 27.9635, status: "Not Completed", starred: false },
  { id: 163, title: "Walls and Gates", isPremium: true, difficulty: "Medium", frequency: 27.6211, status: "Not Completed", starred: false },
  { id: 164, title: "Next Permutation", isPremium: false, difficulty: "Medium", frequency: 27.6129, status: "Not Completed", starred: false },
  { id: 165, title: "Cheapest Flights Within K Stops", isPremium: false, difficulty: "Medium", frequency: 27.5794, status: "Not Completed", starred: false },
  { id: 166, title: "Game of Life", isPremium: false, difficulty: "Medium", frequency: 27.4639, status: "Not Completed", starred: false },
  { id: 167, title: "Shortest Path in Binary Matrix", isPremium: false, difficulty: "Medium", frequency: 27.009, status: "Not Completed", starred: false },
  { id: 168, title: "Students Report By Geography", isPremium: true, difficulty: "Hard", frequency: 26.6516, status: "Not Completed", starred: false },
  { id: 169, title: "Maximum Width Ramp", isPremium: false, difficulty: "Medium", frequency: 26.6516, status: "Not Completed", starred: false },
  { id: 170, title: "Number of People Aware of a Secret", isPremium: false, difficulty: "Medium", frequency: 26.6516, status: "Not Completed", starred: false },
  { id: 171, title: "Capacity To Ship Packages Within D Days", isPremium: false, difficulty: "Medium", frequency: 26.6263, status: "Not Completed", starred: false },
  { id: 172, title: "Max Sum of Rectangle No Larger Than K", isPremium: false, difficulty: "Hard", frequency: 25.9837, status: "Not Completed", starred: false },
  { id: 173, title: "Max Area of Island", isPremium: false, difficulty: "Medium", frequency: 25.9623, status: "Not Completed", starred: false },
  { id: 174, title: "Shortest Word Distance", isPremium: true, difficulty: "Easy", frequency: 25.7592, status: "Not Completed", starred: false },
  { id: 175, title: "The kth Factor of n", isPremium: false, difficulty: "Medium", frequency: 25.7592, status: "Not Completed", starred: false },
  { id: 176, title: "Rearrange Characters to Make Target String", isPremium: false, difficulty: "Easy", frequency: 25.7592, status: "Not Completed", starred: false },
  { id: 177, title: "Reverse Pairs", isPremium: false, difficulty: "Hard", frequency: 25.6173, status: "Not Completed", starred: false },
  { id: 178, title: "First Missing Positive", isPremium: false, difficulty: "Hard", frequency: 25.4772, status: "Not Completed", starred: false },
  { id: 179, title: "Push Dominoes", isPremium: false, difficulty: "Medium", frequency: 25.4772, status: "Not Completed", starred: false },
  { id: 180, title: "Find Winner on a Tic Tac Toe Game", isPremium: false, difficulty: "Easy", frequency: 25.4772, status: "Not Completed", starred: false },
  { id: 181, title: "Search a 2D Matrix", isPremium: false, difficulty: "Medium", frequency: 25.0299, status: "Not Completed", starred: false },
  { id: 182, title: "Rabbits in Forest", isPremium: false, difficulty: "Medium", frequency: 24.9931, status: "Not Completed", starred: false },
  { id: 183, title: "Shortest Path Visiting All Nodes", isPremium: false, difficulty: "Hard", frequency: 24.9931, status: "Not Completed", starred: false },
  { id: 184, title: "Minimum Cost to Cut a Stick", isPremium: false, difficulty: "Hard", frequency: 24.6726, status: "Not Completed", starred: false },
  { id: 185, title: "Decode Ways", isPremium: false, difficulty: "Medium", frequency: 24.4712, status: "Not Completed", starred: false },
  { id: 186, title: "Unique Number of Occurrences", isPremium: false, difficulty: "Easy", frequency: 24.4299, status: "Not Completed", starred: false },
  { id: 187, title: "Gas Station", isPremium: false, difficulty: "Medium", frequency: 24.4174, status: "Not Completed", starred: false },
  { id: 188, title: "Jump Game V", isPremium: false, difficulty: "Hard", frequency: 24.4174, status: "Not Completed", starred: false },
  { id: 189, title: "Next Greater Element I", isPremium: false, difficulty: "Easy", frequency: 24.3059, status: "Not Completed", starred: false },
  { id: 190, title: "Shortest Path in a Grid with Obstacles Elimination", isPremium: false, difficulty: "Hard", frequency: 24.3059, status: "Not Completed", starred: false },
  { id: 191, title: "Decode String", isPremium: false, difficulty: "Medium", frequency: 24.2782, status: "Not Completed", starred: false },
  { id: 192, title: "Unique Paths", isPremium: false, difficulty: "Medium", frequency: 24.1998, status: "Not Completed", starred: false },
  { id: 193, title: "Binary Tree Right Side View", isPremium: false, difficulty: "Medium", frequency: 24.1406, status: "Not Completed", starred: false },
  { id: 194, title: "Reverse Linked List II", isPremium: false, difficulty: "Medium", frequency: 24.1387, status: "Not Completed", starred: false },
  { id: 195, title: "Min Stack", isPremium: false, difficulty: "Medium", frequency: 23.9141, status: "Not Completed", starred: false },
  { id: 196, title: "4Sum", isPremium: false, difficulty: "Medium", frequency: 23.8879, status: "Not Completed", starred: false },
  { id: 197, title: "Longest Consecutive Sequence", isPremium: false, difficulty: "Medium", frequency: 23.8238, status: "Not Completed", starred: false },
  { id: 198, title: "Serialize and Deserialize BST", isPremium: false, difficulty: "Medium", frequency: 23.687, status: "Not Completed", starred: false },
  { id: 199, title: "Search in Rotated Sorted Array", isPremium: false, difficulty: "Medium", frequency: 23.6618, status: "Not Completed", starred: false },
  { id: 200, title: "Best Time to Buy and Sell Stock IV", isPremium: false, difficulty: "Hard", frequency: 23.6439, status: "Not Completed", starred: false },
  { id: 201, title: "Find First and Last Position of Element in Sorted Array", isPremium: false, difficulty: "Medium", frequency: 23.5802, status: "Not Completed", starred: false },
  { id: 202, title: "3Sum", isPremium: false, difficulty: "Medium", frequency: 23.5381, status: "Not Completed", starred: false },
  { id: 203, title: "Shortest Bridge", isPremium: false, difficulty: "Medium", frequency: 23.5284, status: "Not Completed", starred: false },
  { id: 204, title: "Most Beautiful Item for Each Query", isPremium: false, difficulty: "Medium", frequency: 23.4546, status: "Not Completed", starred: false },
  { id: 205, title: "Decode the Slanted Ciphertext", isPremium: false, difficulty: "Medium", frequency: 23.4546, status: "Not Completed", starred: false },
  { id: 206, title: "Shortest Impossible Sequence of Rolls", isPremium: false, difficulty: "Hard", frequency: 23.4546, status: "Not Completed", starred: false },
  { id: 207, title: "Maximum Product Subarray", isPremium: false, difficulty: "Medium", frequency: 23.4116, status: "Not Completed", starred: false },
  { id: 208, title: "Flood Fill", isPremium: false, difficulty: "Easy", frequency: 23.3166, status: "Not Completed", starred: false },
  { id: 209, title: "Pacific Atlantic Water Flow", isPremium: false, difficulty: "Medium", frequency: 23.3085, status: "Not Completed", starred: false },
  { id: 210, title: "Design Hit Counter", isPremium: true, difficulty: "Medium", frequency: 22.9524, status: "Not Completed", starred: false },
  { id: 211, title: "Top K Frequent Words", isPremium: false, difficulty: "Medium", frequency: 22.9024, status: "Not Completed", starred: false },
  { id: 212, title: "Lowest Common Ancestor of a Binary Tree III", isPremium: true, difficulty: "Medium", frequency: 22.8595, status: "Not Completed", starred: false },
  { id: 213, title: "Sliding Window Median", isPremium: false, difficulty: "Hard", frequency: 22.7875, status: "Not Completed", starred: false },
  { id: 214, title: "Validate Binary Search Tree", isPremium: false, difficulty: "Medium", frequency: 22.7734, status: "Not Completed", starred: false },
  { id: 215, title: "Find the Duplicate Number", isPremium: false, difficulty: "Medium", frequency: 22.7339, status: "Not Completed", starred: false },
  { id: 216, title: "Product of Array Except Self", isPremium: false, difficulty: "Medium", frequency: 22.7322, status: "Not Completed", starred: false },
  { id: 217, title: "Valid Anagram", isPremium: false, difficulty: "Easy", frequency: 22.6983, status: "Not Completed", starred: false },
  { id: 218, title: "All O`one Data Structure", isPremium: false, difficulty: "Hard", frequency: 22.5746, status: "Not Completed", starred: false },
  { id: 219, title: "Minimum Swaps to Group All 1's Together", isPremium: true, difficulty: "Medium", frequency: 22.5746, status: "Not Completed", starred: false },
  { id: 220, title: "Tuple with Same Product", isPremium: false, difficulty: "Medium", frequency: 22.5746, status: "Not Completed", starred: false },
  { id: 221, title: "Exclusive Time of Functions", isPremium: false, difficulty: "Medium", frequency: 22.4815, status: "Not Completed", starred: false },
  { id: 222, title: "Largest Time for Given Digits", isPremium: false, difficulty: "Medium", frequency: 22.4815, status: "Not Completed", starred: false },
  { id: 223, title: "Number of Visible People in a Queue", isPremium: false, difficulty: "Hard", frequency: 22.4815, status: "Not Completed", starred: false },
  { id: 224, title: "Diameter of Binary Tree", isPremium: false, difficulty: "Easy", frequency: 22.305, status: "Not Completed", starred: false },
  { id: 225, title: "Container With Most Water", isPremium: false, difficulty: "Medium", frequency: 22.1736, status: "Not Completed", starred: false },
  { id: 226, title: "Design Search Autocomplete System", isPremium: true, difficulty: "Hard", frequency: 22.1174, status: "Not Completed", starred: false },
  { id: 227, title: "Maximum Twin Sum of a Linked List", isPremium: false, difficulty: "Medium", frequency: 22.1174, status: "Not Completed", starred: false },
  { id: 228, title: "Permutations", isPremium: false, difficulty: "Medium", frequency: 22.0367, status: "Not Completed", starred: false },
  { id: 229, title: "Coin Change II", isPremium: false, difficulty: "Medium", frequency: 21.999, status: "Not Completed", starred: false },
  { id: 230, title: "Best Time to Buy and Sell Stock III", isPremium: false, difficulty: "Hard", frequency: 21.9623, status: "Not Completed", starred: false },
  { id: 231, title: "Longest Common Prefix", isPremium: false, difficulty: "Easy", frequency: 21.9424, status: "Not Completed", starred: false },
  { id: 232, title: "Two Sum IV - Input is a BST", isPremium: false, difficulty: "Easy", frequency: 21.622, status: "Not Completed", starred: false },
  { id: 233, title: "Rotate Image", isPremium: false, difficulty: "Medium", frequency: 21.5744, status: "Not Completed", starred: false },
  { id: 234, title: "Count Binary Substrings", isPremium: false, difficulty: "Easy", frequency: 21.5744, status: "Not Completed", starred: false },
  { id: 235, title: "Delete Nodes And Return Forest", isPremium: false, difficulty: "Medium", frequency: 21.3862, status: "Not Completed", starred: false },
  { id: 236, title: "Remove All Adjacent Duplicates In String", isPremium: false, difficulty: "Easy", frequency: 21.1364, status: "Not Completed", starred: false },
  { id: 237, title: "Longest Increasing Path in a Matrix", isPremium: false, difficulty: "Hard", frequency: 21.0655, status: "Not Completed", starred: false },
  { id: 238, title: "N-ary Tree Level Order Traversal", isPremium: false, difficulty: "Medium", frequency: 21.0493, status: "Not Completed", starred: false },
  { id: 239, title: "Max Points on a Line", isPremium: false, difficulty: "Hard", frequency: 20.8625, status: "Not Completed", starred: false },
  { id: 240, title: "Range Module", isPremium: false, difficulty: "Hard", frequency: 20.7845, status: "Not Completed", starred: false },
  { id: 241, title: "Jump Game II", isPremium: false, difficulty: "Medium", frequency: 20.6912, status: "Not Completed", starred: false },
  { id: 242, title: "Daily Temperatures", isPremium: false, difficulty: "Medium", frequency: 20.6549, status: "Not Completed", starred: false },
  { id: 243, title: "01 Matrix", isPremium: false, difficulty: "Medium", frequency: 20.5452, status: "Not Completed", starred: false },
  { id: 244, title: "First Unique Character in a String", isPremium: false, difficulty: "Easy", frequency: 20.4803, status: "Not Completed", starred: false },
  { id: 245, title: "Bus Routes", isPremium: false, difficulty: "Hard", frequency: 20.383, status: "Not Completed", starred: false },
  { id: 246, title: "Binary String With Substrings Representing 1 To N", isPremium: false, difficulty: "Medium", frequency: 20.3296, status: "Not Completed", starred: false },
  { id: 247, title: "Alien Dictionary", isPremium: true, difficulty: "Hard", frequency: 20.2765, status: "Not Completed", starred: false },
  { id: 248, title: "Trapping Rain Water II", isPremium: false, difficulty: "Hard", frequency: 19.8963, status: "Not Completed", starred: false },
  { id: 249, title: "Longest Repeating Character Replacement", isPremium: false, difficulty: "Medium", frequency: 19.8963, status: "Not Completed", starred: false },
  { id: 250, title: "Ransom Note", isPremium: false, difficulty: "Easy", frequency: 19.8147, status: "Not Completed", starred: false },
  { id: 251, title: "Stone Game V", isPremium: false, difficulty: "Hard", frequency: 19.6872, status: "Not Completed", starred: false },
  { id: 252, title: "N-Queens", isPremium: false, difficulty: "Hard", frequency: 19.3825, status: "Not Completed", starred: false },
  { id: 253, title: "Find All Anagrams in a String", isPremium: false, difficulty: "Medium", frequency: 19.3228, status: "Not Completed", starred: false },
  { id: 254, title: "Cousins in Binary Tree", isPremium: false, difficulty: "Easy", frequency: 19.2754, status: "Not Completed", starred: false },
  { id: 255, title: "Accounts Merge", isPremium: false, difficulty: "Medium", frequency: 19.088, status: "Not Completed", starred: false },
  { id: 256, title: "Construct Target Array With Multiple Sums", isPremium: false, difficulty: "Hard", frequency: 19.088, status: "Not Completed", starred: false },
  { id: 257, title: "Maximal Rectangle", isPremium: false, difficulty: "Hard", frequency: 18.9959, status: "Not Completed", starred: false },
  { id: 258, title: "Number of Longest Increasing Subsequence", isPremium: false, difficulty: "Medium", frequency: 18.9445, status: "Not Completed", starred: false },
  { id: 259, title: "Max Stack", isPremium: true, difficulty: "Hard", frequency: 18.8344, status: "Not Completed", starred: false },
  { id: 260, title: "Spiral Matrix II", isPremium: false, difficulty: "Medium", frequency: 18.7633, status: "Not Completed", starred: false },
  { id: 261, title: "Restore IP Addresses", isPremium: false, difficulty: "Medium", frequency: 18.7251, status: "Not Completed", starred: false },
  { id: 262, title: "Split Array Largest Sum", isPremium: false, difficulty: "Hard", frequency: 18.7251, status: "Not Completed", starred: false },
  { id: 263, title: "Shortest Unsorted Continuous Subarray", isPremium: false, difficulty: "Medium", frequency: 18.6643, status: "Not Completed", starred: false },
  { id: 264, title: "Construct Binary Tree from Preorder and Inorder Traversal", isPremium: false, difficulty: "Medium", frequency: 18.6148, status: "Not Completed", starred: false },
  { id: 265, title: "Jump Game IV", isPremium: false, difficulty: "Hard", frequency: 18.588, status: "Not Completed", starred: false },
  { id: 266, title: "Flip String to Monotone Increasing", isPremium: false, difficulty: "Medium", frequency: 18.5275, status: "Not Completed", starred: false },
  { id: 267, title: "Avoid Flood in The City", isPremium: false, difficulty: "Medium", frequency: 18.5275, status: "Not Completed", starred: false },
  { id: 268, title: "Maximum Subarray Min-Product", isPremium: false, difficulty: "Medium", frequency: 18.5275, status: "Not Completed", starred: false },
  { id: 269, title: "Process Tasks Using Servers", isPremium: false, difficulty: "Medium", frequency: 18.5275, status: "Not Completed", starred: false },
  { id: 270, title: "Count Subarrays With Score Less Than K", isPremium: false, difficulty: "Hard", frequency: 18.5275, status: "Not Completed", starred: false },
  { id: 271, title: "Divide Intervals Into Minimum Number of Groups", isPremium: false, difficulty: "Medium", frequency: 18.5275, status: "Not Completed", starred: false },
  { id: 272, title: "Serialize and Deserialize N-ary Tree", isPremium: true, difficulty: "Hard", frequency: 18.3486, status: "Not Completed", starred: false },
  { id: 273, title: "Task Scheduler", isPremium: false, difficulty: "Medium", frequency: 18.1911, status: "Not Completed", starred: false },
  { id: 274, title: "Minimum Score Triangulation of Polygon", isPremium: false, difficulty: "Medium", frequency: 18.0018, status: "Not Completed", starred: false },
  { id: 275, title: "Delete and Earn", isPremium: false, difficulty: "Medium", frequency: 17.8893, status: "Not Completed", starred: false },
  { id: 276, title: "Sliding Puzzle", isPremium: false, difficulty: "Hard", frequency: 17.8893, status: "Not Completed", starred: false },
  { id: 277, title: "Remove Stones to Minimize the Total", isPremium: false, difficulty: "Medium", frequency: 17.8893, status: "Not Completed", starred: false },
  { id: 278, title: "Find Original Array From Doubled Array", isPremium: false, difficulty: "Medium", frequency: 17.8893, status: "Not Completed", starred: false },
  { id: 279, title: "Swap Adjacent in LR String", isPremium: false, difficulty: "Medium", frequency: 17.6689, status: "Not Completed", starred: false },
  { id: 280, title: "Range Sum Query 2D - Immutable", isPremium: false, difficulty: "Medium", frequency: 17.6429, status: "Not Completed", starred: false },
  { id: 281, title: "Pascal's Triangle", isPremium: false, difficulty: "Easy", frequency: 17.5763, status: "Not Completed", starred: false },
  { id: 282, title: "Partition to K Equal Sum Subsets", isPremium: false, difficulty: "Medium", frequency: 17.5652, status: "Not Completed", starred: false },
  { id: 283, title: "Edit Distance", isPremium: false, difficulty: "Hard", frequency: 17.5074, status: "Not Completed", starred: false },
  { id: 284, title: "Is Graph Bipartite?", isPremium: false, difficulty: "Medium", frequency: 17.5074, status: "Not Completed", starred: false },
  { id: 285, title: "Minimum Moves to Equal Array Elements II", isPremium: false, difficulty: "Medium", frequency: 17.4543, status: "Not Completed", starred: false },
  { id: 286, title: "Critical Connections in a Network", isPremium: false, difficulty: "Hard", frequency: 17.4543, status: "Not Completed", starred: false },
  { id: 287, title: "Number of Good Ways to Split a String", isPremium: false, difficulty: "Medium", frequency: 17.4543, status: "Not Completed", starred: false },
  { id: 288, title: "Car Pooling", isPremium: false, difficulty: "Medium", frequency: 17.3884, status: "Not Completed", starred: false },
  { id: 289, title: "Open the Lock", isPremium: false, difficulty: "Medium", frequency: 17.2711, status: "Not Completed", starred: false },
  { id: 290, title: "Adding Spaces to a String", isPremium: false, difficulty: "Medium", frequency: 17.0416, status: "Not Completed", starred: false },
  { id: 291, title: "Snapshot Array", isPremium: false, difficulty: "Medium", frequency: 16.9293, status: "Not Completed", starred: false },
  { id: 292, title: "Set Matrix Zeroes", isPremium: false, difficulty: "Medium", frequency: 16.9228, status: "Not Completed", starred: false },
  { id: 293, title: "Maximum Product of Word Lengths", isPremium: false, difficulty: "Medium", frequency: 16.843, status: "Not Completed", starred: false },
  { id: 294, title: "All Possible Full Binary Trees", isPremium: false, difficulty: "Medium", frequency: 16.843, status: "Not Completed", starred: false },
  { id: 295, title: "Maximum Swap", isPremium: false, difficulty: "Medium", frequency: 16.6494, status: "Not Completed", starred: false },
  { id: 296, title: "Count and Say", isPremium: false, difficulty: "Medium", frequency: 16.6455, status: "Not Completed", starred: false },
  { id: 297, title: "Optimal Account Balancing", isPremium: true, difficulty: "Hard", frequency: 16.6017, status: "Not Completed", starred: false },
  { id: 298, title: "Best Poker Hand", isPremium: false, difficulty: "Easy", frequency: 16.6017, status: "Not Completed", starred: false },
  { id: 299, title: "Online Stock Span", isPremium: false, difficulty: "Medium", frequency: 16.5506, status: "Not Completed", starred: false },
  { id: 300, title: "Fruit Into Baskets", isPremium: false, difficulty: "Medium", frequency: 16.5506, status: "Not Completed", starred: false },
  { id: 301, title: "Department Top Three Salaries", isPremium: false, difficulty: "Hard", frequency: 16.4829, status: "Not Completed", starred: false },
  { id: 302, title: "Perfect Squares", isPremium: false, difficulty: "Medium", frequency: 16.4719, status: "Not Completed", starred: false },
  { id: 303, title: "Non-decreasing Array", isPremium: false, difficulty: "Medium", frequency: 16.3908, status: "Not Completed", starred: false },
  { id: 304, title: "3Sum Closest", isPremium: false, difficulty: "Medium", frequency: 16.3659, status: "Not Completed", starred: false },
  { id: 305, title: "Design Browser History", isPremium: false, difficulty: "Medium", frequency: 16.3493, status: "Not Completed", starred: false },
  { id: 306, title: "Design File System", isPremium: true, difficulty: "Medium", frequency: 16.2761, status: "Not Completed", starred: false },
  { id: 307, title: "Find Distance in a Binary Tree", isPremium: true, difficulty: "Medium", frequency: 16.1855, status: "Not Completed", starred: false },
  { id: 308, title: "Longest Binary Subsequence Less Than or Equal to K", isPremium: false, difficulty: "Medium", frequency: 16.1855, status: "Not Completed", starred: false },
  { id: 309, title: "Keys and Rooms", isPremium: false, difficulty: "Medium", frequency: 16.1532, status: "Not Completed", starred: false },
  { id: 310, title: "Two Sum II - Input Array Is Sorted", isPremium: false, difficulty: "Medium", frequency: 16.114, status: "Not Completed", starred: false },
  { id: 311, title: "Satisfiability of Equality Equations", isPremium: false, difficulty: "Medium", frequency: 16.0961, status: "Not Completed", starred: false },
  { id: 312, title: "Triangle", isPremium: false, difficulty: "Medium", frequency: 15.9416, status: "Not Completed", starred: false },
  { id: 313, title: "Count Vowels Permutation", isPremium: false, difficulty: "Hard", frequency: 15.7911, status: "Not Completed", starred: false },
  { id: 314, title: "Maximum Product of Splitted Binary Tree", isPremium: false, difficulty: "Medium", frequency: 15.7911, status: "Not Completed", starred: false },
  { id: 315, title: "Sort Colors", isPremium: false, difficulty: "Medium", frequency: 15.6985, status: "Not Completed", starred: false },
  { id: 316, title: "Add Two Numbers II", isPremium: false, difficulty: "Medium", frequency: 15.6541, status: "Not Completed", starred: false },
  { id: 317, title: "Contains Duplicate", isPremium: false, difficulty: "Easy", frequency: 15.6385, status: "Not Completed", starred: false },
  { id: 318, title: "Find All Duplicates in an Array", isPremium: false, difficulty: "Medium", frequency: 15.4765, status: "Not Completed", starred: false },
  { id: 319, title: "Merge Two Sorted Lists", isPremium: false, difficulty: "Easy", frequency: 15.4432, status: "Not Completed", starred: false },
  { id: 320, title: "Longest Substring with At Most Two Distinct Characters", isPremium: true, difficulty: "Medium", frequency: 15.4166, status: "Not Completed", starred: false },
  { id: 321, title: "Frog Jump", isPremium: false, difficulty: "Hard", frequency: 15.4166, status: "Not Completed", starred: false },
  { id: 322, title: "Number of Matching Subsequences", isPremium: false, difficulty: "Medium", frequency: 15.4166, status: "Not Completed", starred: false },
  { id: 323, title: "Minimum Cost to Hire K Workers", isPremium: false, difficulty: "Hard", frequency: 15.4166, status: "Not Completed", starred: false },
  { id: 324, title: "Stream of Characters", isPremium: false, difficulty: "Hard", frequency: 15.4166, status: "Not Completed", starred: false },
  { id: 325, title: "Minimum Moves to Reach Target Score", isPremium: false, difficulty: "Medium", frequency: 15.4166, status: "Not Completed", starred: false },
  { id: 326, title: "Subsets", isPremium: false, difficulty: "Medium", frequency: 15.2496, status: "Not Completed", starred: false },
  { id: 327, title: "Implement Trie (Prefix Tree)", isPremium: false, difficulty: "Medium", frequency: 15.1699, status: "Not Completed", starred: false },
  { id: 328, title: "Maximal Square", isPremium: false, difficulty: "Medium", frequency: 15.1382, status: "Not Completed", starred: false },
  { id: 329, title: "Largest BST Subtree", isPremium: true, difficulty: "Medium", frequency: 15.0606, status: "Not Completed", starred: false },
  { id: 330, title: "Number of Days Between Two Dates", isPremium: false, difficulty: "Easy", frequency: 15.0606, status: "Not Completed", starred: false },
  { id: 331, title: "Leftmost Column with at Least a One", isPremium: true, difficulty: "Medium", frequency: 15.0606, status: "Not Completed", starred: false },
  { id: 332, title: "Russian Doll Envelopes", isPremium: false, difficulty: "Hard", frequency: 14.9743, status: "Not Completed", starred: false },
  { id: 333, title: "Minimum Number of Days to Make m Bouquets", isPremium: false, difficulty: "Medium", frequency: 14.9457, status: "Not Completed", starred: false },
  { id: 334, title: "Best Time to Buy and Sell Stock II", isPremium: false, difficulty: "Medium", frequency: 14.9094, status: "Not Completed", starred: false },
  { id: 335, title: "Design Add and Search Words Data Structure", isPremium: false, difficulty: "Medium", frequency: 14.8327, status: "Not Completed", starred: false },
  { id: 336, title: "Number of Islands II", isPremium: true, difficulty: "Hard", frequency: 14.7215, status: "Not Completed", starred: false },
  { id: 337, title: "IPO", isPremium: false, difficulty: "Hard", frequency: 14.7215, status: "Not Completed", starred: false },
  { id: 338, title: "Minimum Cost Tree From Leaf Values", isPremium: false, difficulty: "Medium", frequency: 14.7215, status: "Not Completed", starred: false },
  { id: 339, title: "Spiral Matrix", isPremium: false, difficulty: "Medium", frequency: 14.6616, status: "Not Completed", starred: false },
  { id: 340, title: "Nested List Weight Sum", isPremium: true, difficulty: "Medium", frequency: 14.6484, status: "Not Completed", starred: false },
  { id: 341, title: "Climbing Stairs", isPremium: false, difficulty: "Easy", frequency: 14.596, status: "Not Completed", starred: false },
  { id: 342, title: "Out of Boundary Paths", isPremium: false, difficulty: "Medium", frequency: 14.3983, status: "Not Completed", starred: false },
  { id: 343, title: "Missing Element in Sorted Array", isPremium: true, difficulty: "Medium", frequency: 14.3983, status: "Not Completed", starred: false },
  { id: 344, title: "Active Users", isPremium: true, difficulty: "Medium", frequency: 14.3983, status: "Not Completed", starred: false },
  { id: 345, title: "Palindrome Linked List", isPremium: false, difficulty: "Easy", frequency: 14.3147, status: "Not Completed", starred: false },
  { id: 346, title: "Binary Tree Level Order Traversal", isPremium: false, difficulty: "Medium", frequency: 14.2926, status: "Not Completed", starred: false },
  { id: 451, title: "Power of Four", isPremium: false, difficulty: "Easy", frequency: 1.98784, status: "Not Completed", starred: false },
  { id: 452, title: "Search Insert Position", isPremium: false, difficulty: "Easy", frequency: 1.86362, status: "Not Completed", starred: false },
  { id: 453, title: "Two Sum Less Than K", isPremium: true, difficulty: "Easy", frequency: 1.8452, status: "Not Completed", starred: false },
  { id: 454, title: "Permutations II", isPremium: false, difficulty: "Medium", frequency: 1.8021, status: "Not Completed", starred: false },
  { id: 455, title: "Sqrt(x)", isPremium: false, difficulty: "Easy", frequency: 1.7813, status: "Not Completed", starred: false },
  { id: 456, title: "Most Stones Removed with Same Row or Column", isPremium: false, difficulty: "Medium", frequency: 1.65598, status: "Not Completed", starred: false },
  { id: 457, title: "Find Customer Referee", isPremium: false, difficulty: "Easy", frequency: 1.6369, status: "Not Completed", starred: false },
  { id: 458, title: "Remove Duplicates from Sorted List", isPremium: false, difficulty: "Easy", frequency: 1.63519, status: "Not Completed", starred: false },
  { id: 459, title: "Shuffle the Array", isPremium: false, difficulty: "Easy", frequency: 1.6062, status: "Not Completed", starred: false },
  { id: 460, title: "Employees Earning More Than Their Managers", isPremium: false, difficulty: "Easy", frequency: 1.57702, status: "Not Completed", starred: false },
  { id: 461, title: "Plus One", isPremium: false, difficulty: "Easy", frequency: 1.48831, status: "Not Completed", starred: false },
  { id: 462, title: "Recyclable and Low Fat Products", isPremium: false, difficulty: "Easy", frequency: 1.4831, status: "Not Completed", starred: false },
  { id: 463, title: "Middle of the Linked List", isPremium: false, difficulty: "Easy", frequency: 1.46864, status: "Not Completed", starred: false },
  { id: 464, title: "Find All Numbers Disappeared in an Array", isPremium: false, difficulty: "Easy", frequency: 1.40478, status: "Not Completed", starred: false },
  { id: 465, title: "Reverse Words in a String III", isPremium: false, difficulty: "Easy", frequency: 1.39351, status: "Not Completed", starred: false },
  { id: 466, title: "Multiply Strings", isPremium: false, difficulty: "Medium", frequency: 1.18442, status: "Not Completed", starred: false },
  { id: 467, title: "Binary Search", isPremium: false, difficulty: "Easy", frequency: 1.16165, status: "Not Completed", starred: false },
  { id: 468, title: "Length of Last Word", isPremium: false, difficulty: "Easy", frequency: 1.146, status: "Not Completed", starred: false },
  { id: 469, title: "Minimum Size Subarray Sum", isPremium: false, difficulty: "Medium", frequency: 1.13415, status: "Not Completed", starred: false },
  { id: 470, title: "Remove Element", isPremium: false, difficulty: "Easy", frequency: 0.91574, status: "Not Completed", starred: false },
  { id: 471, title: "Intersection of Two Linked Lists", isPremium: false, difficulty: "Easy", frequency: 0.858184, status: "Not Completed", starred: false },
  { id: 472, title: "Remove Linked List Elements", isPremium: false, difficulty: "Easy", frequency: 0.857125, status: "Not Completed", starred: false },
  { id: 473, title: "Customers Who Never Order", isPremium: false, difficulty: "Easy", frequency: 0.688879, status: "Not Completed", starred: false },
  { id: 474, title: "Rectangle Overlap", isPremium: false, difficulty: "Easy", frequency: 0.590029, status: "Not Completed", starred: false },
  { id: 475, title: "Valid Palindrome", isPremium: false, difficulty: "Easy", frequency: 0.355141, status: "Not Completed", starred: false },
  { id: 476, title: "Palindrome Number", isPremium: false, difficulty: "Easy", frequency: 7.96144, status: "Not Completed", starred: false },
  { id: 477, title: "Insert Interval", isPremium: false, difficulty: "Medium", frequency: 2.36219, status: "Not Completed", starred: false },
  { id: 478, title: "Find Minimum in Rotated Sorted Array", isPremium: false, difficulty: "Medium", frequency: 9.30869, status: "Not Completed", starred: false },
  { id: 479, title: "Excel Sheet Column Title", isPremium: false, difficulty: "Easy", frequency: 2.5692, status: "Not Completed", starred: false },
  { id: 480, title: "Majority Element", isPremium: false, difficulty: "Easy", frequency: 9.48009, status: "Not Completed", starred: false },
  { id: 481, title: "Consecutive Numbers", isPremium: false, difficulty: "Medium", frequency: 6.82667, status: "Not Completed", starred: false },
  { id: 482, title: "Department Highest Salary", isPremium: false, difficulty: "Medium", frequency: 2.44257, status: "Not Completed", starred: false },
  { id: 483, title: "Rotate Array", isPremium: false, difficulty: "Medium", frequency: 8.55056, status: "Not Completed", starred: false },
  { id: 484, title: "Reverse Bits", isPremium: false, difficulty: "Easy", frequency: 7.88937, status: "Not Completed", starred: false },
  { id: 485, title: "Number of 1 Bits", isPremium: false, difficulty: "Easy", frequency: 8.67044, status: "Not Completed", starred: false },
  { id: 486, title: "Valid Phone Numbers", isPremium: false, difficulty: "Easy", frequency: 9.23742, status: "Not Completed", starred: false },
  { id: 487, title: "Delete Duplicate Emails", isPremium: false, difficulty: "Easy", frequency: 4.29197, status: "Not Completed", starred: false },
  { id: 488, title: "Rising Temperature", isPremium: false, difficulty: "Easy", frequency: 3.93585, status: "Not Completed", starred: false },
  { id: 489, title: "Sort List", isPremium: false, difficulty: "Medium", frequency: 5.46359, status: "Not Completed", starred: false },
  { id: 490, title: "The Skyline Problem", isPremium: false, difficulty: "Hard", frequency: 6.16011, status: "Not Completed", starred: false },
  { id: 491, title: "Trips and Users", isPremium: false, difficulty: "Hard", frequency: 5.94712, status: "Not Completed", starred: false },
  { id: 492, title: "Move Zeroes", isPremium: false, difficulty: "Easy", frequency: 3.58278, status: "Not Completed", starred: false },
  { id: 493, title: "First Bad Version", isPremium: false, difficulty: "Easy", frequency: 5.96322, status: "Not Completed", starred: false },
  { id: 494, title: "Sum Root to Leaf Numbers", isPremium: false, difficulty: "Medium", frequency: 3.09701, status: "Not Completed", starred: false },
  { id: 495, title: "Surrounded Regions", isPremium: false, difficulty: "Medium", frequency: 9.20236, status: "Not Completed", starred: false },
  { id: 496, title: "Clone Graph", isPremium: false, difficulty: "Medium", frequency: 7.2969, status: "Not Completed", starred: false },
  { id: 497, title: "Linked List Cycle", isPremium: false, difficulty: "Easy", frequency: 5.56001, status: "Not Completed", starred: false },
  { id: 498, title: "Linked List Cycle II", isPremium: false, difficulty: "Medium", frequency: 6.77774, status: "Not Completed", starred: false },
  { id: 499, title: "Reorder List", isPremium: false, difficulty: "Medium", frequency: 9.42272, status: "Not Completed", starred: false },
  { id: 500, title: "Binary Tree Inorder Traversal", isPremium: false, difficulty: "Easy", frequency: 6.36691, status: "Not Completed", starred: false },
  { id: 501, title: "Maximum Depth of Binary Tree", isPremium: false, difficulty: "Easy", frequency: 3.41217, status: "Not Completed", starred: false },
  { id: 502, title: "Construct Binary Tree from Inorder and Postorder Traversal", isPremium: false, difficulty: "Medium", frequency: 3.28802, status: "Not Completed", starred: false },
  { id: 503, title: "Add Binary", isPremium: false, difficulty: "Easy", frequency: 2.95509, status: "Not Completed", starred: false },
  { id: 504, title: "Maximize Distance to Closest Person", isPremium: false, difficulty: "Medium", frequency: 7.8531, status: "Not Completed", starred: false },
  { id: 505, title: "Shortest Subarray with Sum at Least K", isPremium: false, difficulty: "Hard", frequency: 8.23186, status: "Not Completed", starred: false },
  { id: 506, title: "Transpose Matrix", isPremium: false, difficulty: "Easy", frequency: 8.03794, status: "Not Completed", starred: false },
  { id: 507, title: "Squares of a Sorted Array", isPremium: false, difficulty: "Easy", frequency: 7.6821, status: "Not Completed", starred: false },
  { id: 508, title: "Random Pick with Weight", isPremium: false, difficulty: "Medium", frequency: 4.33911, status: "Not Completed", starred: false },
  { id: 509, title: "Possible Bipartition", isPremium: false, difficulty: "Medium", frequency: 6.2725, status: "Not Completed", starred: false },
  { id: 510, title: "Sort an Array", isPremium: false, difficulty: "Medium", frequency: 6.68445, status: "Not Completed", starred: false },
  { id: 511, title: "Unique Email Addresses", isPremium: false, difficulty: "Easy", frequency: 3.65207, status: "Not Completed", starred: false },
  { id: 512, title: "Minimum Falling Path Sum", isPremium: false, difficulty: "Medium", frequency: 9.19572, status: "Not Completed", starred: false },
  { id: 513, title: "Valid Mountain Array", isPremium: false, difficulty: "Easy", frequency: 3.3037, status: "Not Completed", starred: false },
  { id: 514, title: "Verifying an Alien Dictionary", isPremium: false, difficulty: "Easy", frequency: 8.3894, status: "Not Completed", starred: false },
  { id: 515, title: "Fibonacci Number", isPremium: false, difficulty: "Easy", frequency: 4.1873, status: "Not Completed", starred: false },
  { id: 516, title: "Replace Elements with Greatest Element on Right Side", isPremium: false, difficulty: "Easy", frequency: 2.18838, status: "Not Completed", starred: false },
  { id: 517, title: "Longest Common Subsequence", isPremium: false, difficulty: "Medium", frequency: 8.98071, status: "Not Completed", starred: false },
  { id: 518, title: "Sort the Matrix Diagonally", isPremium: false, difficulty: "Medium", frequency: 9.11345, status: "Not Completed", starred: false },
  { id: 519, title: "Invalid Transactions", isPremium: false, difficulty: "Medium", frequency: 5.89617, status: "Not Completed", starred: false },
  { id: 520, title: "Reformat Department Table", isPremium: false, difficulty: "Easy", frequency: 8.13372, status: "Not Completed", starred: false },
  { id: 521, title: "Where Will the Ball Fall", isPremium: false, difficulty: "Medium", frequency: 2.5692, status: "Not Completed", starred: false },
  { id: 522, title: "Maximum Profit in Job Scheduling", isPremium: false, difficulty: "Hard", frequency: 8.3894, status: "Not Completed", starred: false },
  { id: 523, title: "Minimum Remove to Make Valid Parentheses", isPremium: false, difficulty: "Medium", frequency: 8.03794, status: "Not Completed", starred: false },
  { id: 524, title: "Count Square Submatrices with All Ones", isPremium: false, difficulty: "Medium", frequency: 6.33026, status: "Not Completed", starred: false },
  { id: 525, title: "Jump Game III", isPremium: false, difficulty: "Medium", frequency: 5.2654, status: "Not Completed", starred: false },
  { id: 526, title: "Maximum Number of Events That Can Be Attended", isPremium: false, difficulty: "Medium", frequency: 8.87544, status: "Not Completed", starred: false },
  { id: 527, title: "How Many Numbers Are Smaller Than the Current Number", isPremium: false, difficulty: "Easy", frequency: 4.10177, status: "Not Completed", starred: false },
  { id: 528, title: "Find the Distance Value Between Two Arrays", isPremium: false, difficulty: "Easy", frequency: 7.1927, status: "Not Completed", starred: false },
  { id: 529, title: "Substrings of Size Three with Distinct Characters", isPremium: false, difficulty: "Easy", frequency: 5.65411, status: "Not Completed", starred: false },
  { id: 530, title: "Sum of All Subset XOR Totals", isPremium: false, difficulty: "Easy", frequency: 8.87544, status: "Not Completed", starred: false },
  { id: 531, title: "Number of Enclaves", isPremium: false, difficulty: "Medium", frequency: 4.15654, status: "Not Completed", starred: false },
  { id: 532, title: "Pairs of Songs With Total Durations Divisible by 60", isPremium: false, difficulty: "Medium", frequency: 3.01616, status: "Not Completed", starred: false },
  { id: 533, title: "Partition Array Into Two Arrays to Minimize Sum Difference", isPremium: false, difficulty: "Hard", frequency: 5.79688, status: "Not Completed", starred: false },
  { id: 534, title: "Optimal Partition of String", isPremium: false, difficulty: "Medium", frequency: 7.34701, status: "Not Completed", starred: false },
  { id: 535, title: "Count Nodes Equal to Average of Subtree", isPremium: false, difficulty: "Medium", frequency: 10.0605, status: "Not Completed", starred: false },
  { id: 536, title: "Construct Binary Search Tree from Preorder Traversal", isPremium: false, difficulty: "Medium", frequency: 4.45085, status: "Not Completed", starred: false },
  { id: 537, title: "Last Stone Weight", isPremium: false, difficulty: "Easy", frequency: 3.90623, status: "Not Completed", starred: false }
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
        p: { xs: 2, sm: 3 }, 
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

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(3, 1fr)' 
          }, 
          gap: { xs: 3, sm: 2 } 
        }}>
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

      <Box sx={{ 
        mb: 4, 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' }, 
        gap: 2, 
        alignItems: { xs: 'stretch', sm: 'center' },
        justifyContent: 'center',
        px: { xs: 1, sm: 0 }
      }}>
        <TextField
          sx={{ 
            width: { xs: '100%', sm: 'auto' },
            flexGrow: { sm: 1 },
            maxWidth: { sm: 400 },
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

        <FormControl sx={{ 
          width: { xs: '100%', sm: 'auto' },
          minWidth: { xs: '100%', sm: 120 }
        }}>
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
            width: { xs: '100%', sm: 'auto' },
            justifyContent: { xs: 'flex-start', sm: 'center' },
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
          boxShadow: 3,
          overflowX: 'auto'
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ 
                color: darkMode ? '#ffffff' : '#333333',
                whiteSpace: 'nowrap',
                minWidth: { xs: '60px', sm: 'auto' }
              }}>Status</TableCell>
              <TableCell sx={{ 
                color: darkMode ? '#ffffff' : '#333333',
                whiteSpace: 'nowrap',
                minWidth: { xs: '60px', sm: 'auto' }
              }}>Sl.No</TableCell>
              <TableCell sx={{ 
                color: darkMode ? '#ffffff' : '#333333',
                minWidth: { xs: '200px', sm: 'auto' }
              }}>Title</TableCell>
              <TableCell sx={{ 
                color: darkMode ? '#ffffff' : '#333333',
                whiteSpace: 'nowrap',
                minWidth: { xs: '80px', sm: 'auto' }
              }}>Premium</TableCell>
              <TableCell sx={{ 
                color: darkMode ? '#ffffff' : '#333333',
                whiteSpace: 'nowrap',
                minWidth: { xs: '100px', sm: 'auto' }
              }}>Difficulty</TableCell>
              <TableCell 
                sx={{ 
                  color: darkMode ? '#ffffff' : '#333333',
                  cursor: 'pointer',
                  userSelect: 'none',
                  whiteSpace: 'nowrap',
                  minWidth: { xs: '120px', sm: 'auto' }
                }}
                onClick={handleSortClick}
              >
                Frequency {sortOrder === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
              </TableCell>
              <TableCell sx={{ 
                color: darkMode ? '#ffffff' : '#333333',
                whiteSpace: 'nowrap',
                minWidth: { xs: '80px', sm: 'auto' }
              }}>Solution</TableCell>
              <TableCell sx={{ 
                color: darkMode ? '#ffffff' : '#333333',
                whiteSpace: 'nowrap',
                minWidth: { xs: '60px', sm: 'auto' }
              }}>Star</TableCell>
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
                <TableCell sx={{ 
                  color: darkMode ? '#ffffff' : '#333333',
                  whiteSpace: 'nowrap'
                }}>
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
                <TableCell sx={{ 
                  color: darkMode ? '#ffffff' : '#333333',
                  whiteSpace: 'nowrap'
                }}>{question.id}</TableCell>
                <TableCell sx={{ 
                  color: darkMode ? '#ffffff' : '#333333',
                  minWidth: { xs: '200px', sm: 'auto' }
                }}>
                  {highlightText(question.title, searchTerm)}
                </TableCell>
                <TableCell sx={{ 
                  color: darkMode ? '#ffffff' : '#333333',
                  whiteSpace: 'nowrap'
                }}>
                  {question.isPremium ? 'Y' : 'N'}
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      color: question.difficulty === 'Easy' ? '#4caf50' :
                             question.difficulty === 'Medium' ? '#ffa726' :
                             '#f44336',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {question.difficulty}
                  </Box>
                </TableCell>
                <TableCell sx={{ 
                  color: darkMode ? '#ffffff' : '#333333',
                  whiteSpace: 'nowrap'
                }}>
                  {question.frequency.toFixed(2)}%
                </TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>
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
                <TableCell sx={{ whiteSpace: 'nowrap' }}>
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