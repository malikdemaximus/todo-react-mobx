import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Use any base URL you prefer

const ApiService = {
  // Simulate a GET request to retrieve tasks (replace with your actual API endpoint)
  getTasks: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/todos`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return [];
    }
  },

  // Simulate a POST request to create a task (replace with your actual API endpoint)
  createTask: async (text) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/todos`, {
        title: text,
        completed: false,
      });
      return response.data;
    } catch (error) {
      console.error('Error creating task:', error);
      return null;
    }
  },

  // Simulate a DELETE request to remove a task by ID (replace with your actual API endpoint)
  deleteTask: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/todos/${id}`);
      return response.status === 200;
    } catch (error) {
      console.error('Error deleting task:', error);
      return false;
    }
  },

  // You can add an update function here as well
};

export default ApiService;
