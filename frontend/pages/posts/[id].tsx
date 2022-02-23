import Link from "next/link";
import { useRouter } from "next/router";

const Render = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>Welcome {id}</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

export default Render;
