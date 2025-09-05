const getHash= ()=>{ 
   return (
    location.hash
    .slice(1)
    .toLowerCase()
    .split('/')[0] || '/'
 );
};

export default getHash;
