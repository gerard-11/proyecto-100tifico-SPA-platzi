const resolveRoutes= (route)=>{
    if(route === '/'){
        return '/'
    }else if (route.length <= 3){
        return '/:id'
    }else{
        return `/${route}`
    };
};

export default resolveRoutes;