// Unexpected errors of application
import { ErrorHandler } from '@angular/core';
export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        // Global error handler
        alert('An unexpected error occurred');
        console.log(error); // store it on the DB
    }
    //  remember to register it in the provider of app module
    // { provide:ErrorHandler, useClass:AppErrorHandler}
}

// alert('An unexpected error occurred');
// console.log(error); // store it on the DB