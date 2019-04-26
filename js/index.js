// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});
// Parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax, {});
// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});
// ScrollSpy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});
//collapse
const collapse = document.querySelectorAll('.collapsible');
M.Collapsible.init(collapse, {});
// slider
const slider = document.querySelectorAll('.carousel');
M.Carousel.init(slider, {
  // fullWidth: true,
  indicators: true
});
// fab
const fab = document.querySelectorAll('.fixed-action-btn');
M.FloatingActionButton.init(fab, {
  direction: 'top'
});
//tooltip
const tipped = document.querySelectorAll('.tooltipped');
M.Tooltip.init(tipped, {});
