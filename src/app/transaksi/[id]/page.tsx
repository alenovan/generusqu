'use client';

import DashboardLayout from "@/components/Layout/DashboardLayout";
import TransaksiDetail from "@/components/Transaksi/TransaksiDetail";
import TransaksiDetailItem from "@/components/Transaksi/TransaksiDetailItem";
import Link from "next/link";

const DetailTransaksi = () => {

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
                title: "Detail Absensi"

            }}
        >
            <TransaksiDetail />
        </DashboardLayout>
    );
};

export default DetailTransaksi;
