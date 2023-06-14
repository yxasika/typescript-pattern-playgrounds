import { ApiAdapterA, ApiAdapterB, UserApi } from './adapter.ts';

export function adapterPlayground(): void {
    let userApi: UserApi = new ApiAdapterA();
    
    console.log('implements API A: ', userApi.fetchUserData());
    
    // can use both adapters interchangeable! Use adapter specification instead of actual api spec.
    userApi = new ApiAdapterB();
    
    console.log('implements API B: ', userApi.fetchUserData());
}
