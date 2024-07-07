import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../adminServices/admin.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AdminService)
  const router = inject(Router)
  if(authService.isLoggedIn()){
    return true
  }else{
    alert("Operation denied... Please login")
    router.navigateByUrl("")
    return false
  }
  
};
