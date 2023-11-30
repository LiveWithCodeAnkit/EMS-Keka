import React from "react";
import AssetLayout from "./layout/AssetLayout";
import AssetsNavbar from "../../components/assets/AssetsNavbar";
import AssetsTableView from "../../components/assets/AssetsTableView";

const AssetPage = () => {
  return (
    <>
      <AssetLayout>
        <AssetsNavbar>
          <AssetsTableView />
        </AssetsNavbar>
      </AssetLayout>
    </>
  );
};

export default AssetPage;
