import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Home from './components/Home';
import Vm from './components/Vm';
import VmRQ from './components/VmRQ';
import VmDetail from './components/VmDetail';
import DependentQuery from './components/DependentQuery';
import QueryFromCache from './components/QueryFromCache';
import { Paginated } from './components/Paginated';

const queryClient = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/vm">Traditional Fetching Vm</Link>
        </li>
        <li>
          <Link to="/vm-rq">React Query Fetching Vm</Link>
        </li>
        <li>
          <Link to="/dependent">DependentQuery</Link>
        </li>
        <li>
          <Link to="/cache">Query From Cache</Link>
        </li>
        <li>
          <Link to="/paginated">Paginated Query</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vm" element={<Vm />} />
      <Route path="/vm-rq" element={<VmRQ />} />
      <Route path="/vm/:vmId" element={<VmDetail />} />
      <Route path="/dependent" element={<DependentQuery />} />
      <Route path="/cache" element={<QueryFromCache />} />
      <Route path="/paginated" element={<Paginated />} />
    </Routes>
  </div>
  </BrowserRouter>
  <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>
  );
}

export default App;
