# Sport Zone E-Commerce Platform

## Overview

This project is a comprehensive e-commerce website built for a sporting goods business. The platform offers a wide range of sports equipment and accessories, supporting a single user role that manages both customer and admin tasks. It provides a seamless experience for browsing products, managing inventory, and making purchases.

## Live Link: https://sportszoneclient.vercel.app

## Core Features

### 1. Navbar & Footer

- **Navbar**: Includes a logo and necessary menu items such as _All Products_, _Manage Products_, _Cart_, and _About Us_.
- **Footer**: Contains social media icons and links to important pages for easy navigation.

### 2. Homepage

- **Hero Section**: Features a carousel displaying current discounts and promotions.
- **Featured Products**: Displays the latest sporting goods in a card layout, including product details like category, stock, brand, rating, description, price, and a "View Details" button.
- **Category Section**: Lists product categories that link to the All Products page, filtered by the selected category.
- **Contact Us Section**: A contact form that collects user messages and optionally sends emails using services like EmailJS or NodeMailer.

### 3. About Us

- Detailed information about the business, its mission and vision, team members, and store locations. Includes contact details for customer support.

### 4. All Products Page

- Displays a complete list of all products, with filtering and sorting capabilities based on product name, category, brand, rating, and price. A "Clear filter" button resets all applied filters.

### 5. Single Product Page

- Provides a detailed view of each product, including its name, description, brand, stock quantity, rating, price, and an "Add to Cart" button.
- **Add to Cart**: Prevents duplicate product entries in the cart by updating the quantity based on stock availability.

### 6. Cart Page

- Displays all products added to the cart with options to increase or decrease quantity and remove products. It calculates the total price including a 15% VAT and allows proceeding to checkout if the product is in stock.

### 7. Checkout Page

- Collects user details such as name, email, phone number, and delivery address.
- Supports two payment methods: _Cash on Delivery_ and _Stripe_ (optional).
- After a successful order, the stock is updated, and the user is redirected to a success page.

### 8. Manage Products Page

- Admins can add, update, and delete products using RTK Query.
- Product fields are prefilled during updates, making the process user-friendly.

### 9. Backend Integration

- The backend is integrated for full functionality, handling product data, orders, and payments.

## Design Considerations

- The design emphasizes user experience with a consistent sports-themed color scheme.
- Fully responsive layout, ensuring compatibility across all device types (desktop, tablet, mobile).

## Bonus Requirements

- **RTK Query Polling**: Automatically refreshes the latest products every 30 seconds.
- Implement animations using any other libraries on the homepage

- A detailed overview of your projects in your readme file and significant amount of meaningful commits

## Technologies Used

- **Frontend**: React, React Router, RTK Query, Tailwind CSS, react-rating, react-photo-view
- **Backend**: Node.js, Express, MongoDB
- **State Management**: Redux, Redux Toolkit

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

   ```

2. npm install
3. npm run dev
