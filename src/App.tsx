import { Route, Routes } from 'react-router-dom'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { useSyncTheme } from '@/hooks/use-sync-theme'
import Home from '@/pages/home'
import About from '@/pages/about'
import Projects from '@/pages/projects'
import Agents from '@/pages/agents'

function App() {
  useSyncTheme()

  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/agents" element={<Agents />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
