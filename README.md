# Science Express - Visitor Management System

## UX(User Exoerience)
- **Responsive Design**
    - Make the site mobile-friendly using CSS Grid/Flexbox so it works perfectly on phones, tablets, and desktops.

- **Sticky Navigation Bar**
    - Navbar remains visible while scrolling for easier navigation.

- **Search & Filter in Current Bookings**
    - Let visitors search by date, time slot, or capacity

## 1. Home Page

### Header
- **Logo** – Science Express branding.
- **Website Name** – "Science Express - Visitor Management System".
- **Navigation Bar**:
  - Home
  - About Us
  - Gallery
  - Contact
  - Admin Panel *(login required)*
  - Current Bookings
  - Register

### Main Content
1. **Hero Section**
   - Background image
   - Company name
   - "Learn More" button (scrolls to About Us section)

2. **About Us Section**
   - Multiple info cards describing Science Express, its mission, and activities.

3. **Gallery Section**
   - Animated image slider of Science Express events and exhibitions.

### Footer
1. **Key Features** – Bullet points of system highlights.
2. **Quick Links** – Navigation to important pages.
3. **Follow Us** – Social media links (LinkedIn, Instagram, etc.).
4. **Contact Info** – Email, phone number, and location.
5. **Copyright**

---

## 2. Admin Panel

### Login Page
- Username & password form.
- Login button.
- Redirect to dashboard on successful login.

### Dashboard (Post-Login)
1. **Booked Schools Table**
   - School name
   - Visit date
   - Time slot
   - Number of students

2. **Filters**
   - Filter bookings by specific date.

---

## 3. Current Bookings Page
- Shows **time slots** for the current day and the next 3 days.
- Displays:
  - Capacity (max visitors allowed)
  - Booked (already registered visitors)
  - Availability (remaining seats)
- If a slot is **full** → Mark as “Not Available”.

---

## 4. School Registration Form
- Fields:
  - School Name
  - Email
  - Contact Number
  - Number of Students
  - Visit Date *(only available dates)*
  - Time Slot *(only available slots for selected date)*
- Submit button redirects to confirmation page.

---

## 5. Confirmation Page
- Unique Booking ID
- Download as PDF
- Displays all details entered in the registration form.
- Shows **confirmation message** with date, time, and booking reference.

---

## File Structure Suggestion


/science-express
│
├── index.html # Home page
├── about.html # About Us
├── gallery.html # Gallery
├── contact.html # Contact page
├── admin
│ ├── login.html # Admin login
│ ├── dashboard.html # Admin dashboard
│
├── bookings.html # Current bookings
├── register.html # Registration form
├── confirm.html # Confirmation page
│
├── css
│ └── style.css # Main stylesheet
│
└── README.md # Project documentation