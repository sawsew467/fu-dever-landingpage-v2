import { projectEndpoint } from "@/src/services/endpoint";
import axios from "axios";

import MainProject from "@components/modules/Post/Main";
import { redirect } from "next/navigation";
const getDetailProject = async (id: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: projectEndpoint.GET_PROJECT_BY_SLUG.replace("{slug}", id),
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return error;
  }
};

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: any = await getDetailProject(id);
  const project = data?.data?.data;
  return {
    title: `FU-DEVER | ${project?.title}`,
    description:
      "Chào mừng bạn đến với FU-DEVER, câu lạc bộ lập trình của Đại học FPT! . Tại FU-DEVER, chúng tôi cố gắng thúc đẩy một cộng đồng sôi động gồm các lập trình viên đầy tham vọng và cung cấp nền tảng để phát triển kỹ năng và cộng tác.",
    icons: {
      icon: "/icons/layout/logo.png",
    },
    openGraph: {
      images: [project?.image],
      title: `FU-DEVER | ${project?.title}`,
      description: `${project?.subTitle}`,
    },
  };
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: any = await getDetailProject(id);
  if (!data?.data?.data) {
    redirect("/404");
  }
  return <MainProject project={data?.data?.data ?? {}} />;
}
