const projectCards = document.querySelectorAll('#projectsCards #projectsCardsInner .projectCard');

document.addEventListener('DOMContentLoaded', () => {

    const projectsPage = document.getElementById('projects');
    const projectsInnerSec = document.querySelector('#projects section');

    const heading = document.querySelector('#projects section section p');
    
    const bgVideos = document.querySelectorAll('#projects section .videos');

    const worksTop = document.querySelector('#projects video');

    const body = document.querySelector('body');

    const cards = document.getElementById('projectsCards');

    setTimeout(() => {

        bgVideos.forEach(bgVideo => {
            bgVideo.classList.add('moveUpwards');
            setTimeout(() => {
                heading.classList.replace('hidden', 'flex');
            }, 1000);
        }, 500);


        setTimeout(() => {

            body.classList.replace('overflow-y-hidden', 'overflow-y-auto');
            
            projectsInnerSec.classList.replace('h-full', 'h-[10rem]');
            
            bgVideos.forEach(bgVideo => {
                bgVideo.classList.replace('flex', 'hidden');
            });

            projectsPage.classList.add('blink');
            heading.classList.replace('py-80', 'py-40');
            worksTop.classList.replace('hidden', 'flex')
            body.classList.replace('bg-gray-900', 'bg-[#322a67]')
            
        }, 4000);
            

        setTimeout(() => {

            projectsPage.classList.add('blink');
            cards.classList.replace('hidden', 'flex');
            cards.classList.add('projectCardsMoveUpwards');
            if(window.innerWidth < 768){
                heading.classList.replace('py-40', 'py-[3rem]'); // for xs screen only
                cards.classList.replace('pt-64', 'pt-[3rem]'); // for xs screen only
            }else if(window.innerWidth >= 768 && window.innerWidth < 1024){
                heading.classList.replace('py-40', 'py-[15.5rem]'); // for xs screen only
            }else if(window.innerWidth > 1024 && window.innerWidth < 1280){
                heading.classList.replace('py-40', 'py-[17rem]'); // for xs screen only
            }
            heading.classList.add('moveEffect');

        }, 6000);

    }, 1000); 

});

function changeOpacity(event){

    projectCards.forEach((projectCard) => {
        projectCard.classList.replace('opacity-100', 'opacity-30');
    });
    event.classList.add('cursor-pointer');
    event.classList.replace('opacity-30', 'opacity-100');
}

function reverseOpacity(event){

    projectCards.forEach((projectCard) => {
        projectCard.classList.replace('opacity-30', 'opacity-100');
    });

    event.classList.remove('cursor-pointer');

}