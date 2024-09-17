import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import CertificateComponent from './CertificateComponent';
// Sample data for tests with questions
const questionsData = [
  {
    subject: 'React Basics',
    questions: [
      { id: 1, question: 'What is React?', options: ['A JavaScript library for building user interfaces', 'A type of database', 'A programming language'], answer: 'A JavaScript library for building user interfaces' },
      { id: 2, question: 'What is JSX?', options: ['A syntax extension for JavaScript that looks similar to HTML', 'A JavaScript function', 'A CSS framework'], answer: 'A syntax extension for JavaScript that looks similar to HTML' },
      { id: 3, question: 'What are React Hooks?', options: ['Functions that let you use state and other React features without writing a class', 'A type of component', 'A JavaScript library'], answer: 'Functions that let you use state and other React features without writing a class' },
      { id: 4, question: 'What is a React component?', options: ['A piece of UI that can be reused throughout the application', 'A type of JavaScript function', 'A method of styling'], answer: 'A piece of UI that can be reused throughout the application' },
      { id: 5, question: 'What is state in React?', options: ['An object that determines how that component renders and behaves', 'A method of data fetching', 'A type of CSS'], answer: 'An object that determines how that component renders and behaves' },
      { id: 6, question: 'What is a prop in React?', options: ['A way of passing data from parent to child components', 'A method of styling', 'A type of database'], answer: 'A way of passing data from parent to child components' },
      { id: 7, question: 'What is a useEffect hook?', options: ['A hook that allows you to perform side effects in function components', 'A type of React component', 'A method of styling'], answer: 'A hook that allows you to perform side effects in function components' },
      { id: 8, question: 'What is the Virtual DOM?', options: ['A lightweight copy of the real DOM that React uses to optimize rendering', 'A type of data structure', 'A method of data fetching'], answer: 'A lightweight copy of the real DOM that React uses to optimize rendering' },
      { id: 9, question: 'What is Redux?', options: ['A state management library for JavaScript apps', 'A type of JavaScript function', 'A method of styling'], answer: 'A state management library for JavaScript apps' },
      { id: 10, question: 'What is a React Router?', options: ['A library for routing in React applications', 'A type of CSS framework', 'A method of data fetching'], answer: 'A library for routing in React applications' }
    ]
  },
  {
    subject: 'JavaScript Basics',
    questions: [
      { id: 1, question: 'What is JavaScript?', options: ['A programming language used for web development', 'A type of database', 'A CSS framework'], answer: 'A programming language used for web development' },
      { id: 2, question: 'What is a closure in JavaScript?', options: ['A feature where an inner function retains access to the outer function\'s variables', 'A type of database', 'A method of data fetching'], answer: 'A feature where an inner function retains access to the outer function\'s variables' },
      { id: 3, question: 'What is event delegation?', options: ['A technique of handling events by attaching a single event listener to a parent element', 'A type of data structure', 'A method of styling'], answer: 'A technique of handling events by attaching a single event listener to a parent element' },
      { id: 4, question: 'What is the difference between `==` and `===` in JavaScript?', options: ['`==` performs type coercion while `===` does not', '`==` is used for string comparison and `===` for number comparison', 'There is no difference'], answer: '`==` performs type coercion while `===` does not' },
      { id: 5, question: 'What are JavaScript promises?', options: ['Objects representing the eventual completion or failure of an asynchronous operation', 'A type of database', 'A method of styling'], answer: 'Objects representing the eventual completion or failure of an asynchronous operation' },
      { id: 6, question: 'What is the DOM in JavaScript?', options: ['A programming interface for HTML and XML documents', 'A type of database', 'A CSS framework'], answer: 'A programming interface for HTML and XML documents' },
      { id: 7, question: 'What is the purpose of `async` and `await`?', options: ['To work with asynchronous code in a more readable way', 'To handle synchronous operations', 'To style HTML elements'], answer: 'To work with asynchronous code in a more readable way' },
      { id: 8, question: 'What is a callback function?', options: ['A function passed into another function as an argument to be executed later', 'A type of data structure', 'A method of styling'], answer: 'A function passed into another function as an argument to be executed later' },
      { id: 9, question: 'What is the use of `this` keyword in JavaScript?', options: ['To refer to the current instance of an object', 'To access the outer function\'s scope', 'To create a new object'], answer: 'To refer to the current instance of an object' },
      { id: 10, question: 'What is the purpose of `localStorage`?', options: ['To store data in the browser persistently', 'To handle asynchronous operations', 'To style HTML elements'], answer: 'To store data in the browser persistently' }
    ]
  },
  {
    subject: 'Data Structures',
    questions: [
      { id: 1, question: 'What is an array?', options: ['A collection of elements indexed by numbers', 'A type of data structure used for storing key-value pairs', 'A method of sorting data'], answer: 'A collection of elements indexed by numbers' },
      { id: 2, question: 'What is a linked list?', options: ['A linear data structure where elements are stored in nodes and linked together', 'A type of queue', 'A method of sorting data'], answer: 'A linear data structure where elements are stored in nodes and linked together' },
      { id: 3, question: 'What is a stack?', options: ['A collection of elements that follows Last In First Out (LIFO) principle', 'A type of queue', 'A method of sorting data'], answer: 'A collection of elements that follows Last In First Out (LIFO) principle' },
      { id: 4, question: 'What is a queue?', options: ['A collection of elements that follows First In First Out (FIFO) principle', 'A type of stack', 'A method of searching data'], answer: 'A collection of elements that follows First In First Out (FIFO) principle' },
      { id: 5, question: 'What is a binary tree?', options: ['A tree data structure where each node has at most two children', 'A type of linked list', 'A method of sorting data'], answer: 'A tree data structure where each node has at most two children' },
      { id: 6, question: 'What is a hash table?', options: ['A data structure that maps keys to values for efficient retrieval', 'A type of linked list', 'A method of sorting data'], answer: 'A data structure that maps keys to values for efficient retrieval' },
      { id: 7, question: 'What is a graph?', options: ['A collection of nodes connected by edges', 'A type of stack', 'A method of searching data'], answer: 'A collection of nodes connected by edges' },
      { id: 8, question: 'What is a heap?', options: ['A special tree-based data structure that satisfies the heap property', 'A type of array', 'A method of sorting data'], answer: 'A special tree-based data structure that satisfies the heap property' },
      { id: 9, question: 'What is a binary search tree?', options: ['A binary tree where the left child is less than the parent and the right child is greater', 'A type of linked list', 'A method of sorting data'], answer: 'A binary tree where the left child is less than the parent and the right child is greater' },
      { id: 10, question: 'What is a set?', options: ['A collection of distinct elements', 'A type of array', 'A method of searching data'], answer: 'A collection of distinct elements' }
    ]
  },
  {
    subject: 'JavaScript Fundamentals',
    questions: [
      { id: 1, question: 'What is a closure?', options: ['A feature that allows functions to retain access to their lexical scope', 'A type of variable', 'An ES6 feature'], answer: 'A feature that allows functions to retain access to their lexical scope' },
      { id: 2, question: 'What is the purpose of async/await?', options: ['Handle asynchronous operations', 'Define synchronous functions', 'Create promises'], answer: 'Handle asynchronous operations' },
      { id: 3, question: 'What is a promise in JavaScript?', options: ['An object representing the eventual completion or failure of an asynchronous operation', 'A type of loop', 'A built-in function'], answer: 'An object representing the eventual completion or failure of an asynchronous operation' },
      { id: 4, question: 'What does the map method do?', options: ['Transforms each element in an array', 'Filters elements in an array', 'Sorts elements in an array'], answer: 'Transforms each element in an array' },
      { id: 5, question: 'What is the difference between == and ===?', options: ['== compares values with type coercion, === compares values without type coercion', 'Both are the same', '== is faster than ==='], answer: '== compares values with type coercion, === compares values without type coercion' },
      { id: 6, question: 'What does the spread operator do?', options: ['Expands elements in an array or object', 'Merges arrays', 'Spreads strings'], answer: 'Expands elements in an array or object' },
      { id: 7, question: 'What is event delegation?', options: ['Attaching a single event listener to a parent element', 'Binding events to multiple child elements', 'Directly attaching events to each element'], answer: 'Attaching a single event listener to a parent element' },
      { id: 8, question: 'What is a JavaScript prototype?', options: ['An object from which other objects inherit properties and methods', 'A type of loop', 'A function'], answer: 'An object from which other objects inherit properties and methods' },
      { id: 9, question: 'What is hoisting?', options: ['JavaScript’s default behavior of moving declarations to the top of their scope', 'A method of defining variables', 'A way to handle asynchronous code'], answer: 'JavaScript’s default behavior of moving declarations to the top of their scope' },
      { id: 10, question: 'What does the reduce method do?', options: ['Applies a function against an accumulator and each element in the array', 'Filters out elements', 'Finds the maximum value'], answer: 'Applies a function against an accumulator and each element in the array' }
    ]
  },
  {
    subject: 'HTML & CSS',
    questions: [
      { id: 1, question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'HyperText Markdown Language', 'HyperText Management Language'], answer: 'HyperText Markup Language' },
      { id: 2, question: 'What is the purpose of CSS?', options: ['To style and layout web pages', 'To create web pages', 'To manage server-side data'], answer: 'To style and layout web pages' },
      { id: 3, question: 'What is a CSS class?', options: ['A reusable set of styles', 'A type of HTML tag', 'A JavaScript function'], answer: 'A reusable set of styles' },
      { id: 4, question: 'How can you apply a style to an HTML element?', options: ['Using a CSS selector', 'By modifying the HTML directly', 'Using JavaScript only'], answer: 'Using a CSS selector' },
      { id: 5, question: 'What is the difference between id and class selectors?', options: ['id is unique, class can be reused', 'id can be reused, class is unique', 'Both are the same'], answer: 'id is unique, class can be reused' },
      { id: 6, question: 'What is a pseudo-class?', options: ['A keyword added to selectors that specifies a special state of the element', 'A type of class selector', 'A method for defining styles'], answer: 'A keyword added to selectors that specifies a special state of the element' },
      { id: 7, question: 'What is the box model?', options: ['A model for layout in CSS that includes margins, borders, padding, and content', 'A type of CSS selector', 'A method for defining font sizes'], answer: 'A model for layout in CSS that includes margins, borders, padding, and content' },
      { id: 8, question: 'How do you center a block element horizontally?', options: ['Using margin: auto', 'Using text-align: center', 'Using float'], answer: 'Using margin: auto' },
      { id: 9, question: 'What is Flexbox used for?', options: ['A layout module that allows for flexible and responsive layouts', 'A method for styling elements', 'A type of CSS animation'], answer: 'A layout module that allows for flexible and responsive layouts' },
      { id: 10, question: 'What is the purpose of media queries?', options: ['To apply styles based on the device’s characteristics', 'To define animations', 'To set global styles'], answer: 'To apply styles based on the device’s characteristics' }
    ]
  },
  {
    subject: 'Frontend Frameworks',
    questions: [
      { id: 1, question: 'What is Angular?', options: ['A TypeScript-based open-source web application framework', 'A JavaScript library', 'A CSS preprocessor'], answer: 'A TypeScript-based open-source web application framework' },
      { id: 2, question: 'What is Vue.js?', options: ['A progressive JavaScript framework for building user interfaces', 'A backend framework', 'A database system'], answer: 'A progressive JavaScript framework for building user interfaces' },
      { id: 3, question: 'What is the purpose of a virtual DOM?', options: ['To improve performance by minimizing direct manipulation of the actual DOM', 'To manage application state', 'To handle asynchronous data'], answer: 'To improve performance by minimizing direct manipulation of the actual DOM' },
      { id: 4, question: 'What is the key feature of React?', options: ['Component-based architecture', 'Server-side rendering', 'CSS-in-JS'], answer: 'Component-based architecture' },
      { id: 5, question: 'What is Angular CLI?', options: ['A command-line interface for Angular development', 'A CSS library', 'A JavaScript library'], answer: 'A command-line interface for Angular development' },
      { id: 6, question: 'What is Vuex?', options: ['A state management library for Vue.js', 'A router for Vue.js', 'A CSS preprocessor'], answer: 'A state management library for Vue.js' },
      { id: 7, question: 'What does React use to manage state?', options: ['useState and useReducer hooks', 'Component-based architecture', 'Redux only'], answer: 'useState and useReducer hooks' },
      { id: 8, question: 'What is a directive in Angular?', options: ['A special marker on a DOM element that tells Angular to do something with that element', 'A JavaScript function', 'A CSS class'], answer: 'A special marker on a DOM element that tells Angular to do something with that element' },
      { id: 9, question: 'How do you create a new Vue component?', options: ['Using Vue.component or a single file component', 'Using Angular CLI', 'Using React hooks'], answer: 'Using Vue.component or a single file component' },
      { id: 10, question: 'What is the purpose of Redux?', options: ['To manage application state', 'To handle server-side rendering', 'To create reusable components'], answer: 'To manage application state' }
    ]
  },
  {
    subject: 'Database Design',
    questions: [
      { id: 1, question: 'What is normalization?', options: ['The process of organizing data to reduce redundancy', 'The process of optimizing queries', 'The process of indexing data'], answer: 'The process of organizing data to reduce redundancy' },
      { id: 2, question: 'What is a primary key?', options: ['A unique identifier for each record in a table', 'A type of foreign key', 'A type of index'], answer: 'A unique identifier for each record in a table' },
      { id: 3, question: 'What is an entity-relationship diagram?', options: ['A diagram that shows the relationships between entities in a database', 'A type of database query', 'A method of data encryption'], answer: 'A diagram that shows the relationships between entities in a database' },
      { id: 4, question: 'What is the purpose of an index in a database?', options: ['To improve query performance', 'To enforce data integrity', 'To store large amounts of data'], answer: 'To improve query performance' },
      { id: 5, question: 'What is a foreign key?', options: ['A field in a table that uniquely identifies a row in another table', 'A unique identifier for each record in a table', 'An index on a table'], answer: 'A field in a table that uniquely identifies a row in another table' },
      { id: 6, question: 'What is a relational database?', options: ['A database that uses tables to represent data and their relationships', 'A database that stores data in a key-value format', 'A database that uses graphs to represent data'], answer: 'A database that uses tables to represent data and their relationships' },
      { id: 7, question: 'What is SQL?', options: ['A language used to query and manage relational databases', 'A programming language', 'A markup language'], answer: 'A language used to query and manage relational databases' },
      { id: 8, question: 'What is a schema?', options: ['The structure of a database, including tables and relationships', 'A type of data encryption', 'A method of data compression'], answer: 'The structure of a database, including tables and relationships' },
      { id: 9, question: 'What is a table in a database?', options: ['A collection of related data organized in rows and columns', 'A type of database query', 'A method of data backup'], answer: 'A collection of related data organized in rows and columns' },
      { id: 10, question: 'What is denormalization?', options: ['The process of reducing the complexity of database structure', 'The process of optimizing database queries', 'The process of organizing data to reduce redundancy'], answer: 'The process of reducing the complexity of database structure' }
    ]
  },
  {
    subject: 'Networking Basics',
    questions: [
      { id: 1, question: 'What does IP stand for?', options: ['Internet Protocol', 'Internal Protocol', 'Internet Procedure'], answer: 'Internet Protocol' },
      { id: 2, question: 'What is a subnet mask?', options: ['A mask used to divide IP addresses into subnets', 'A type of network cable', 'A method of data encryption'], answer: 'A mask used to divide IP addresses into subnets' },
      { id: 3, question: 'What is a router?', options: ['A device that forwards data packets between networks', 'A type of server', 'A method of data compression'], answer: 'A device that forwards data packets between networks' },
      { id: 4, question: 'What is DNS?', options: ['Domain Name System', 'Dynamic Network Service', 'Data Network Security'], answer: 'Domain Name System' },
      { id: 5, question: 'What is a firewall?', options: ['A network security system that monitors and controls incoming and outgoing network traffic', 'A type of router', 'A network protocol'], answer: 'A network security system that monitors and controls incoming and outgoing network traffic' },
      { id: 6, question: 'What is a VPN?', options: ['Virtual Private Network', 'Virtual Public Network', 'Variable Private Network'], answer: 'Virtual Private Network' },
      { id: 7, question: 'What is HTTP?', options: ['HyperText Transfer Protocol', 'HyperText Transfer Procedure', 'HyperText Transport Protocol'], answer: 'HyperText Transfer Protocol' },
      { id: 8, question: 'What is a MAC address?', options: ['A unique identifier for network interfaces', 'A type of network protocol', 'A method of data encryption'], answer: 'A unique identifier for network interfaces' },
      { id: 9, question: 'What is TCP?', options: ['Transmission Control Protocol', 'Transmission Communication Protocol', 'Transport Control Protocol'], answer: 'Transmission Control Protocol' },
      { id: 10, question: 'What does HTTP stand for?', options: ['HyperText Transfer Protocol', 'HyperText Transport Protocol', 'HyperText Text Protocol'], answer: 'HyperText Transfer Protocol' }
    ]
  },
  {
    subject: 'Operating Systems',
    questions: [
      { id: 1, question: 'What is an operating system?', options: ['Software that manages computer hardware and software resources', 'A type of application software', 'A programming language'], answer: 'Software that manages computer hardware and software resources' },
      { id: 2, question: 'What is multitasking?', options: ['Running multiple processes simultaneously', 'Running a single process', 'Switching between multiple users'], answer: 'Running multiple processes simultaneously' },
      { id: 3, question: 'What is a kernel?', options: ['The core component of an operating system', 'A type of hardware', 'A programming tool'], answer: 'The core component of an operating system' },
      { id: 4, question: 'What is virtual memory?', options: ['A memory management technique that creates an illusion of a large memory space', 'A type of hardware memory', 'A method of data storage'], answer: 'A memory management technique that creates an illusion of a large memory space' },
      { id: 5, question: 'What is a process?', options: ['An instance of a program in execution', 'A type of file', 'A method of data encryption'], answer: 'An instance of a program in execution' },
      { id: 6, question: 'What is a file system?', options: ['A method for organizing and storing files on a storage device', 'A type of application software', 'A method of data compression'], answer: 'A method for organizing and storing files on a storage device' },
      { id: 7, question: 'What is a device driver?', options: ['Software that allows the operating system to communicate with hardware', 'A type of application software', 'A method of data encryption'], answer: 'Software that allows the operating system to communicate with hardware' },
      { id: 8, question: 'What is a user interface?', options: ['The means by which users interact with a computer', 'A type of hardware component', 'A method of data encryption'], answer: 'The means by which users interact with a computer' },
      { id: 9, question: 'What is a system call?', options: ['An interface used by programs to request services from the operating system', 'A type of file', 'A programming language'], answer: 'An interface used by programs to request services from the operating system' },
      { id: 10, question: 'What is a shell?', options: ['A command-line interface for interacting with the operating system', 'A type of application software', 'A programming tool'], answer: 'A command-line interface for interacting with the operating system' }
    ]
  },
  {
    subject: 'Data Structures',
    questions: [
      { id: 1, question: 'What is an array?', options: ['A collection of elements identified by index', 'A type of linked list', 'A method of sorting data'], answer: 'A collection of elements identified by index' },
      { id: 2, question: 'What is a linked list?', options: ['A linear collection of elements where each element points to the next', 'A type of array', 'A method of searching data'], answer: 'A linear collection of elements where each element points to the next' },
      { id: 3, question: 'What is a stack?', options: ['A collection of elements that follows Last In First Out (LIFO) principle', 'A type of queue', 'A method of sorting data'], answer: 'A collection of elements that follows Last In First Out (LIFO) principle' },
      { id: 4, question: 'What is a queue?', options: ['A collection of elements that follows First In First Out (FIFO) principle', 'A type of stack', 'A method of searching data'], answer: 'A collection of elements that follows First In First Out (FIFO) principle' },
      { id: 5, question: 'What is a binary tree?', options: ['A tree data structure where each node has at most two children', 'A type of linked list', 'A method of sorting data'], answer: 'A tree data structure where each node has at most two children' },
      { id: 6, question: 'What is a hash table?', options: ['A data structure that maps keys to values for efficient retrieval', 'A type of linked list', 'A method of sorting data'], answer: 'A data structure that maps keys to values for efficient retrieval' },
      { id: 7, question: 'What is a graph?', options: ['A collection of nodes connected by edges', 'A type of stack', 'A method of searching data'], answer: 'A collection of nodes connected by edges' },
      { id: 8, question: 'What is a heap?', options: ['A special tree-based data structure that satisfies the heap property', 'A type of array', 'A method of sorting data'], answer: 'A special tree-based data structure that satisfies the heap property' },
      { id: 9, question: 'What is a binary search tree?', options: ['A binary tree where the left child is less than the parent and the right child is greater', 'A type of linked list', 'A method of sorting data'], answer: 'A binary tree where the left child is less than the parent and the right child is greater' },
      { id: 10, question: 'What is a set?', options: ['A collection of distinct elements', 'A type of array', 'A method of searching data'], answer: 'A collection of distinct elements' }
    ]
  },
  {
    subject: 'Algorithms',
    questions: [
      { id: 1, question: 'What is an algorithm?', options: ['A step-by-step procedure for solving a problem', 'A type of data structure', 'A method of data compression'], answer: 'A step-by-step procedure for solving a problem' },
      { id: 2, question: 'What is the time complexity of binary search?', options: ['O(log n)', 'O(n)', 'O(n^2)'], answer: 'O(log n)' },
      { id: 3, question: 'What is a sorting algorithm?', options: ['An algorithm used to arrange items in a specific order', 'A method of searching data', 'A type of data structure'], answer: 'An algorithm used to arrange items in a specific order' },
      { id: 4, question: 'What is Big O notation?', options: ['A notation used to describe the performance characteristics of an algorithm', 'A type of data structure', 'A method of data compression'], answer: 'A notation used to describe the performance characteristics of an algorithm' },
      { id: 5, question: 'What is a greedy algorithm?', options: ['An algorithm that makes the locally optimal choice at each step with the hope of finding a global optimum', 'A method of searching data', 'A type of data structure'], answer: 'An algorithm that makes the locally optimal choice at each step with the hope of finding a global optimum' },
      { id: 6, question: 'What is a divide and conquer algorithm?', options: ['An algorithm that divides the problem into smaller sub-problems, solves them, and combines the results', 'A method of searching data', 'A type of data structure'], answer: 'An algorithm that divides the problem into smaller sub-problems, solves them, and combines the results' },
      { id: 7, question: 'What is a dynamic programming algorithm?', options: ['An algorithm that solves complex problems by breaking them down into simpler overlapping sub-problems', 'A method of searching data', 'A type of data structure'], answer: 'An algorithm that solves complex problems by breaking them down into simpler overlapping sub-problems' },
      { id: 8, question: 'What is a recursive algorithm?', options: ['An algorithm that solves a problem by solving smaller instances of the same problem', 'A method of searching data', 'A type of data structure'], answer: 'An algorithm that solves a problem by solving smaller instances of the same problem' },
      { id: 9, question: 'What is the time complexity of bubble sort?', options: ['O(n^2)', 'O(log n)', 'O(n)'], answer: 'O(n^2)' },
      { id: 10, question: 'What is the purpose of a hash function?', options: ['To map data of arbitrary size to fixed-size values', 'To sort data', 'To search data'], answer: 'To map data of arbitrary size to fixed-size values' }
    ]
  },
  {
    subject: 'Web Development',
    questions: [
      { id: 1, question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'HyperText Modeling Language', 'HyperText Multi Language'], answer: 'HyperText Markup Language' },
      { id: 2, question: 'What is CSS used for?', options: ['Styling web pages', 'Structuring web pages', 'Programming web pages'], answer: 'Styling web pages' },
      { id: 3, question: 'What is JavaScript used for?', options: ['Adding interactivity to web pages', 'Structuring web pages', 'Styling web pages'], answer: 'Adding interactivity to web pages' },
      { id: 4, question: 'What does DOM stand for?', options: ['Document Object Model', 'Document Object Markup', 'Document Oriented Model'], answer: 'Document Object Model' },
      { id: 5, question: 'What is a CSS preprocessor?', options: ['A tool that extends CSS with variables, nesting, and more', 'A tool for debugging CSS', 'A tool for optimizing CSS'], answer: 'A tool that extends CSS with variables, nesting, and more' },
      { id: 6, question: 'What is AJAX?', options: ['Asynchronous JavaScript and XML', 'A JavaScript library', 'A web server technology'], answer: 'Asynchronous JavaScript and XML' },
      { id: 7, question: 'What is responsive web design?', options: ['A design approach that makes web pages look good on all devices', 'A method of optimizing web pages for search engines', 'A tool for designing graphics'], answer: 'A design approach that makes web pages look good on all devices' },
      { id: 8, question: 'What is a web framework?', options: ['A software framework that helps in building web applications', 'A type of database', 'A tool for managing servers'], answer: 'A software framework that helps in building web applications' },
      { id: 9, question: 'What is REST?', options: ['Representational State Transfer', 'Remote Server Technology', 'Real-time Server Transfer'], answer: 'Representational State Transfer' },
      { id: 10, question: 'What is the purpose of a front-end framework?', options: ['To simplify the process of building user interfaces', 'To manage server-side operations', 'To handle data storage'], answer: 'To simplify the process of building user interfaces' }
    ]
  },
  {
    subject: 'Software Engineering',
    questions: [
      { id: 1, question: 'What is Agile methodology?', options: ['An iterative approach to software development', 'A type of software architecture', 'A programming language'], answer: 'An iterative approach to software development' },
      { id: 2, question: 'What is a software requirement?', options: ['A description of what the software should do', 'A type of programming language', 'A hardware component'], answer: 'A description of what the software should do' },
      { id: 3, question: 'What is a use case?', options: ['A description of how a user interacts with a system', 'A type of database', 'A programming language'], answer: 'A description of how a user interacts with a system' },
      { id: 4, question: 'What is a software design pattern?', options: ['A reusable solution to a common software design problem', 'A type of data structure', 'A method of code optimization'], answer: 'A reusable solution to a common software design problem' },
      { id: 5, question: 'What is version control?', options: ['A system for managing changes to source code', 'A type of software testing', 'A method of code optimization'], answer: 'A system for managing changes to source code' },
      { id: 6, question: 'What is continuous integration?', options: ['A practice where code changes are automatically tested and integrated into the main branch', 'A method of software deployment', 'A type of software testing'], answer: 'A practice where code changes are automatically tested and integrated into the main branch' },
      { id: 7, question: 'What is a software build?', options: ['The process of compiling source code into executable code', 'A type of software testing', 'A method of software deployment'], answer: 'The process of compiling source code into executable code' },
      { id: 8, question: 'What is a software bug?', options: ['An error or flaw in software code', 'A type of software update', 'A method of software deployment'], answer: 'An error or flaw in software code' },
      { id: 9, question: 'What is refactoring?', options: ['The process of improving the structure of existing code without changing its behavior', 'A type of software testing', 'A method of software deployment'], answer: 'The process of improving the structure of existing code without changing its behavior' },
      { id: 10, question: 'What is a software release?', options: ['The distribution of a new version of software', 'A type of software bug', 'A method of software deployment'], answer: 'The distribution of a new version of software' }
    ]
  }
];
const generateQuiz = (subject, questions) => {
    const subjectQuestions = questions.find(q => q.subject === subject)?.questions || [];
    return subjectQuestions.map(q => ({
      question: q.question,
      options: q.options,
      answer: q.answer
    }));
  };
  
  const TestComponent = () => {
    const [selectedTest, setSelectedTest] = useState(null);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [showCertificate, setShowCertificate] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
    const handleTestClick = (test) => {
      setSelectedTest(test);
      setSelectedAnswers({});
      setShowResults(false);
      setShowCertificate(false);
      setCurrentQuestionIndex(0);
    };
  
    const handleChange = (questionId, value) => {
      setSelectedAnswers(prev => ({ ...prev, [questionId]: value }));
    };
  
    const handleNext = () => {
      if (selectedTest && currentQuestionIndex < selectedTest.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        handleSubmit();
      }
    };
  
    const handlePrevious = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };
  
    const handleSubmit = () => {
      setShowResults(true);
    };
  
    const handleGenerateCertificate = () => {
      setShowCertificate(true);
    };
  
    const handleCloseCertificate = () => {
      setShowCertificate(false);
    };
  
    const calculateScore = () => {
      if (!selectedTest) return 0;
      return selectedTest.questions.reduce((score, question) => {
        return score + (selectedAnswers[question.id] === question.answer ? 1 : 0);
      }, 0);
    };
  
    const currentQuestion = selectedTest?.questions[currentQuestionIndex];
    const score = calculateScore();
  
    return (
      <div style={{ padding: '16px', marginLeft: '-160px', marginTop: '70px' }}>
        <Typography variant="h4" gutterBottom>Available Tests</Typography>
        
        <Grid container spacing={2}>
          {questionsData.map((test, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                style={{ backgroundColor: '#90caf9', cursor: 'pointer' }}
                onClick={() => handleTestClick(test)}
              >
                <CardContent>
                  <Typography variant="h6">{test.subject}</Typography>
                  <Typography>Click to take this test</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
  
        {/* Test Dialog */}
        <Dialog
          open={Boolean(selectedTest) && !showResults}
          onClose={() => setSelectedTest(null)}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle>{selectedTest?.subject}</DialogTitle>
          <DialogContent>
            {currentQuestion && (
              <FormControl component="fieldset" style={{ marginBottom: '16px' }}>
                <FormLabel component="legend">{currentQuestion.question}</FormLabel>
                <RadioGroup
                  name={`question-${currentQuestion.id}`}
                  value={selectedAnswers[currentQuestion.id] || ''}
                  onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
                >
                  {currentQuestion.options.map(option => (
                    <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                  ))}
                </RadioGroup>
              </FormControl>
            )}
            <Button variant="contained" color="primary" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
              Previous
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext} style={{ marginLeft: '8px' }}>
              {currentQuestionIndex === (selectedTest?.questions.length - 1) ? 'Submit' : 'Next'}
            </Button>
          </DialogContent>
        </Dialog>
  
        {/* Results Dialog */}
        <Dialog
          open={showResults}
          onClose={() => setShowResults(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Test Results</DialogTitle>
          <DialogContent>
            <Typography variant="h6">You scored {score} out of {selectedTest?.questions.length}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleGenerateCertificate}
              style={{ marginTop: '16px' }}
            >
              Generate Certificate
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowResults(false)} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
  
        {/* Certificate Dialog */}
        <CertificateComponent
          open={showCertificate}
          onClose={handleCloseCertificate}
          testSubject={selectedTest?.subject}
          score={score}
          totalQuestions={selectedTest?.questions.length}
        />
      </div>
    );
  };
  
  export default TestComponent;