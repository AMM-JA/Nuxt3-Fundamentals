export default defineNuxtRouteMiddleware((to, from) => {
  // npx nuxi add middleware logger
  const userIsLoggedIn = false;
  if (!userIsLoggedIn) {
    // return abortNavigation("D route ko ma lr nk so tk message yay tr") //! abort with error message
    return navigateTo({ path: "/login" });
  }
});
