import { UserCircle } from "lucide-react";

function Profile() {
  return (
    <section>
      <div className="mt-[100px]">
        <div className="flex items-center gap-2">
          <div className="bg-[#F1F1F1] rounded-full">
            <UserCircle size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-medium">Muhammad</h3>
        </div>
      </div>
    </section>
  );
}

export default Profile;
