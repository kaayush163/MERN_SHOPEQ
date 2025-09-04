import { ChartNoAxesCombined } from "lucide-react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <Fragment>
      {/* for large screendisplying as flex and for other screen hidden */}
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        {/* before navigate there is localhost ip localhost:5173 so /we have to add /admin/dashboard  */}
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2"
        >
          <ChartNoAxesCombined size={30} />
          {/* analytics icon imported from lucid.dev */}
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>
      </aside>
    </Fragment>
  );
}

export default AdminSidebar;
