import Sidebar from "@/app/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="main flex justify-stretch">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <div className="main-screen nav"></div>
        </div>
      </div>
    </>
  );
}
