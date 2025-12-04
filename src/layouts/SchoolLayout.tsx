import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router"

const SchoolLayout = () => {

    const location = useLocation()
    const navigate  = useNavigate()

    useEffect(() => {
        const path = location.pathname
        const roleFromPath = path.split('/')[1]
        const validRoles = ['school']

        if ( !validRoles.includes(roleFromPath) ) {
            navigate('/not-found')
        }
    }, [location, navigate])

  return (
    <div>
        <h2 className="text-2xl">Hello, school!</h2>
        <Outlet />
    </div>
  )
}

export default SchoolLayout