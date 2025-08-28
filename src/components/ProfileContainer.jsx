import React from 'react'
import Profile from "./ui/Profile"

const userImage = [
    {
        name : "Sorn Piseth",
        position:  "CEO of management",
        img : "https://c4.wallpaperflare.com/wallpaper/493/575/809/stars-silver-surfer-black-background-hd-wallpaper-preview.jpg"
    },
    
]
const ProfileContainer = () => {
  return (
    <div className="profile-container flex justify-center">
      {userImage.map((item, index) => (
        <Profile key={index}>
          <figure className="profile-card ">
            <img src={item.img} alt={item.name} className='w-[140px] h-[140px] object-cover rounded-full' />
            <figcaption className=' flex flex-col justify-center mt-5 gap-5'>
              <h1 className='font-bold mx-auto text-2xl'>{item.name}</h1>
              <p>{item.position}</p>
            </figcaption>
          </figure>
        </Profile>
      ))}
    </div>
  );
};

export default ProfileContainer;