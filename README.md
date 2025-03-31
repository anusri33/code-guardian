# OWASP + WCAG Guidelines Scanner

**Unifying Secure and Accessible Code in One Tool**

## 🔍 Overview
The OWASP + WCAG Guidelines Scanner is a developer-first tool that scans web applications for both **security vulnerabilities** and **accessibility issues** in one unified experience.

It merges OWASP Top 10 security scanning (via Wapiti) and WCAG 2.1 accessibility testing (via Pa11y) into a clean interface with:
- One-click scan
- Categorized results
- Exportable reports
- Local or CI/CD integration support

---

## 💡 Why We Built This
Most tools focus on either:
- Security (e.g., OWASP ZAP, Semgrep), **or**
- Accessibility (e.g., axe-core, Lighthouse)

This results in:
- Multiple workflows
- Inconsistent reports
- High setup cost or enterprise lock-in

### Our Solution:
> "Make quality code accessible to every developer — secure, inclusive, and effortless."

We built a single tool for scanning both WCAG + OWASP issues, with an intuitive UI and no DevOps burden.

---

## ⚙️ Tech Stack
- **Frontend**: ReactJS
- **Backend**: Spring Boot
- **Security Scan**: Wapiti (CLI)
- **Accessibility Scan**: Pa11y (CLI)

---

## 🚀 Features
- Scan a URL or uploaded code file
- Choose scan type: WCAG, OWASP, or both
- Downloadable TXT results
- Filtered views for accessibility or security
- Beginner-friendly and cross-platform

---

## 🧩 How to Run
### Prerequisites:
- Node.js + npm
- Java 17+
- Maven
- Install Wapiti: `pip install wapiti3`
- Install Pa11y: `npm install -g pa11y`

### Frontend:
```bash
cd frontend
npm install
npm start
```

### Backend:
```bash
cd backend
./mvnw spring-boot:run
```

---

## 🛠️ What's Next
- ✅ Visual dashboards with severity
- ✅ Add GitHub Actions integration
- ✅ Create custom OWASP detection logic
- ✅ PDF/HTML report downloads


