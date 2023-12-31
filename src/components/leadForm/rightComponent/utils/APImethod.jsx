
import axios from 'axios';

const postFormData = async (formData) => {
  try {
   //there is cors error  occuring 
    const response = await axios.post(
      'https://webhook.site/a4f01968-888c-4d92-8211-a793a112fe5d',
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Data sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending data:', error.message);
  }
};
export default postFormData;