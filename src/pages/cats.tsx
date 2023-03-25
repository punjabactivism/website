import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import TagList from "../components/PostList";
import config from "../lib/config";
import { countPosts, listPostContent, PostContent } from "../lib/posts";
import { listTags, TagContent } from "../lib/tags";
import Head from "next/head";

type Props = {
  tags: TagContent[];
};
export default function Index({ tags }: Props) {
  const url = "/posts";
  const title = "All posts";
  return (
    <Layout>
      <TagList tags={tags} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = listTags();
  return {
    props: {
      tags
    },
  };
};
