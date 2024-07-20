import axios from 'axios';

export const loginUser = async () => {
  return await axios.post('http://localhost:8080/admin/login', {
    email: 'Khusbu@gmail.com',
    password: 'Khusbu@123',
  });
};
