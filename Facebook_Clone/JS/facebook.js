function openReels()
{
   document.querySelector("#roomsid").style.display="none";
   document.querySelector("#stories").style.display="none";
   document.querySelector("#reelsid").style.display="flex";
   document.querySelector("#story-btn").classList.remove("active-story");
   document.querySelector("#rooms-btn").classList.remove("active-story");
   document.querySelector("#reels-btn").classList.add("active-story");

}

function openStories()
{
   document.querySelector("#roomsid").style.display="none";
   document.querySelector("#stories").style.display="flex";
   document.querySelector("#reelsid").style.display="none";
   document.querySelector("#story-btn").classList.add("active-story");
   document.querySelector("#reels-btn").classList.remove("active-story");
   document.querySelector("#rooms-btn").classList.remove("active-story");


}

function openRooms()
{
   document.querySelector("#roomsid").style.display="flex";
   document.querySelector("#stories").style.display="none";
   document.querySelector("#reelsid").style.display="none";
   document.querySelector("#story-btn").classList.remove("active-story");
   document.querySelector("#reels-btn").classList.remove("active-story");
   document.querySelector("#rooms-btn").classList.add("active-story");
}

let flag = false;
let messenger = document.getElementsByClassName("messenger-window")[0];
function openMessenger()
{
   if(!flag)
   {
   document.querySelector("#msg-btn").style.backgroundColor="#263951";
   document.querySelector("#msg-icn").style.color="#2E89FF";
   document.querySelector("#msg-icn").style.backgroundColor="#263951";
   messenger.style.display="block";
   flag=true;
   }

   else{
      document.querySelector("#msg-btn").style.backgroundColor="#3A3B3C";
   document.querySelector("#msg-icn").style.color="white";
   document.querySelector("#msg-icn").style.backgroundColor="#3A3B3C";
   messenger.style.display="none";
      flag=false;
   }   
}

window.onclick= function(event)
        {
            if(event.target == messenger)
            {
                messenger.style.display="none";
            }
        }

