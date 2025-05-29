import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import PrepDashboard from './pages/PrepDashboard';


function App() {
  console.log('App component rendered');
  return (
    <ThemeProvider>
      <Layout>
        <PrepDashboard />
      </Layout>
    </ThemeProvider>
  );
}

export default App;