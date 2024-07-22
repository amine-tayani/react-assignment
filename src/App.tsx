import SitesHeader from "@/components/sites-header";
import Sidebar, { SidebarItem } from "@/components/sidebar";
import TableContainer from "@/components/table/container";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";

function App() {
  return (
    <>
      <div className="flex font-roboto">
        <Sidebar>
          <SidebarItem icon={<Icons.Home />} text="Dashboard" />
          <SidebarItem active icon={<Icons.Halt />} text="P.P.E Violations" />
          <div className="my-3">
            <p className="font-medium text-gray-400">Manage</p>
          </div>
          <SidebarItem icon={<Icons.Ppes />} text="P.P.Es" />
          <SidebarItem icon={<Icons.Case />} text="Contractors" />
          <SidebarItem icon={<Icons.User />} text="Workers" />
        </Sidebar>
        <div className="flex-1 overflow-hidden bg-gray-100">
          <MainNav />
          <SitesHeader />
          <TableContainer />
        </div>
      </div>
    </>
  );
}

export default App;
