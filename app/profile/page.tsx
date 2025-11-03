// "use client";
import { UserCircle } from "lucide-react";

function Profile() {
  const userData = localStorage.getItem("user");
  return (
    <section>
      <div className="">
        <div className="flex items-center gap-2">
          <div className="bg-[#F1F1F1] rounded-full">
            <UserCircle size={44} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-medium">Muhammad</h3>
        </div>

        <div>{userData}</div>
      </div>
    </section>
  );
}

export default Profile;
