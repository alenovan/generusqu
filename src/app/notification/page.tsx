'use client';

import DashboardLayout from "@/components/Layout/DashboardLayout";
import NotificationList from "@/components/Notification/NotificationList";
import HomePageHeader from "@/modules/Homepage/HomePageHeader";


const Notification = () => {

    return (
        <DashboardLayout
            bottomNavigation={false}
            px="20px"
            meta={{
                title: 'Beli Followers Tik Tok | Jasa Followers Tik Tok',
                description:
                    'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.',
            }}
            navbarHeader={{
                showBackButton: true,
                title: "Notifikasi"

            }}
        >
            <NotificationList />
        </DashboardLayout>
    );
};

export default Notification;
