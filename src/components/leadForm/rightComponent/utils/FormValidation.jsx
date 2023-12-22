import { useState } from "react";

export const useFormValidation = (submitCallback) => {
  const [formData, setFormData] = useState({
    full_name: "",
    work_email: "",
    phone_number: "",
    company_name: "",
    job_title: "",
    no_of_docs: ""
  });

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const isBusinessEmail = (email) => {
    // Define an array of common free email providers to check if it is private mail
    const freeEmailProviders = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com"
    ];

    // Extractin the domain from the email address for comparision
    const domain = email.split("@")[1];

    // Check if the domain is not in the list of common free email providers
    return !freeEmailProviders.includes(domain);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Clear the error when the user starts typing again
    setErrors({
      ...errors,
      [e.target.name]: null
    });
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleSubmit = async (e) => {
    console.log("formdata");
    e.preventDefault();

    const emailRegex = /\S+@\S+\.\S+/;

    const newErrors = {};

    if (
      !emailRegex.test(formData.work_email) ||
      !isBusinessEmail(formData.work_email)
    ) {
      newErrors.work_email = "Please enter a valid business email";
    }

    if (isNaN(formData.no_of_docs) || formData.no_of_docs < 0) {
      newErrors.no_of_docs = "Number of docs must be a non-negative number";
    }

    if (isNaN(formData.phone_number) || formData.phone_number < 0) {
      newErrors.phone_number = "Phone number must be a non-negative number";
    }

    if (!isCheckboxChecked) {
      newErrors.agreement =
        "Please agree to the terms by checking the checkbox";
    }

    // If there are errors, set them and stop form submission  to where usewr is mistaking
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    alert("Do you want to submit the form");

    // If validation passes, submit the form
    submitCallback(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log(formData);
    // If validation passes, submit the form
    await submitCallback(formData);

    // Reset the form after successful submission
    setFormData({
      full_name: "",
      work_email: "",
      phone_number: "",
      company_name: "",
      job_title: "",
      no_of_docs: ""
    });
    setIsCheckboxChecked(false);
  };

  return {
    formData,
    isCheckboxChecked,
    errors,
    handleChange,
    handleCheckboxChange,
    handleSubmit
  };
};
