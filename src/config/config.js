const enviroment = process.env.REACT_APP_ENVIROMENT || 'development';

export const blogApiUrl = enviroment === 'development' ? 'http://localhost:51000/api' : 'https://ec2-18-225-33-135.us-east-2.compute.amazonaws.com:51000/api' ;