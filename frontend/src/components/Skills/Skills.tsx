import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Container, Heading, Text } from './Skills.styles';
import PageWrapper from '../../components/shared/PageWrapper';


const Skills = () => {

  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data');
        setData(response.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <PageWrapper>
      <Heading>Your Heading Here</Heading>
      <Text>
        Your text content goes here. You can use this component to display text
        with the styles defined in the .styles.ts file.
      </Text>

      <p>{data}</p>
      {/* Add more components and content as needed */}
    </PageWrapper>
  );
};

export default Skills;
