# FoodMood-App - Vite + React Frontend

Welcome to **FoodMood**, a dynamic and responsive food delivery application developed using Vite and React. The application leverages the Swiggy API to fetch real-time restaurant data, providing a seamless user experience.

## Live Demo

[FoodApp Live](https://food-mood-web-app.vercel.app/)

## Features

- **Restaurant Data**: Fetches real-time restaurant details using Swiggy API.
- **React library**: Built with the power of the React library for a modular and maintainable frontend.
- **State Management**: Utilizes Redux and Redux Toolkit for efficient and scalable state management.
- **Routing**: Implements React Router DOM for navigation between pages.
- **Dark Mode**: Supports a dark mode theme toggle, with the state stored in Redux and persisted in local storage.
- **Responsive Design**: Tailwind CSS is used to ensure the application is fully responsive and visually appealing across devices.
- **Error Handling**: Includes error routes to gracefully handle application-level errors.
- **Local Storage**: Stores user preferences, such as theme settings, with fallback to system theme detection.
- **Custom Hooks**: Implements reusable hooks like `useRestaurantMenu` for data fetching and `useOnlineStatus` to monitor the user's internet connection.
- **Optimized Performance**: Debugged and optimized for issues like infinite re-renders.

## Getting Started

Follow these steps to fork and run the project on your local system:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.
- **Git**: Install Git for cloning the repository.

### Steps to Run Locally

1. **Fork the Repository**: Click on the fork button at the top-right corner of this repository.

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/pavansingh888/FoodMood-Web-App.git
   cd FoodMood-Web-App
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173/` by default.

5. **Build the App for Production**:
   ```bash
   npm run build
   ```

6. **Test Production Build Locally**:
   ```bash
   npm run preview
   ```

### Steps to Make a Pull Request

1. **Create a Branch**:
   ```bash
   git checkout -b feature-name
   ```

2. **Make Your Changes**: Add your feature or fix any issue.

3. **Commit Your Changes**:
   ```bash
   git add .
   git commit -m "Add a meaningful commit message"
   ```

4. **Push Your Changes**:
   ```bash
   git push origin feature-name
   ```

5. **Open a Pull Request**: Go to your forked repository on GitHub and open a pull request.

## Contact

If you have any questions or suggestions, feel free to connect with me on LinkedIn:

[LinkedIn - Pavan Singh](https://www.linkedin.com/in/-pavansingh/)

