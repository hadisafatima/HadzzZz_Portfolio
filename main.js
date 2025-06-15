document.addEventListener('DOMContentLoaded', () => {
  // const body = document.querySelector('body');
  
  const H = document.getElementById("H");
  const adzzZz = document.getElementById("adzzZz");
  
  const logo = document.getElementById("logo");
  
  const menuTag = document.getElementById('menuTag');
  
  const menuList = document.getElementById('menuList');

  const menuListItems = document.querySelectorAll('#menuList li');
  
  const logoBgShape = document.getElementById('logoBgShape');
    
  const initial = document.getElementById('initial');
  
  const homeScreenParent = document.getElementById('homeScreenParent');
  
  // const tabs = document.querySelectorAll('.tabs');

  console.log(window.innerWidth);
  console.log(window.innerHeight);
  
  if(H && adzzZz){
    H.addEventListener('animationend', (event) => {
    
      if (event.animationName === 'sizeReducerFromSM') {
        adzzZz.classList.remove('hidden');
        adzzZz.classList.add('zShift');
      }
    
    });
  }

  if(logo && initial){
    logo.addEventListener('animationend', (event)=> {
    
      if(event.animationName === 'zRightFromSM'){
        console.log("after zRight animation");
      
        if(window.innerWidth < 640){
          initial.classList.add('initialPlacement');
        }else {
          initial.classList.add('initialPlacementFromSM');
        }
     
      }
    
    });
  }
  
  if(logo && menuTag && menuList && logoBgShape && homeScreenParent){
    logo.addEventListener('animationend', (event)=> {
      if(event.animationName === 'zRightFromSM'){
        menuTag.classList.remove('hidden');
        menuTag.classList.add('animate-pulse');
        logoBgShape.classList.remove('hidden');
    
        setTimeout(() => {
          homeScreenParent.classList.add('contentVisibility')
        }, 2000);
    
        menuTag.addEventListener("click", () => {
          if(menuList.classList.contains('hidden')){ // need to check if hidden class is added if yes unhide it else do something else
            menuTag.classList.replace('bg-pink-600', 'bg-pink-500');
            
            menuTag.classList.replace('bottom-9', 'bottom-10');
            
            menuList.classList.remove('hidden');
            
          } else {
            menuList.classList.add('hidden');
            
            menuTag.classList.remove('opacity-[60%]');
            menuTag.classList.add('bg-gray-600');
            menuTag.classList.replace('bg-pink-500', 'bg-pink-600');
    
            menuTag.classList.replace('bottom-10', 'bottom-9');
          }
    
        });
    
      } // animation
    
    });
  }

  if (menuListItems) {
    menuListItems.forEach((menuListItem) => {
      menuListItem.addEventListener('click', () => {
        
        // Remove styles from all menu items
        menuListItems.forEach(i => {
          i.classList.remove('border-b-2', 'text-pink-600');
        });

        // Hide all tabs
        // tabs.forEach(tab => tab.classList.add('hidden'));

        // // Show corresponding tab
        // tabs[index].classList.remove('hidden');

        // console.log('Index: ' + index);
        // if(index != 1){
        //   // body.classList.replace('overflow-hidden', 'overflow-scroll');
        //   body.classList.remove('overflow-hidden');
        //   body.classList.add('overflow-scroll');
        // }

        // if(index == 2){
          
        // }

        // Highlight active menu item
        menuListItem.classList.add('border-b-2', 'text-pink-600');
      });
    });
  }

});