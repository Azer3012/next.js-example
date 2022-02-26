import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  //eger olmayan bir sehifeye getdikde 2 saniye sonra home page-e qayidacaqa
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ooppss....</h1>
      <h2>That Page cannot be found</h2>
      <p>
        Go back To the{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
