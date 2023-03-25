import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
      <a>
        <Date date={parseISO(post.date)} />
        <h2>{post.title}</h2>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  );
}

// Get all links on the page
const links = document.getElementsByTagName('a');

// Loop through each link
for (let i = 0; i < links.length; i++) {
  const link = links[i];

  // Check if the link is an external link
  if (link.host !== window.location.host) {
    // If it is an external link, add the target="_blank" attribute
    link.setAttribute('target', '_blank');
  }
}
