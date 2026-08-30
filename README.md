# Book Vibe - Book Management Application

A modern, responsive book management application built with React, Vite, Tailwind CSS, and Recharts. Browse books, manage your reading lists, and visualize your reading data.

## Live Link

- **Frontend:** https://book-vive.surge.sh/

## Features

- Responsive design for all devices
- Book browsing and details view
- Reading list management (Read, Wishlist, Sold)
- Data visualization with Recharts
- Dynamic page titles
- Protected routes
- Modern UI with Tailwind CSS and DaisyUI
- Toast notifications

## Technologies Used

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, DaisyUI
- **Routing:** React Router DOM
- **Charts:** Recharts
- **Icons:** React Icons
- **Notifications:** React Toastify

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Jewel-190237/Book-vibe.git
   ```

2. Open the project folder:
   ```bash
   cd Book-vibe
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
Book-vibe/
├── public/
├── src/
│   ├── Components/
│   ├── Pages/
│   ├── Context/
│   ├── Hooks/
│   ├── Assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Features in Detail

### Book Browsing
- View all available books in a grid layout
- Click on a book to see detailed information
- Responsive design for all screen sizes

### Reading List Management
- **Read List:** Books you have finished reading
- **Wishlist:** Books you want to read in the future
- **Sold List:** Books you have sold or donated
- Easy switching between lists

### Data Visualization
- Visual representation of reading data using Recharts
- Track your reading progress
- Analyze your reading habits

### User Interface
- Responsive design for mobile, tablet, and desktop
- Modern and clean UI with Tailwind CSS
- Smooth animations and transitions
- Toast notifications for user feedback

## Special Features

### Responsive Design
- Ensured the website is visually appealing and functional across all devices, including desktops, tablets, and mobile phones.

### Dynamic Titles
- Used dynamic title generation to display relevant and descriptive titles for each page, improving SEO and user navigation.

### React Router
- Employed React Router for efficient client-side navigation, providing seamless and responsive routing within the single-page application (SPA) architecture.

### Recharts Integration
- Used Recharts for visual representation of book data, providing insights into reading patterns and preferences.

### Error Page
- Developed a dedicated error page to handle and gracefully display error messages or fallback content when users encounter unexpected issues or pages not found.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Author

**Jewel-190237**
- GitHub: [Jewel-190237](https://github.com/Jewel-190237)
- Email: jewel190237@gmail.com

## Contributing

Feel free to fork this project and create pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
