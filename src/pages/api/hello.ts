// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ title: "John Doe" });
}
export const Projects = [
  {title:"Qari BookStore",src:"/images/QariBookstore.png",url:"https://qari-bookstore.vercel.app/"},
 {title:"Ertugrul New Version Clone",src:"/images/Ertugrul.png",url:"https://ertugrul-new-version-clone-pure-js.vercel.app/"},
 ,{title:"Zat Blogs",src:"/images/ZatBlogs.png",url:"https://zat-blogs.vercel.app/"}
 ,{title:"Umra Bags",src:"/images/UmraBags.png",url:"https://umra-bags.vercel.app/"}
];