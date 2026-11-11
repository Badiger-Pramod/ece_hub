# SSIT ECE Resource Hub (3rd to 8th Semester)

> **“One Place for SSIT ECE Study Resources.”**  
> Notes, PYQs, question papers, assignments, textbooks and important study materials — organized for SSIT ECE students from 3rd to 8th semester.

Created and Maintained by:  
**B. Pramod** (USN: `24EC018`)  
Department of Electronics and Communication Engineering (ECE)  
**Sri Siddhartha Institute of Technology (SSIT), Tumakuru**  
Contact: `badiger.pramod9900@gmail.com` | Phone: `9900173392` | WhatsApp: `8197159702`  
📢 **Official WhatsApp Channel**: [Join Channel](https://whatsapp.com/channel/0029VbBs0ymId7nU8XMlQm0M)

---

## 🚀 Active Google Drive Repositories

- **3rd Semester**: [Open in Google Drive](https://drive.google.com/drive/folders/10A22FDHw3j7eA5kIDYn6FzdEhDXj8HKC)
- **4th Semester**: [Open in Google Drive](https://drive.google.com/drive/folders/1eTAomKSCOVdGVzwWvMAuI4Y-z9eiLtEl)
- **5th Semester**: *Resources coming soon (Paste link in `js/resources-data.js`)*
- **6th Semester**: *Resources coming soon (Paste link in `js/resources-data.js`)*
- **7th Semester**: *Resources coming soon (Paste link in `js/resources-data.js`)*
- **8th Semester**: *Resources coming soon (Paste link in `js/resources-data.js`)*
- **Original Combined Drive**: [Open in Google Drive](https://drive.google.com/drive/folders/1OHt9JDq2Va4piknGYh2rDRKOCKJKuct6)

---

## ⚡ How to Add or Activate Drive Links for 5th–8th Semesters

When you receive the Google Drive folder links for 5th, 6th, 7th, or 8th semester, open [`js/resources-data.js`](js/resources-data.js) and simply paste the URLs into the `DRIVE_FOLDERS` object:

```javascript
const DRIVE_FOLDERS = {
  SEM_3: "https://drive.google.com/drive/folders/10A22FDHw3j7eA5kIDYn6FzdEhDXj8HKC",
  SEM_4: "https://drive.google.com/drive/folders/1eTAomKSCOVdGVzwWvMAuI4Y-z9eiLtEl",
  
  // Paste your new links here:
  SEM_5: "PASTE_5TH_SEM_DRIVE_LINK_HERE",
  SEM_6: "PASTE_6TH_SEM_DRIVE_LINK_HERE",
  SEM_7: "PASTE_7TH_SEM_DRIVE_LINK_HERE",
  SEM_8: "PASTE_8TH_SEM_DRIVE_LINK_HERE",

  COMBINED: "https://drive.google.com/drive/folders/1OHt9JDq2Va4piknGYh2rDRKOCKJKuct6"
};
```

**That's it!** The website will automatically replace the "Resources coming soon" badges with active **"Open in Google Drive"** buttons across the homepage, dedicated semester pages, and search cards.

---

## 📂 Project Structure

```
ssit-ece-resource-hub/
├── index.html                   # Main portal with 6-semester grid, dropdown nav & universal search
├── 3rd-semester-ece-notes.html  # Dedicated 3rd semester portal & SEO landing page
├── 4th-semester-ece-notes.html  # Dedicated 4th semester portal & SEO landing page
├── 5th-semester-ece-notes.html  # Dedicated 5th semester portal & SEO landing page
├── 6th-semester-ece-notes.html  # Dedicated 6th semester portal & SEO landing page
├── 7th-semester-ece-notes.html  # Dedicated 7th semester portal & SEO landing page
├── 8th-semester-ece-notes.html  # Dedicated 8th semester portal & SEO landing page
├── css/
│   ├── styles.css               # Global tokens, layout, dropdown menu & footer
│   └── components.css           # 3-col semester cards, coming soon state, search & profile
├── js/
│   ├── resources-data.js        # Centralized resource registry & drive config (3rd to 8th)
│   └── feedback.js              # Student feedback form client handler (Google Apps Script -> Sheets)
├── google-apps-script.js        # Google Apps Script backend template with 7 columns & email alerts
├── Code.gs                      # Apps Script backend source file (ready to copy into Google Sheets)
├── assets/
│   └── images/
│       └── pramod.jpg           # Profile photograph of creator B. Pramod
├── sitemap.xml                  # Google Search Console sitemap with all 6 semester URLs
├── robots.txt                   # Standard crawler directives
├── server.ps1                   # Local PowerShell web server
└── README.md                    # Project documentation & deployment guide
```

---

## 🌐 Free Deployment Options

### Option 1: Netlify Drop (30-second Drag & Drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `ssit-ece-resource-hub` folder directly into the window.
3. Your site is immediately live with HTTPS and free custom domain support!

### Option 2: GitHub Pages
1. Push this folder to a GitHub repository named `ssit-ece-resource-hub`.
2. Go to **Settings > Pages**.
3. Under **Branch**, choose `main` and root `/`, then save.
4. Your website will be live at `https://<username>.github.io/ssit-ece-resource-hub/`.

---

## ⚖️ Disclaimer
*This is an independent student resource website created to help students access academic resources. It is not the official website of Sri Siddhartha Institute of Technology (SSIT).*
