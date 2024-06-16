function useHashParams() {
  const hash = window.location.hash;

  if (hash === "") return null;

  const hashParams = hash.substring(1);

  const paramsArray = hashParams.split("&");

  const params = {};
  paramsArray.forEach((param) => {
    const [key, value] = param.split("=");
    params[key] = decodeURIComponent(value);
  });

  return params;
}

export default useHashParams;
