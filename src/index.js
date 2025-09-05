import router from './routes';

window.addEventListener('hashchange', () => {
  console.log("Hash ha cambiado a:", window.location.hash);
});
window.addEventListener('load', router);

window.addEventListener('hashchange',  () => {
  console.log("hashchange:", location.hash);
  router();
}); 



