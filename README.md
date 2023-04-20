# Sign In Page with Google Auth and Dashboard with Line and Pie Charts

This project is a sign in page with Google authentication and a dashboard that displays line and pie chart. The data for the charts is fetched from the Twelve Data API using Axios. The project is built using Next.js and uses NextAuth for authentication. React-icons and React-skeleton-loader are also used as libraries to enhance the UI.

## Features

- Sign in with Google authentication
- Dashboard with line and pie charts
- Data for charts fetched from the Twelve Data API
- Responsive design for both pages
- React-icons and React-skeleton-loader used for UI enhancements

## Installation

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_TWELVE_API_KEY=<YOUR_TWELVE_DATA_API_KEY>
NEXT_PUBLIC_GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=<YOUR_GOOGLE_CLIENT_SECRET>
NEXTAUTH_SECRET=<YOUR_SECRET_HERE>
```


4. Run the development server with `npm run dev`

## Usage

1. Navigate to the sign in page at `http://localhost:3000`
2. Click the "Sign in with Google" button to sign in
3. Once signed in, you will be redirected to the dashboard page
4. The dashboard page displays a line chart and pie charts based on the data fetched from the Twelve Data API
5. The dashboard page is responsive and will adapt to different screen sizes
6. To signout, use the logout button on the sidebar.

# Deployment 

This project is deployed on [Vercel](https://vercel.com/). You can view the deployed version [🔗here](https://board-o.vercel.app/dashboard).


