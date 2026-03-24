# GAMEON DEN Website Design & Functionality Specification

## 1. **Overview**

This document outlines the design and functionality of the GAMEON DEN website. The site is designed to be a modern, engaging, and user-friendly platform for booking gaming slots and exploring the services offered. The primary goal is to drive bookings through a seamless and intuitive WhatsApp integration.

## 2. **Visual Design Language**

### **Color Palette**

- **Primary:** `#7E22CE` (A vibrant purple, used for buttons, accents, and highlights)
- **Secondary:** `#1F2937` (A dark gray, used for backgrounds and text)
- **Accent:** `#F59E0B` (A bright orange, used for special badges and attention-grabbing elements)
- **Text:** `#FFFFFF` (White, for high contrast on dark backgrounds)
- **Background:** `#111827` (A very dark blue/gray, providing a modern, immersive feel)

### **Typography**

- **Headings:** `Orbitron` - A futuristic, bold font that captures the gaming aesthetic.
- **Body Text:** `Inter` - A clean, readable sans-serif font for all other text content.

### **Overall Feel**

The website should have a dark, modern, and energetic feel, consistent with the gaming world. The use of the `Orbitron` font and the vibrant color palette will create a visually appealing experience that resonates with gamers.

## 3. **Layout and Structure**

### **Header**

- **Logo:** "GAMEON DEN" in stylized text, with "GAMEON" in a bold `Orbitron` font and "DEN" as a highlighted accent.
- **Navigation:** A clean, easy-to-navigate menu with the following links:
    - Home
    - Games
    - Pricing
    - Book Slot (highlighted as a primary call-to-action)
    - About Us
    - Contact
- **Mobile Responsiveness:** A hamburger menu should be implemented for smaller screens to ensure a seamless mobile experience.

### **Footer**

- **Logo & Description:** The GAMEON DEN logo and a brief tagline.
- **Operating Hours:** Clearly displayed for user convenience.
- **Quick Links:** A sitemap for easy navigation.
- **Contact Info:** Address, phone number (linked with `tel:`), and email (linked with `mailto:`).
- **Social Media Links:** Icons or text links to Instagram and YouTube.

## 4. **Page-by-Page Functionality**

### **Home Page (`index.html`)**

- **Hero Section:** A full-width background image with a compelling headline, a brief description, and prominent "Book Now" and "Explore Games" buttons.
- **Featured Games:** A grid of visually appealing game cards, each with a high-quality image, game title, and platform. A "View All Games" button should link to the Games page.
- **Pricing Overview:** A summary of the pricing tiers (Solo, Duo, Squad) with clear cost breakdowns and a "Book Now" button for each.
- **Testimonials:** A section showcasing positive reviews from customers to build trust and credibility.
- **Call to Action (CTA):** A final, prominent CTA section to encourage bookings.

### **Games Page (`games.html`)**

- **Game Library:** A comprehensive grid of all available games, with filters for platform (PS5, Xbox, PC) and genre.
- **Search Functionality:** A search bar to allow users to quickly find specific games.
- **Game Details:** Each game card should include an image, title, and a brief description. Clicking on a game could optionally open a modal with more details.

### **Pricing Page (`pricing.html`)**

- **Detailed Pricing Tiers:** A clear and detailed breakdown of each pricing package, including the cost per player and any included perks.
- **Special Offers:** A section to highlight any current promotions or discounts.
- **Booking CTA:** A prominent "Book Now" button to guide users to the booking page.

### **Book Slot Page (`book-slot.html`)**

- **Booking Form:** A clean and intuitive form with the following fields:
    - **Player Name:** Text input.
    - **Phone Number:** Text input (for WhatsApp).
    - **Preferred Date:** A date picker that defaults to the current date and disables past dates.
    - **Preferred Time:** A dynamic, modern time slot selector that:
        - Displays available time slots in 30-minute intervals.
        - Automatically hides past and booked time slots.
        - Allows the user to select a time with a single click.
    - **Number of Players:** A dropdown to select the number of players, which dynamically updates the cost.
    - **Duration:** Separate dropdowns for hours and minutes (0-59) to allow for precise booking times.
    - **Game Preference:** An optional dropdown to select a preferred game.
    - **Special Requests:** A text area for any additional notes.
- **Cost Calculator:** A real-time cost estimator that updates as the user fills out the form.
- **WhatsApp Integration:** On form submission, the page should generate a pre-filled WhatsApp message with the booking details and open it in a new tab.

### **About Us Page (`about.html`)**

- **Our Story:** A section detailing the history and mission of GAMEON DEN.
- **The Team:** Photos and brief bios of the staff to add a personal touch.
- **Our Facility:** A gallery of images showcasing the gaming lounge and equipment.

### **Contact Page (`contact.html`)**

- **Contact Form:** A simple form for general inquiries, with fields for name, email, and message.
- **Contact Information:** Clearly displayed address, phone number, and email.
- **Embedded Map:** An interactive Google Maps embed showing the location of the gaming lounge.

## 5. **JavaScript Functionality**

- **`main.js`:** Handles global functionality, such as the mobile navigation toggle.
- **`book-slot.js`:** Manages the entire booking process, including:
    - Dynamic generation of time slots.
    - Real-time cost calculation.
    - Form validation.
    - WhatsApp message generation.
- **Other Scripts:** Each page should have its own dedicated script for page-specific functionality (e.g., `home.js`, `games.js`).

This detailed specification should provide your developer with all the necessary information to bring the GAMEON DEN website to life. The focus on a modern design, intuitive functionality, and seamless WhatsApp integration will ensure a successful and engaging platform for your customers.