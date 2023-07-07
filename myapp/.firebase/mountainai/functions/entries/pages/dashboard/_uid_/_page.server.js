function load({ params }) {
  const uid = params.uid;
  if (!uid)
    throw error(404);
  return {
    uid
  };
}
export {
  load
};
