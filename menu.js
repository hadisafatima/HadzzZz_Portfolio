const menuTag = document.getElementById('menuTag');
const menuList = document.getElementById('menuList');
const menuListItems = document.querySelectorAll('#menuList li');

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

if (menuListItems) {
    menuListItems.forEach((menuListItem) => {
      menuListItem.addEventListener('click', () => {
        
        menuListItems.forEach(i => {
          i.classList.remove('border-b-2', 'text-pink-600');
        });

        menuListItem.classList.add('border-b-2', 'text-pink-600');
      });
    });
}