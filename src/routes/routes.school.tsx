import SchoolLayout from "@/layouts/SchoolLayout";
import type { AppRoute } from "./utils";
import { LayoutDashboard, Send, Ticket, UserRound, UserRoundSearch } from "lucide-react";
import { lazy, Suspense } from "react";

// Lazy imports
const SchoolDashboard = lazy(() => import('@/pages/school/SchoolDashboard'));
const BrowseTeachers = lazy(() => import('@/pages/school/BrowseTeachers'));
const TeacherSingle = lazy(() => import('@/pages/school/TeacherSingle'));
const Requests = lazy(() => import('@/pages/school/Requests'));
const Account = lazy(() => import('@/pages/school/Account'));
const AccountSettings = lazy(() => import('@/pages/school/AccountSettings'));
const Subscriptions = lazy(() => import('@/pages/school/Subscriptions'));

export const schoolRoutes: AppRoute = {
    path: '/school',
    element: <SchoolLayout />,
    children: [

        {
            label: 'Dashboard',
            path: 'dashboard',
            icon: LayoutDashboard,
            element: (
                <Suspense>
                    <SchoolDashboard />
                </Suspense>
            ),
        },

        {
            label: 'Browse Teachers',
            path: 'teachers',
            icon: UserRoundSearch,
            element: (
                <Suspense>
                    <BrowseTeachers />
                </Suspense>
            ),
            children: [
                {
                    label: 'Teacher',
                    path: 'teacher/:slug',
                    element: (
                        <Suspense>
                            <TeacherSingle />
                        </Suspense>
                    ),
                    hidden: true
                }
            ]
        },
        
        {
            label: 'Requests',
            path: 'requests',
            icon: Send,
            element: (
                <Suspense>
                    <Requests />
                </Suspense>
            ),
        },

        {
            label: 'Account',
            path: 'account',
            icon: UserRound,
            element: (
                <Suspense>
                    <Account />
                </Suspense>
            ),
            children: [
                {
                    label: 'Account Settings',
                    path: 'setting',
                    element: (
                        <Suspense>
                            <AccountSettings />
                        </Suspense>
                    ),
                    hidden: false
                }
            ]
        },

        {
            label: 'My Subscription',
            path: 'subscription',
            icon: Ticket,
            element: (
                <Suspense>
                    <Subscriptions />
                </Suspense>
            ),
        },

    ]
}