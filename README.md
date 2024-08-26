# Shoeville Store

Shoeville Store is a full-stack e-commerce web application that offers a variety of footwear from popular brands as well as unique handmade products. The project is designed to provide a seamless online shopping experience with features like product listings, a shopping cart, user authentication, order history, and secure payment processing using Stripe.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Project Overview

Shoeville Store is a web-based platform built to showcase and sell a variety of shoes. The application is developed using modern web technologies, with a focus on providing an intuitive and responsive user interface. The project also includes backend services to manage products, handle user authentication, and process orders.

## Features

- **Product Listings:** Browse and search for a variety of footwear products.
- **Shopping Cart:** Add products to the cart and manage quantities.
- **User Authentication:** Register and log in to access personalized features.
- **Order History:** View previous orders and track purchases.
- **Responsive Design:** Accessible on both desktop and mobile devices.
- **Payment Integration:** Secure payment processing using Stripe (development version).

## Technologies Used

- **Frontend:**
  - React.js
  - Axios
  - React Router

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - JWT (JSON Web Token) for authentication
  - Bcrypt.js for password hashing

- **Third-Party Services:**
  -Flutterwave for payment processing

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB
- Flutterwave Account (for payment integration)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Krizdaniels/shoeville-ecommerce-store.git
   cd shoeville-ecommerce-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```plaintext
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=ecommercewebapi
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Krizdaniels/shoeville-ecommerce-store.git
   cd shoeville-ecommerce-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Usage

- Register or log in to your account.
- Browse the product listings and add items to your cart.
- Review your cart and proceed to checkout.
- Place an order and view your order history.

## Future Enhancements

- Implement user reviews and ratings for products.
- Add admin functionality to manage products and orders.
- Enhance the search and filtering options.
- Implement real-time notifications for order status.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue to discuss changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

**Ogah Daniel**  
https://github.com/Krizdaniels/shoeville-ecommerce-store.git 

https://www.linkedin.com/in/chriz-daniels
