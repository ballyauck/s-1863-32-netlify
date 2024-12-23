import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProfileContent } from "@/components/profile/ProfileContent";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container max-w-2xl py-20">
        <ProfileContent />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;