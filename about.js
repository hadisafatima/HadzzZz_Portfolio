document.addEventListener('DOMContentLoaded', () => {
    
// export function AboutJS(){
    const heading = document.getElementById("aboutHeading");
    const aboutHeadingParent = document.getElementById('aboutHeadingParent');
    const headingParentImg = document.querySelector('#aboutHeadingParent img');

    
    setTimeout(() => {

        if(window.innerWidth < 640){
            heading.classList.add('headingChangeBfSM');
            setTimeout(() => {
                setTimeout(() => {
                    headingParentImg.classList.replace('hidden', 'inline');
                }, 20);
                aboutHeadingParent.classList.replace('justify-center', 'justify-start');
            }, 1000);
        }else{
            // console.log(window.innerWidth);
            heading.classList.add('headingChange');
            // setTimeout(() => {
                setTimeout(() => {
                    headingParentImg.classList.replace('hidden', 'inline');
                }, 500);
                // aboutHeadingParent.classList.remove('justify-center', 'justify-end');
            // }, 1000);
        } // if-else ends

    }, 1000); // outest timeout

});