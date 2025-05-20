export interface Question {
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'Not Started' | 'In Progress' | 'Completed';
  url?: string;
  solution?: {
    github?: string;
    youtube?: string;
  };
  starred?: boolean;
}

export interface Pattern {
  name: string;
  progress: {
    completed: number;
    total: number;
  };
  questions: Question[];
}

export const patterns: Pattern[] = [
  {
    name: 'Arrays',
    progress: { completed: 5, total: 5 },
    questions: [
      { name: 'Move Zeroes', difficulty: 'Easy', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Majority Element', difficulty: 'Easy', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Product of Array Except Self', difficulty: 'Medium', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Best Time to Buy and Sell Stock II', difficulty: 'Medium', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'First Missing Positive', difficulty: 'Hard', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Strings',
    progress: { completed: 3, total: 3 },
    questions: [
      { name: 'Is Subsequence', difficulty: 'Easy', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Valid Palindrome', difficulty: 'Easy', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Reverse Words in a String', difficulty: 'Medium', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Bit Manipulation',
    progress: { completed: 3, total: 3 },
    questions: [
      { name: 'Single Number', difficulty: 'Easy', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Counting Bits', difficulty: 'Easy', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Single Number III', difficulty: 'Medium', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Hash Tables',
    progress: { completed: 4, total: 5 },
    questions: [
      { name: 'Isomorphic Strings', difficulty: 'Easy', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Contains Duplicate II', difficulty: 'Easy', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Group Anagrams', difficulty: 'Medium', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Encode and Decode TinyURL', difficulty: 'Medium', status: 'Completed', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Longest Consecutive Sequence', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Two Pointers',
    progress: { completed: 0, total: 4 },
    questions: [
      { name: 'Two Sum II - Input Array Is Sorted', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Container With Most Water', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: '3Sum', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Trapping Rain Water', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Prefix Sum',
    progress: { completed: 0, total: 3 },
    questions: [
      { name: 'Range Sum Query - Immutable', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Subarray Sum Equals K', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Contiguous Array', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Sliding Window - Fixed Size',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Find All Anagrams in a String', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Permutation in String', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Sliding Window - Dynamic Size',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Minimum Window Substring', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Kadane\'s Algorithm',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Maximum Subarray', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Maximum Product Subarray', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Matrix (2D Array)',
    progress: { completed: 0, total: 3 },
    questions: [
      { name: 'Spiral Matrix', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Rotate Image', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Set Matrix Zeroes', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Linked List',
    progress: { completed: 0, total: 5 },
    questions: [
      { name: 'Intersection of Two Linked Lists', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Remove Nth Node From End of List', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Swap Nodes in Pairs', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Rotate List', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Add Two Numbers', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'LinkedList In-place Reversal',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Reverse Linked List', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Reverse Nodes in k-Group', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Fast and Slow Pointers',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Middle of the Linked List', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Linked List Cycle II', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Stacks',
    progress: { completed: 0, total: 4 },
    questions: [
      { name: 'Valid Parentheses', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Min Stack', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Remove Duplicate Letters', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Longest Valid Parentheses', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Monotonic Stack',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Daily Temperatures', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Largest Rectangle in Histogram', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Monotonic Queue',
    progress: { completed: 0, total: 1 },
    questions: [
      { name: 'Sliding Window Maximum', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Bucket Sort',
    progress: { completed: 0, total: 1 },
    questions: [
      { name: 'Top K Frequent Words', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Recursion',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Merge Two Sorted Lists', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Decode String', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Divide and Conquer',
    progress: { completed: 0, total: 1 },
    questions: [
      { name: 'Convert Sorted List to Binary Search Tree', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Merge Sort',
    progress: { completed: 0, total: 1 },
    questions: [
      { name: 'Sort List', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'QuickSort / QuickSelect',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Sort Colors', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Kth Largest Element in an Array', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Binary Search',
    progress: { completed: 0, total: 6 },
    questions: [
      { name: 'Find First and Last Position of Element in Sorted Array', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Search in Rotated Sorted Array', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Find Peak Element', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Koko Eating Bananas', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Search a 2D Matrix', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Median of Two Sorted Arrays', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Backtracking',
    progress: { completed: 0, total: 5 },
    questions: [
      { name: 'Generate Parentheses', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Permutations', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Subsets', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Palindrome Partitioning', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'N-Queens', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Tree Traversal - Level Order',
    progress: { completed: 0, total: 3 },
    questions: [
      { name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Binary Tree Right Side View', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Populating Next Right Pointers in Each Node II', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Tree Traversal - Pre Order',
    progress: { completed: 0, total: 6 },
    questions: [
      { name: 'Binary Tree Preorder Traversal', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Symmetric Tree', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Convert Sorted Array to Binary Search Tree', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Path Sum III', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Tree Traversal - In Order',
    progress: { completed: 0, total: 4 },
    questions: [
      { name: 'Binary Tree Inorder Traversal', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Validate Binary Search Tree', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Kth Smallest Element in a BST', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Binary Search Tree Iterator', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Tree Traversal - Post Order',
    progress: { completed: 0, total: 5 },
    questions: [
      { name: 'Binary Tree Postorder Traversal', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Invert Binary Tree', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Diameter of Binary Tree', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Lowest Common Ancestor of a Binary Tree', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'BST / Ordered Set',
    progress: { completed: 0, total: 3 },
    questions: [
      { name: 'My Calendar I', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'My Calendar II', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Stock Price Fluctuation', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Tries',
    progress: { completed: 0, total: 4 },
    questions: [
      { name: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Design Add and Search Words Data Structure', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Search Suggestions System', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Word Search II', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Heaps',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Furthest Building You Can Reach', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Single-Threaded CPU', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Two Heaps',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Find Median from Data Stream', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'IPO', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Top K Elements',
    progress: { completed: 0, total: 3 },
    questions: [
      { name: 'Kth Largest Element in a Stream', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Top K Frequent Elements', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'K Closest Points to Origin', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Intervals',
    progress: { completed: 0, total: 3 },
    questions: [
      { name: 'Merge Intervals', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Insert Interval', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Non-overlapping Intervals', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'K-Way Merge',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Kth Smallest Element in a Sorted Matrix', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Merge k Sorted Lists', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Data Structure Design',
    progress: { completed: 0, total: 4 },
    questions: [
      { name: 'Design Browser History', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'LRU Cache', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Insert Delete GetRandom O(1)', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Maximum Frequency Stack', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Greedy',
    progress: { completed: 0, total: 3 },
    questions: [
      { name: 'Jump Game II', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Gas Station', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Task Scheduler', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Depth First Search (DFS)',
    progress: { completed: 0, total: 5 },
    questions: [
      { name: 'Number of Islands', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Clone Graph', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Is Graph Bipartite?', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Surrounded Regions', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Pacific Atlantic Water Flow', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Breadth First Search (BFS)',
    progress: { completed: 0, total: 3 },
    questions: [
      { name: 'Rotting Oranges', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: '01 Matrix', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Word Ladder', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Topological Sort',
    progress: { completed: 0, total: 1 },
    questions: [
      { name: 'Course Schedule II', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Union Find',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Number of Provinces', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Redundant Connection', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Minimum Spanning Tree',
    progress: { completed: 0, total: 1 },
    questions: [
      { name: 'Min Cost to Connect All Points', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Shortest Path',
    progress: { completed: 0, total: 3 },
    questions: [
      { name: 'Network Delay Time', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Cheapest Flights Within K Stops', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Swim in Rising Water', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: '1-D DP',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Climbing Stairs', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'House Robber II', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Knapsack DP',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Partition Equal Subset Sum', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Target Sum', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Unbounded Knapsack DP',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Coin Change', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Coin Change II', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Longest Increasing Subsequence DP',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Longest Increasing Subsequence', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Russian Doll Envelopes', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: '2D (Grid) DP',
    progress: { completed: 0, total: 4 },
    questions: [
      { name: 'Unique Paths II', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Minimum Path Sum', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Count Square Submatrices with All Ones', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Longest Increasing Path in a Matrix', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'String DP',
    progress: { completed: 0, total: 4 },
    questions: [
      { name: 'Longest Common Subsequence', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Longest Palindromic Subsequence', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Decode Ways', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Word Break', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Tree / Graph DP',
    progress: { completed: 0, total: 3 },
    questions: [
      { name: 'House Robber III', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Unique Binary Search Trees II', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Binary Tree Cameras', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Bitmask DP',
    progress: { completed: 0, total: 2 },
    questions: [
      { name: 'Fair Distribution of Cookies', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Shortest Path Visiting All Nodes', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'State Machine DP',
    progress: { completed: 0, total: 1 },
    questions: [
      { name: 'Best Time to Buy and Sell Stock III', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  },
  {
    name: 'Maths / Geometry',
    progress: { completed: 0, total: 3 },
    questions: [
      { name: 'Palindrome Number', difficulty: 'Easy', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Reverse Integer', difficulty: 'Medium', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } },
      { name: 'Max Points on a Line', difficulty: 'Hard', status: 'Not Started', url: '#', solution: { github: '#', youtube: '#' } }
    ]
  }
]; 