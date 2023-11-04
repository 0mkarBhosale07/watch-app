import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="main flex">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="main-screen"></div>
        </div>
      </div>
    </>
  );
}
