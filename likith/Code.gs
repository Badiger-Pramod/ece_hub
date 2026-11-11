/**
 * ==============================================================================
 * SSIT ECE Resource Hub - Student Feedback Collector Backend
 * Google Apps Script (Code.gs)
 *
 * Creator: B. Pramod (USN: 24EC018)
 * Department: Electronics and Communication Engineering (ECE)
 * Institution: Sri Siddhartha Institute of Technology (SSIT), Tumakuru
 * ==============================================================================
 */

// Column headers matching your requirements exactly
const SHEET_HEADERS = [
  "Submission Date and Time",
  "Student Name (optional)",
  "Semester",
  "Website Feedback",
  "ECE Department Feedback",
  "College Feedback",
  "Suggestions for Improvement"
];

// Optional Email Notification Setting
// Set to true to receive an email notification for every feedback submission
const ENABLE_EMAIL_NOTIFICATIONS = true;

// The email address where notifications will be sent
const NOTIFICATION_EMAIL = "badiger.pramod9900@gmail.com";

/**
 * Handle HTTP GET - Simple health check confirming deployment is live
 */
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    return ContentService.createTextOutput(JSON.stringify({
      status: "online",
      service: "SSIT ECE Resource Hub Feedback API",
      spreadsheetName: sheet ? sheet.getName() : "Connected",
      timestamp: new Date().toISOString()
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "online",
      service: "SSIT ECE Resource Hub Feedback API",
      timestamp: new Date().toISOString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle HTTP POST - Collects student feedback and appends a row
 */
function doPost(e) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getActiveSheet();

    // Auto-initialize header row if sheet is brand new or empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(SHEET_HEADERS);
      const headerRange = sheet.getRange(1, 1, 1, SHEET_HEADERS.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#1E3A8A"); // SSIT Dark Blue
      headerRange.setFontColor("#FFFFFF");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);

      // Auto-resize columns
      for (let i = 1; i <= SHEET_HEADERS.length; i++) {
        sheet.setColumnWidth(i, 200);
      }
      sheet.setColumnWidth(1, 180); // Date/Time
      sheet.setColumnWidth(2, 160); // Student Name
      sheet.setColumnWidth(3, 140); // Semester
      sheet.setColumnWidth(4, 250); // Website Feedback
      sheet.setColumnWidth(5, 250); // ECE Dept Feedback
      sheet.setColumnWidth(6, 250); // College Feedback
      sheet.setColumnWidth(7, 280); // Suggestions
    }

    // Parse incoming data
    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Anti-spam honeypot check (hidden field on the web form)
    if (data._hp_security && String(data._hp_security).trim() !== "") {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Spam submission rejected."
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Format submission date and time in Indian Standard Time (IST)
    const formattedDate = Utilities.formatDate(
      new Date(),
      "Asia/Kolkata",
      "yyyy-MM-dd HH:mm:ss"
    );

    // Extract and sanitize student input fields
    const studentName = data.studentName && String(data.studentName).trim() !== "" 
      ? String(data.studentName).trim().slice(0, 100) 
      : "Anonymous";

    const semester = data.semester && String(data.semester).trim() !== ""
      ? String(data.semester).trim().slice(0, 50)
      : "Not Specified";

    const websiteFeedback = data.websiteFeedback 
      ? String(data.websiteFeedback).trim().slice(0, 4000) 
      : "";

    const deptFeedback = data.deptFeedback 
      ? String(data.deptFeedback).trim().slice(0, 4000) 
      : "";

    const collegeFeedback = data.collegeFeedback 
      ? String(data.collegeFeedback).trim().slice(0, 4000) 
      : "";

    const suggestions = data.suggestions 
      ? String(data.suggestions).trim().slice(0, 4000) 
      : "";

    // Validation: Require at least one feedback or suggestion response
    if (!websiteFeedback && !deptFeedback && !collegeFeedback && !suggestions) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Please provide feedback or suggestions in at least one field before submitting."
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Append new row into the spreadsheet
    sheet.appendRow([
      formattedDate,
      studentName,
      semester,
      websiteFeedback,
      deptFeedback,
      collegeFeedback,
      suggestions
    ]);

    // Optional Email Notification to B. Pramod
    if (ENABLE_EMAIL_NOTIFICATIONS && NOTIFICATION_EMAIL) {
      try {
        const emailSubject = `[SSIT ECE Hub] New Feedback: ${semester} (${studentName})`;
        const emailBody = 
`Hello Pramod,

A new student feedback response has been submitted on the SSIT ECE Resource Hub!

==================================================
SUBMISSION DETAILS
==================================================
Date & Time: ${formattedDate} (IST)
Student Name: ${studentName}
Semester: ${semester}

Website Feedback:
${websiteFeedback || '(No feedback provided)'}

ECE Department Feedback:
${deptFeedback || '(No feedback provided)'}

College Feedback (SSIT):
${collegeFeedback || '(No feedback provided)'}

Suggestions for Improvement:
${suggestions || '(No suggestions provided)'}
==================================================

You can view, filter, sort, and download all responses in your private Google Spreadsheet:
"${spreadsheet ? spreadsheet.getName() : 'SSIT ECE Resource Hub - Student Feedback'}"

Best regards,
SSIT ECE Resource Hub System`;

        MailApp.sendEmail({
          to: NOTIFICATION_EMAIL,
          subject: emailSubject,
          body: emailBody
        });
      } catch (mailError) {
        // Non-blocking: log error so form submission still succeeds
        Logger.log("Email notification error: " + mailError.toString());
      }
    }

    // Return success JSON
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Thank you for sharing your feedback! Your thoughts have been securely saved."
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("doPost error: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "Server error: " + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
