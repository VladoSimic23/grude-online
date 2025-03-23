import Link from "next/link";
import { isMobileDevice } from "./libs/UserAgent/UserAgent";
import mobileStyles from "./Components/MobileComponents/MobileHomepage/Css/mobileHomepage.module.css";

export default async function NotFound() {
  const isMobile = await isMobileDevice();

  if (isMobile) {
    return (
      <div className="container mt-4 text-center p-4">
        <h2 className="text-white">404 Not Found</h2>
        <p className="text-white">
          The post or page you requested is no longer available.
        </p>
        <Link
          className={`${mobileStyles.mobileButton} d-inline-block`}
          href="/"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>404 Not Found</h2>
      <p>The post or page you requested is no longer available.</p>
      <Link className={`${mobileStyles.mobileButton} d-inline-block`} href="/">
        Return Home
      </Link>
    </div>
  );
}
