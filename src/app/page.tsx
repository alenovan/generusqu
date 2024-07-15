'use client';

import HomeNews from "@/components/Home/HomeNews";
import HomePlaformMissionGrid from "@/components/Home/HomePlaformMissionGrid";
import HomePageHeaderMenu from "@/components/Home/HomepageHeaderMenu";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import HomePageHeader from "@/modules/Homepage/HomePageHeader";
import { Box } from "@chakra-ui/react";


const YourComponent = () => {

  return (
    <DashboardLayout
      bottomNavigation={true}
      px="20px"
      contenHeader={<HomePageHeader />}
      meta={{
        title: 'Absensi Generus Qu',
        description:
          'Absensi Generus Qu',
      }}
      navbarHeader={{
        showBackButton: false,

      }}
    >
      <Box h={"200px"} />
    </DashboardLayout>
  );
};

export default YourComponent;
