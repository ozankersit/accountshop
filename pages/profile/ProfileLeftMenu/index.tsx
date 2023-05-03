import { FC } from "react";
import Link from "next/link";
import { getAuth, updateProfile } from "firebase/auth";
import Image from "next/image";

interface IProps {
  children?: React.ReactNode;
}

const tabs = [
  { id: 1, title: "Profile Details", route: "/profile/dashboard" },
  { id: 2, title: "İlanlarım", route: "/profile/advert" },
  { id: 3, title: "Orders" },
  { id: 4, title: "Sales" },
  { id: 5, title: "Change Password" },
  { id: 6, title: "Change Email" },
  { id: 7, title: "Support" },
  { id: 8, title: "Log out" },
];

const auth = getAuth();
{/*burayı dashboardda inputlarda kullanıcam şu an sadece test etmek için burda kullandım*/}
const profileUpdates = updateProfile(auth.currentUser as any, {
  displayName: "Ozan Kerşit",
  photoURL: "https://i.imgur.com/OWEeevl.jpg",
})
  .then(() => {
    console.log("profile updated");
  })
  .catch((error: string) => {});


{/*burayı da aynı şekilde test etmek için kullandım*/}
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  console.log(email);
  console.log(displayName);
}

const ProfileLeftMenu: FC<IProps> = ({ children }) => {
  return (
    <div className="flex gap-2.5  justify-center items-center mt-[93px] mb-[153px]">
      <div className=" flex flex-col gap-10 justify-center bg-white max-w-xs pl-7 rounded-md">
        <div className="flex gap-2.5 mt-10 mr-16">
          {/* <Image src={`${user?.photoURL}`} width={50} height={50} /> */}
          <img src={`${user?.photoURL}`} /> {/*buraya next image gelecek*/}
          <span className="text-dark text-title">{user?.displayName}</span>
        </div>
        <div className="flex flex-col gap-7 pb-[214px]">
          {tabs.map((item) => (
            <div key={item.id}>
              <Link href={`${item.route}`}>
                <button className="text-storm-gray">{item.title}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
};

export default ProfileLeftMenu;
