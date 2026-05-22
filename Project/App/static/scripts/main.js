const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = document.body.scrollHeight;
  stars = Array.from({length: 200}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.4 + 0.2,
    a: Math.random(),
    s: Math.random() * 0.02 + 0.005
  }));
}
window.addEventListener('resize', resize);
window.addEventListener('load', resize);

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  stars.forEach(s => {
    s.a += s.s;
    const alpha = (Math.sin(s.a) + 1) / 2;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(240,217,122,${alpha * 0.7})`;
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('visible');
  });
}, {threshold: 0.15});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hechizos
const output = document.getElementById('spell-output');
document.querySelectorAll('.spell').forEach(btn => {
  btn.addEventListener('click', () => {
    output.textContent = btn.dataset.spell;
    output.classList.remove('cast');
    void output.offsetWidth;
    output.classList.add('cast');
    createSparkles(btn);
  });
});

function createSparkles(el){
  const rect = el.getBoundingClientRect();
  for(let i = 0; i < 18; i++){
    const sp = document.createElement('span');
    const size = Math.random()*5 + 3;
    sp.style.cssText = `
      position:fixed;left:${rect.left + rect.width/2}px;top:${rect.top + rect.height/2}px;
      pointer-events:none;width:${size}px;height:${size}px;border-radius:50%;
      background:radial-gradient(circle,#f0d97a,rgba(212,175,55,0));
      box-shadow:0 0 8px rgba(240,217,122,.8);
      z-index:100;transition:all 1s ease-out;
    `;
    document.body.appendChild(sp);
    requestAnimationFrame(() => {
      sp.style.left = (rect.left + rect.width/2 + (Math.random()-0.5)*320) + 'px';
      sp.style.top = (rect.top + rect.height/2 + (Math.random()-0.5)*320) + 'px';
      sp.style.opacity = '0';
    });
    setTimeout(() => sp.remove(), 1000);
  }
}

// Año actual en el footer
const y = document.getElementById('year');
if(y) y.textContent = new Date().getFullYear();
