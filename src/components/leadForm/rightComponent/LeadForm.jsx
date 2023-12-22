import React from 'react';
import './LeadForm.css';
import { useFormValidation } from './utils/FormValidation';
import postFormData from './utils/APImethod';

const LeadForm = () => {
  const {
    formData,
    isCheckboxChecked,
    errors,
    handleChange,
    handleCheckboxChange,
    handleSubmit
  } = useFormValidation(postFormData);

  return (
    <div className='lead-form'>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>
            Full Name<span>*</span>:
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
            />
          </label>
          {errors.full_name && <p className="error">{errors.full_name}</p>}
        </div>
        <div className='form-field'>
          <label>
            Work Email<span>*</span>:
            <input
              type="email"
              name="work_email"
              value={formData.work_email}
              onChange={handleChange}
            />
          </label>
          {errors.work_email && <p className="error">{errors.work_email}</p>}
        </div>
        <div className='form-field'>
          <label>
            Phone Number<span>*</span>:
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </label>
          {errors.phone_number && <p className="error">{errors.phone_number}</p>}
        </div>
        <div className='form-field'>
          <label>
            Company Name<span>*</span>:
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
            />
          </label>
          {errors.company_name && <p className="error">{errors.company_name}</p>}
        </div>
        <div className='form-field'>
          <label>
            Job Title<span>*</span>:
            <input
              type="text"
              name="job_title"
              value={formData.job_title}
              onChange={handleChange}
            />
          </label>
          {errors.job_title && <p className="error">{errors.job_title}</p>}
        </div>
        <div className='form-field'>
          <label>
            Number of Docs<span>*</span>:
            <input
              type="number"
              name="no_of_docs"
              value={formData.no_of_docs}
              onChange={handleChange}
            />
          </label>
          {errors.no_of_docs && <p className="error">{errors.no_of_docs}</p>}
        </div>
        <div className='form-field'>
          <label>
            <div className="checkbox-box">
              <input
                type="checkbox"
                name="agreement"
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange}
                required
              />
              <p> By signing up, you agree to receiving communication from Docsumo</p>
            </div>
          </label>
          {errors.agreement && <p className="error">{errors.agreement}</p>}
        </div>
        <button type="submit">Schedule a Demo</button>
      </form>
    </div>
  );
};

export default LeadForm;
