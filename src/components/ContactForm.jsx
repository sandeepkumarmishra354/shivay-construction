import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    tenderRef: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('loading');

    // Simulate API request to register query
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        tenderRef: '',
        message: ''
      });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="form-status-card success card animate-appear">
        <div className="card-content text-center">
          <div className="status-icon success-icon">
            <svg viewBox="0 0 24 24" className="icon">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" />
            </svg>
          </div>
          <h3 className="status-title">Inquiry Submitted Successfully</h3>
          <p className="status-desc">
            Thank you for reaching out to Shivay Construction Company. Our tender bidding team will review your query and get back to you within 24 hours.
          </p>
          <button className="btn btn-primary" onClick={() => setStatus('idle')}>
            Submit Another Query
          </button>
        </div>
        <style>{`
          .form-status-card {
            padding: 3rem 2rem;
            border-color: rgba(16, 185, 129, 0.3) !important;
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.1) !important;
          }
          .animate-appear {
            animation: formAppear 0.4s ease forwards;
          }
          @keyframes formAppear {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .status-icon {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
          }
          .success-icon {
            background: rgba(16, 185, 129, 0.1);
            color: #10b981;
          }
          .icon {
            width: 32px;
            height: 32px;
          }
          .status-title {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }
          .status-desc {
            font-size: 1rem;
            color: var(--text-light-muted);
            margin-bottom: 1.5rem;
            max-width: 50ch;
            margin-left: auto;
            margin-right: auto;
          }
        `}</style>
      </div>
    );
  }

  return (
    <form className="contact-form card" onSubmit={handleSubmit}>
      <div className="card-content">
        <h3 className="form-title mb-8">Send Tender / Project Inquiry</h3>

        <div className="grid-2">
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-control ${errors.name ? 'error' : ''}`}
              placeholder="e.g. Rajesh Kumar"
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Company / Authority Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-control"
              placeholder="e.g. Northern Railways"
            />
          </div>
        </div>

        <div className="grid-2">
          <div className="form-group">
            <label className="form-label">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? 'error' : ''}`}
              placeholder="e.g. rajesh@example.com"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Contact Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-control ${errors.phone ? 'error' : ''}`}
              placeholder="e.g. +91 98765 43210"
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Tender Ref. Number / Scope of Work</label>
          <input
            type="text"
            name="tenderRef"
            value={formData.tenderRef}
            onChange={handleChange}
            className="form-control"
            placeholder="e.g. Dy.CE-C-NCR-JHS-2026-12"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Detailed Requirement / Message *</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`form-control ${errors.message ? 'error' : ''}`}
            placeholder="Describe your project requirement, tender bidding criteria, or JV proposition in detail..."
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full mt-4"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <span className="spinner"></span>
              Sending Inquiry...
            </>
          ) : (
            'Submit Inquiry'
          )}
        </button>
      </div>

      <style>{`
        .contact-form {
          width: 100%;
          border: 1px solid var(--border-dark);
        }

        .form-title {
          font-size: 1.5rem;
          color: var(--text-light);
          position: relative;
        }

        .form-title::after {
          content: '';
          display: block;
          width: 40px;
          height: 3px;
          background: var(--accent);
          margin-top: 0.5rem;
        }

        .form-control.error {
          border-color: #ef4444;
          box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
        }

        .error-text {
          font-size: 0.8rem;
          color: #ef4444;
          margin-top: 0.25rem;
          display: block;
        }

        .w-full {
          width: 100%;
        }

        .spinner {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: var(--text-light);
          animation: spin 0.8s linear infinite;
          margin-right: 0.5rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
}
