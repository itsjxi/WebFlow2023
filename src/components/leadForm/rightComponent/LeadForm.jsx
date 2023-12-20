import"./LeadForm.css"
import React from 'react';
import { useFormValidation } from './utils/FormValidation';
import { postFormData } from './utils/APImethod';

const LeadForm = () => {
  const { formData, isCheckboxChecked,handleChange, handleCheckboxChange,handleSubmit } = useFormValidation(postFormData);

  return (
    <div className='lead-form'>
        <form onSubmit={handleSubmit}>
        <label>
            Full Name<span>*</span>:
            <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} />
        </label>
        <label>
            Work Email<span>*</span>:
            <input type="email" name="work_email" value={formData.work_email} onChange={handleChange} />
        </label>
        <label>
            Phone Number<span>*</span>:
            <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} />
        </label>
        <label>
            Company Name<span>*</span>:
            <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} />
        </label>
        <label>
            Job Title<span>*</span>:
            <input type="text" name="job_title" value={formData.job_title} onChange={handleChange} />
        </label>
        <label>
            Number of Docs<span>*</span>:
            <input type="number" name="no_of_docs" value={formData.no_of_docs} onChange={handleChange} />
        </label>
        <label>

        <div className="checkbox-box">
        <input type="checkbox" name="agreement" checked={isCheckboxChecked} onChange={handleCheckboxChange} required />
        By signing up, you agree to receiving communication from Docsumo
        </div>
      </label>
        <button type="submit">Schedule a Demo</button>
        </form>
    </div>
  );
};

export default LeadForm;
