import DefaultNavbar from "@/components/blocks/default-navbar"
import type { AppRoute } from "@/routes/utils"
import { Outlet } from "react-router"

type PublicLayoutProps = {
    routes: AppRoute[]
}

const PublicLayout = ({ routes }: PublicLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
        <DefaultNavbar routes={routes} />

        <main className="flex-1 container mx-auto px-4 py-8">
            <Outlet />
        </main>

        <footer className="border-t py-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} School Access — All rights reserved.
        </footer>
    </div>
  )
}

export default PublicLayout