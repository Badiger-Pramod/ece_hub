/**
 * ==============================================================================
 * SSIT ECE Resource Hub - Student Feedback Client Handler
 * Connected to Google Apps Script -> Private Google Spreadsheet
 *
 * Creator: B. Pramod (USN: 24EC018)
 * Institution: Sri Siddhartha Institute of Technology (SSIT), Tumakuru
 * ==============================================================================
 */

(function () {
  'use strict';

  // ============================================================================
  // CONFIGURATION: Google Apps Script Web App URL
  // Paste your deployed Google Apps Script Web App URL below.
  // Example: 'https://script.google.com/macros/s/AKfycb.../exec'
  // (Follow the 3-minute steps in google-apps-script.js to generate this URL)
  // ============================================================================
  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyul9xWJ8vSazI2Ks6XGLED7qZotmuNjyHjJsQnaguo0BNX7AVoVEDtTmuq99pdEkuP/exec';

  document.addEventListener('DOMContentLoaded', initFeedback);

  function initFeedback() {
    const toggleBtn = document.getElementById('btn-give-feedback');
    const formContainer = document.getElementById('feedback-form-container');
    const feedbackForm = document.getElementById('student-feedback-form');
    const submitBtn = document.getElementById('btn-feedback-submit');
    const alertSuccess = document.getElementById('feedback-alert-success');
    const alertError = document.getElementById('feedback-alert-error');
    const alertInfo = document.getElementById('feedback-alert-info');
    const errorText = document.getElementById('feedback-error-text');

    if (!toggleBtn || !formContainer || !feedbackForm) return;

    // Toggle Form visibility
    toggleBtn.addEventListener('click', () => {
      const isOpen = formContainer.classList.toggle('open');
      toggleBtn.classList.toggle('active', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen.toString());

      if (isOpen) {
        formContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        const nameInput = document.getElementById('feedback-name');
        if (nameInput) nameInput.focus();
      }
    });

    // Hide alerts helper
    function hideAlerts() {
      if (alertSuccess) alertSuccess.classList.remove('show');
      if (alertError) alertError.classList.remove('show');
      if (alertInfo) alertInfo.classList.remove('show');
    }

    // Form submission handler
    feedbackForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      hideAlerts();

      // Honeypot anti-spam check
      const honeypot = document.getElementById('feedback-hp');
      if (honeypot && honeypot.value.trim() !== '') {
        console.warn('Spam submission prevented.');
        return;
      }

      // Read form input values
      const studentName = (document.getElementById('feedback-name')?.value || '').trim();
      const semester = (document.getElementById('feedback-semester')?.value || '').trim();
      const websiteFeedback = (document.getElementById('feedback-website')?.value || '').trim();
      const deptFeedback = (document.getElementById('feedback-department')?.value || '').trim();
      const collegeFeedback = (document.getElementById('feedback-college')?.value || '').trim();
      const suggestions = (document.getElementById('feedback-suggestions')?.value || '').trim();

      // Validate Semester is selected
      if (!semester) {
        if (alertError && errorText) {
          errorText.textContent = 'Please select your current semester before submitting.';
          alertError.classList.add('show');
          document.getElementById('feedback-semester')?.focus();
        }
        return;
      }

      // Validate at least one feedback field has content
      if (!websiteFeedback && !deptFeedback && !collegeFeedback && !suggestions) {
        if (alertError && errorText) {
          errorText.textContent = 'Please share your feedback or suggestions in at least one field before submitting.';
          alertError.classList.add('show');
        }
        return;
      }

      // Check if Google Apps Script URL has been configured
      if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL.trim() === '' || GOOGLE_APPS_SCRIPT_URL.includes('PASTE_YOUR')) {
        if (alertInfo) {
          alertInfo.classList.add('show');
          alertInfo.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else if (alertError && errorText) {
          errorText.textContent = 'Setup Notice: Google Sheets backend URL is not yet connected in js/feedback.js. Follow the 3-minute steps in google-apps-script.js to link your spreadsheet.';
          alertError.classList.add('show');
        }
        return;
      }

      // Prepare payload matching the 7 spreadsheet columns
      const payload = {
        studentName: studentName || 'Anonymous',
        semester: semester,
        websiteFeedback: websiteFeedback,
        deptFeedback: deptFeedback,
        collegeFeedback: collegeFeedback,
        suggestions: suggestions,
        _hp_security: ''
      };

      // Prevent duplicate submission & set loading indicator
      const formControls = feedbackForm.querySelectorAll('input, select, textarea, button');
      formControls.forEach(el => el.disabled = true);

      if (submitBtn) {
        submitBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon" style="animation: spin 1s linear infinite;">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
          </svg>
          <span>Submitting Feedback...</span>
        `;
      }

      try {
        // Send as text/plain to avoid CORS OPTIONS preflight that Apps Script does not support
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'cors',
          redirect: 'follow',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result && result.status === 'success') {
          if (alertSuccess) {
            alertSuccess.classList.add('show');
            alertSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          feedbackForm.reset();
        } else {
          const msg = (result && result.message) ? result.message : 'Submission failed. Please try again.';
          if (alertError && errorText) {
            errorText.textContent = msg;
            alertError.classList.add('show');
            alertError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      } catch (err) {
        console.error('Feedback submission error:', err);
        if (alertError && errorText) {
          errorText.textContent = 'Unable to send feedback. Please check your internet connection and try again.';
          alertError.classList.add('show');
          alertError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } finally {
        // Re-enable form controls & reset button state
        formControls.forEach(el => el.disabled = false);
        if (submitBtn) {
          submitBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            <span>Submit Feedback</span>
          `;
        }
      }
    });
  }
})();
