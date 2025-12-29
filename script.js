  document.getElementById('year').textContent = new Date().getFullYear();
      // small parallax for images to emphasize "coming out" feel
      (function(){
        const leftImg = document.querySelector(".female-mask img");
        const rightImg = document.querySelector(".male-mask img");
        window.addEventListener("mousemove", (e) => {
          const x = (e.clientX - window.innerWidth/2)/40;
          const y = (e.clientY - window.innerHeight/2)/60;
          if(leftImg) leftImg.style.transform = `translate(-50%,-50%) translate3d(${x}px,${y}px,0) scale(1.02)`;
          if(rightImg) rightImg.style.transform = `translate(-50%,-50%) translate3d(${x * -0.9}px,${y * 0.9}px,0) rotateZ(8deg) scale(1.02)`;
        });
      })();

      // modal open/close wiring
      (function(){
        const modal = document.getElementById('moreGoalsModal');
        const dialog = modal && modal.querySelector('[role="dialog"]');
        const openBtn = document.getElementById('moreGoalsBtn');
        const closeBtn = document.getElementById('closeMoreGoals');
        const moreClose = document.getElementById('moreGoalsClose');
        const backdrop = document.getElementById('moreGoalsBackdrop');

        function open(){
          modal.style.display = 'flex';
          // show animation target dialog (the inner dialog element)
          const inner = modal.querySelector('[role="dialog"]');
          if(inner){ inner.style.opacity = '1'; inner.style.transform = 'translateY(0) scale(1)'; }
          document.body.style.overflow = 'hidden';
        }
        function close(){
          const inner = modal.querySelector('[role="dialog"]');
          if(inner){ inner.style.opacity = '0'; inner.style.transform = 'translateY(24px) scale(0.98)'; }
          setTimeout(()=>{ modal.style.display = 'none'; document.body.style.overflow = ''; }, 320);
        }

        if(openBtn) openBtn.addEventListener('click', function(e){ e.preventDefault(); open(); });
        if(closeBtn) closeBtn.addEventListener('click', close);
        if(moreClose) moreClose.addEventListener('click', close);
        if(backdrop) backdrop.addEventListener('click', close);
        document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
      })();
      /* portfolio modal data */
const PROJECTS = {
  safesphere: {
    title: "SafeSphere — Brand & Identity",
    meta: "Branding • 2025",
    img: "images/safesphere.PNG",
    desc: "Complete brand identity and social templates for a campus safety app. Logo, color system and post templates to build trust and accessibility.",
    chips: ["Logo","Styleguide","Templates"],
    live: "" // add live url if any
  },
  mindbloom: {
    title: "Mind Bloom — Landing",
    meta: "Web • 2025",
    img: "images/mindbloom.PNG",
    desc: "Conversion-focused landing with glassmorphism and subtle motion. Designed for lead capture and high clarity.",
    chips: ["HTML/CSS/JS","Animations","Responsive"],
    live: ""
  },
  ecospark: {
    title: "EcoSpark — Social Campaign",
    meta: "Social • 2025",
    img: "images/ecospark.PNG",
    desc: "Month-long campaign with grid-first strategy, reels and story funnels that increased engagement and signups.",
    chips: ["Content Plan","Reels","Strategy"],
    live: ""
  },
  electromart: {
    title: "ElectroMart — UI Kits",
    meta: "Branding • 2024",
    img: "images/electromart.PNG",
    desc: "UI templates and micro-interactions to speed up prototyping for electronics marketplace UX.",
    chips: ["UI Kit","Figma","Prototype"],
    live: ""
  }
};

/* open modal when view clicked */
document.querySelectorAll('.view-btn').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const key = btn.dataset.project;
    const data = PROJECTS[key];
    if(!data) return;
    const modal = document.getElementById('projectModal');
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
    document.getElementById('pmImage').src = data.img;
    document.getElementById('pmTitle').innerText = data.title;
    document.getElementById('pmMeta').innerText = data.meta;
    document.getElementById('pmDesc').innerText = data.desc;
    const chips = document.getElementById('pmChips');
    chips.innerHTML = data.chips.map(c=>`<span class="chip">${c}</span>`).join(' ');
    const live = document.getElementById('pmLive');
    if(data.live){ live.style.display='inline-block'; live.href=data.live; } else { live.style.display='none'; }
    document.body.style.overflow = 'hidden';
  });
});
/* close handlers */
document.getElementById('pmClose').addEventListener('click', closePM);
document.querySelector('.pm-backdrop').addEventListener('click', closePM);
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closePM(); });
function closePM(){
  const modal = document.getElementById('projectModal');
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

/* filter buttons (visual) */
document.querySelectorAll('.filter').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.projects-grid .card').forEach(card=>{
      if(filter === 'all' || card.dataset.category === filter) card.style.display = '';
      else card.style.display = 'none';
    });
  });
});

/* footer year if you use placeholder */
document.querySelectorAll('#year').forEach(el=>el.innerText = new Date().getFullYear());
// reset contact form on page show (bfcache)
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      document.getElementById("contactForm").reset();
    }
  });
  // mobile sidebar toggle
const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('mobileSidebar');
  const closeBtn = document.getElementById('closeSidebar');
  const overlay = document.getElementById('overlay');

  // open sidebar
  hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  });

  // close sidebar
  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  }

  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  // close on menu click
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeSidebar);
  });

