particlesJS('particles-js', {
   particles: {
      number: { value: 600, density: { enable: true, value_area: 1201.807518507837 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 12 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
      opacity: { value: 0.4406627567862068, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 4.00602506169279, random: true, anim: { enable: true, speed: 80.34083992696293, size_min: 26.78027997565431, sync: true } },
      line_linked: { enable: false, distance: 80.12050123385578, color: '#ffffff', opacity: 0, width: 0 },
      move: {
         enable: true,
         speed: 6.409640098708463,
         direction: 'bottom-left',
         random: true,
         straight: true,
         out_mode: 'out',
         bounce: false,
         attract: { enable: true, rotateX: 10000, rotateY: 1200 },
      },
   },
   interactivity: {
      detect_on: 'window',
      events: { onhover: { enable: false, mode: 'bubble' }, onclick: { enable: false, mode: 'repulse' }, resize: true },
      modes: {
         grab: { distance: 1500, line_linked: { opacity: 0.3946167695684703 } },
         bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
         repulse: { distance: 200, duration: 0.4 },
         push: { particles_nb: 4 },
         remove: { particles_nb: 2 },
      },
   },
   retina_detect: true,
})
var count_particles, stats, update
stats = new Stats()
stats.setMode(0)
stats.domElement.style.position = 'absolute'
stats.domElement.style.left = '0px'
stats.domElement.style.top = '0px'
document.body.appendChild(stats.domElement)
count_particles = document.querySelector('.js-count-particles')
update = function () {
   stats.begin()
   stats.end()
   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length
   }
   requestAnimationFrame(update)
}
requestAnimationFrame(update)
