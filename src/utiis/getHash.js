const getHash= ()=>{ 
   const hash = location.hash.slice(1).toLowerCase().replace(/\/$/, '');
  const parts = hash.split('/');
  return parts[1] ? parts[1] : '/';
};

export default getHash;
