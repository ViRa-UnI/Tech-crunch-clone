# Frontend Website

The frontend of the TechCrunch clone is built using Next.js, a React framework, and it replicates all the features of the original TechCrunch website.

## Pages

The frontend consists of several pages, each with its own functionality.

### Index Page (`/pages/index.js`)

This is the homepage of the website. It displays a list of articles fetched from the backend. Each article is displayed using the `Article` component.

### Admin Page (`/pages/admin/index.js`)

This page is accessible only to authenticated users. It provides an interface for managing articles. The `AdminPanel` component is used here.

## Components

The frontend uses several reusable components.

### Header (`/components/Header.js`)

This component displays the website's header. It includes navigation links to the homepage and the admin page.

### Footer (`/components/Footer.js`)

This component displays the website's footer.

### Article (`/components/Article.js`)

This component displays an individual article. It is used in the `ArticleList` component.

### ArticleList (`/components/ArticleList.js`)

This component displays a list of articles. It fetches the articles from the backend and uses the `Article` component to display each one.

### AdminPanel (`/components/AdminPanel.js`)

This component provides an interface for managing articles. It is used in the admin page.

## Styles

The styles for the components are defined in the `/styles` directory. Each component has its own CSS file.

## Usage

To use the frontend, navigate to the website's URL in your web browser. From the homepage, you can read articles. If you are an authenticated user, you can navigate to the admin page to manage articles.