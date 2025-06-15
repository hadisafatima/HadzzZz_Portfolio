document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll("#skillsMenu section");
    const skills = document.querySelectorAll('#skillsContent > section')

    const images = document.querySelectorAll('#outsetYellowSec #skillsSec #skillsContent section section img');

    tabs.forEach((tab, tabIndex) => {
        tab.addEventListener("click", function () {
        // Remove active styles from all tabs
            tabs.forEach(t => {
                t.classList.remove("font-extrabold", "border-black", "text-black");
                t.classList.add("text-black/60", "font-semibold");
                t.classList.remove("border-b-2", "md:border-b-[3px]", "lg:border-b-4","border-b-[3px]", "border-b-4");
                t.classList.add('hover:border-b-2', 'md:hover:border-b-[3px]', 'lg:hover:border-b-4', 'hover:text-black');
            });
        
                
            this.classList.remove("text-black/60", "font-semibold");
            this.classList.add("font-extrabold", "border-black", "text-black");

            if(window.innerWidth < 640){
                this.classList.add('border-b-2');
            }else if(window.innerWidth >= 640 && window.innerWidth < 1024){
                this.classList.add('border-b-[3px]');
            }else{
                this.classList.add('border-b-4');
            }

            skills.forEach((skill, skillIndex) => {
                if (tabIndex === skillIndex) {
                    skill.classList.remove("hidden");
                    skill.classList.add("flex");
                } else {
                    skill.classList.add("hidden");
                    skill.classList.remove("flex");
                }
            });

            // Add active styles to the clicked tab
        });
    });

    if(window.innerWidth < 768){
        images.forEach(image => {
            image.classList.remove('opacityChange');
        });
    }else {
        images.forEach(image => {
            image.classList.remove('opacityChange');
        });
    }
});

// git remote add origin https://github.com/hadisafatima/HadzzZz_Portfolio.git
// git branch -M main
// git push -u origin main