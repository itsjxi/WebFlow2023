
import { useState } from 'react';

export const useFormValidation = (submitCallback) => {
  const [formData, setFormData] = useState({
    full_name: '',
    work_email: '',
    phone_number: '',
    company_name: '',
    job_title: '',
    no_of_docs: '',
  });

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.work_email)) {
      alert('Please enter a valid work email');
      return;
    }

    if (isNaN(formData.no_of_docs) || formData.no_of_docs < 0) {
      alert('Number of docs must be a non-negative number');
      return;
    }

    if (isNaN(formData.phone_number) || formData.phone_number < 0) {
      alert('Phone number must be a non-negative number');
      return;
    }
    if (!isCheckboxChecked) {
      alert('Please agree to the terms by checking the checkbox');
      return;
    }

    // If validation passes, submit the form
    submitCallback(formData);
  };

  return {
    formData,
    isCheckboxChecked,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
  };
};
