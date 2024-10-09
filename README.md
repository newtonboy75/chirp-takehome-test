Company Data Aggregator
This is a full-stack application built using Next.js that allows users to input a company's name and retrieve detailed information about the company from various sources (e.g., Crunchbase). The app demonstrates a modular architecture with server-side rendering (SSR), Axios hooks, TypeScript, and integration with third-party APIs to fetch company data. This project follows SOLID principles and best coding practices for a maintainable and scalable codebase.

Features
Allows users to search for companies by their domain name.
Fetches and displays company data like name, description, website, social media links, etc.
Responsive design with Tailwind CSS for a smooth user experience across devices.
Technology Stack
Frontend: React, Next.js, Tailwind CSS, TypeScript
Backend: Next.js API Routes, Axios
Third-Party APIs: Crunchbase API for fetching company data
Build Tool: Vite for frontend bundling and development
State Management: React hooks
Getting Started
Follow the instructions below to set up and run the project locally.

Prerequisites
Node.js (v14.x or higher)
npm or yarn
Crunchbase API Key (for fetching company data)
Setup Instructions
Clone the repository:


git clone https://github.com/your-username/company-data-aggregator.git
cd company-data-aggregator
Install dependencies:

If you are using npm:

npm install

If you are using yarn:

yarn install


Configure environment variables:

Create a .env.local file in the root of the project with the following content:
NEXT_PUBLIC_CRUNCHBASE_API_KEY=<your_crunchbase_api_key>
Replace <your_crunchbase_api_key> with your actual Crunchbase API key.

Run the application:

To start the development server:

If you are using npm:
npm run dev

If you are using yarn:
yarn dev

The app will be running at http://localhost:3000.

Build for production:

If you are ready to deploy the app, you can create an optimized production build:

If you are using npm:
npm run build


If you are using yarn:
yarn build


This will generate the static assets and optimized server-side code.

Run the production build locally:

After building the project, you can serve the production build locally:

If you are using npm:
npm run start

If you are using yarn:
yarn start

Project Structure
/components: Contains reusable React components like CompanyDetails and CompanyForm.
/hooks: Contains custom hooks like useAutocomplete and useCompanyDetails for fetching data.
/pages: Contains Next.js pages for routing.
/api: Contains API routes to proxy requests to third-party APIs.
/styles: Tailwind CSS module styles for the app's layout.
API Proxy Routes
The application uses Next.js API routes to handle requests to external APIs like Crunchbase. This helps keep your API keys secure and handle request logic in a clean, modular way.

This README.md provides an overview of the project and clear instructions on how to set up, install, and run the application.