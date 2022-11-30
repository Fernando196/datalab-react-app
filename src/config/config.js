const enviroment = process.env.REACT_APP_ENVIROMENT || 'production';

export const blogApiUrl = () => enviroment === 'development' ? 'localhost:51000' : 'https://ec2-18-225-33-135.us-east-2.compute.amazonaws.com:51000' ;