import Header from "./Header"
import Sidebar from "./Sidebar"

function Layout({ children }) {
  return (
    <div>
        <Header />
        <Sidebar />
          {children}
    </div>
  )
}

export default Layout