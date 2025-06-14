import SearchResultsWrap from "./SearchResultWrap";
import { isMobileDevice } from "../libs/UserAgent/UserAgent";
import SearchResultsWrapDesktop from "./desktopSearch/SearchResultsWrapDesktop";
import Popularno from "../Components/DesktopComponents/Popularno/Popularno";

export async function generateMetadata({
  searchParams,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) {
  const { query } = await searchParams;
  return {
    title: `Tražili ste ${query} - Grude Online`,
  };
}

const SearchResultsPage = async () => {
  const isMobile = await isMobileDevice();

  return (
    <div className="container">
      {isMobile && <SearchResultsWrap />}
      {!isMobile && (
        <div className="row mt-4">
          <div className="col-lg-8">
            <SearchResultsWrapDesktop />
          </div>
          <div className="col-lg-4">
            <Popularno />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
