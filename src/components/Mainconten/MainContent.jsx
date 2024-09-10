import React from "react";
import InfoCard from "../InfoCard";
import ReportsChart from "./ReportsChart";
import RecentSales from "./RecentSales";
import TopSelling from "./TopSelling";
import RecentActivity from "./RecentActivity";
import BudgetReport from "./BudgetReport";
import WebsiteTraffic from "./WebsiteTraffic";
import NewsUpdates from "./NewsUpdates";

const MainContent = () => {
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <InfoCard title="Sales" value="145" change="12%" type="sales" />
              <InfoCard
                title="Revenue"
                value="$3,264"
                change="8%"
                type="revenue"
              />
              <InfoCard
                title="Customers"
                value="1244"
                change="-12%"
                type="customers"
              />
              <ReportsChart />
              <RecentSales />
              <TopSelling />
            </div>
          </div>

          <div className="col-lg-4">
            <RecentActivity />
            <BudgetReport />
            <WebsiteTraffic />
            <NewsUpdates />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;




const MainContent = () => {};
export default MainContent;