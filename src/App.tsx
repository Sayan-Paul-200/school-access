import './App.css'
// import { Button } from "@/components/ui/button"
import { ThemeProvider } from './components/theme-provider'
// import { ModeToggle } from './components/mode-toggle'
// import DefaultNavbar from './components/blocks/default-navbar'
import { RouterProvider } from 'react-router'
import { appRouter } from './routes'
// import { defaultRoutes } from './routes/default'


function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <DefaultNavbar routes={defaultRoutes} /> */}
      {/* <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
        <ModeToggle />
      </div> */}
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  )
}

export default App
