import { Route, Routes } from 'react-router-dom'
import { EntrancePage } from './Pages/Entrance'
import { Home } from './Pages/Home'
export const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<EntrancePage />} />
      <Route path="/choose" element={<Home />} />
    </Routes>
  )
}
