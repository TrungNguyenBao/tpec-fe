import { useGlobalContext } from "Context/GlobalProvider";

const Maps = () => {
  const { globalData } = useGlobalContext();
  return (
    <div className="bg-colorcs-fff">
      <section className="container relative mx-auto mb-4 px-3">
        {globalData?.data?.attributes?.locationMap && (
          <iframe
            src={globalData?.data?.attributes?.locationMap}
            width="100%"
            height="500px"
          />
        )}
      </section>
    </div>
  );
};
export default Maps;
