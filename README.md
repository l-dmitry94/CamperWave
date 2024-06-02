# Camper Wave

## Project Description
This application is developed for a company that provides camper rental services in Ukraine. It consists of three main pages: the homepage, camper catalog, and favorite ads page. Users can browse, filter, and add campers to their favorites.

## Features
### Homepage
- General description of the services provided by the company.
- Navigation to the catalog and favorite ads pages.

### Camper Catalog
- Browse campers of various configurations.
- Filter by location, equipment, and camper type.
- "Load more" button to load additional ads.
- Add ads to favorites using the heart-shaped button.
- Preserve the state of favorite ads after page refresh.
- Modal window with detailed camper information and booking form.

### Favorite Ads Page
- View ads that have been added to favorites.
- Remove ads from the favorites list.

## Technical Details
### Routing (React Router)
- `/` - homepage.
- `/catalog` - camper catalog.
- `/favorites` - favorite ads page.
- Redirect to the homepage for non-existent routes.

### Filtering
- Text input for filtering by location.
- Checkboxes for filtering by equipment.
- Radio buttons for filtering by camper type.

### Ad Management
- Use [mockapi.io](https://mockapi.io/) for backend.
- Pagination: 4 ads per page.

## Requirements
- Render ad cards according to the layout.
- Preserve the state of favorite ad buttons after page refresh.
- Modal window with detailed camper information:
  - Open on "Show more" button click.
  - Close on close button click, backdrop click, or Esc key press.
  - Camper information and reviews with dynamic tab switching.
  - Booking form with required fields: name, email, booking date.
  - Form validation: form doesn't submit on invalid data, page reloads on valid submission.
  - Rent price displayed in UI with commas (e.g., 8000,00).

## Running the Project
1. Clone the repository:
    ```sh
    git clone https://github.com/l-dmitry94/CamperWave.git
    ```
2. Install dependencies:
    ```sh
    cd CamperWave
    npm install
    ```
3. Start the local server:
    ```sh
    npm start
    ```
4. Open in your browser: `http://localhost:5173`

## Technologies Used
- React
- React Router
- mockapi.io
- SCSS for styling

## Author
[Dmytro Liuba](https://www.linkedin.com/in/liuba-dmytro/)
