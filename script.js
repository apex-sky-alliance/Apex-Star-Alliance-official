// ===============================
// Apex Sky Alliance
// Official Script
// ===============================

// Smooth Scroll
document.querySelectorAll('a[href="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

});

// Card Animation
const cards = document.querySelectorAll(
".member-card, .news-card, .fleet-card, .hub-card, .stat"
);

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

},{threshold:0.2});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition="all .8s ease";

    observer.observe(card);

});

// Statistics Counter
const stats=document.querySelectorAll(".stat h1");

stats.forEach(stat=>{

    const value=stat.innerText;

    if(!isNaN(value)){

        let count=0;

        const target=parseInt(value);

        const timer=setInterval(()=>{

            count++;

            stat.innerText=count;

            if(count>=target){

                stat.innerText=target+"+";

                clearInterval(timer);

            }

        },15);

    }

});
