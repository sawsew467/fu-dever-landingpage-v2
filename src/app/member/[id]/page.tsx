import React from "react";
import MainMemberDetail from "@/src/components/modules/MemberDetail/Detail";
import axios from "axios";
import { userEndpoint } from "@/src/services/endpoint";
import { notFound } from "next/navigation";

const fetchUser = async (id: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: userEndpoint.GET_USER_DETAIL_BY_ID.replace("{id}", id),
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
  const data: any = await fetchUser(id);
  const user = data?.data?.data;
  return {
    title: `FU-DEVER | ${user?.firstname} ${user?.lastname}`,
    description:
      "Chào mừng bạn đến với FU-DEVER, câu lạc bộ lập trình của Đại học FPT! . Tại FU-DEVER, chúng tôi cố gắng thúc đẩy một cộng đồng sôi động gồm các lập trình viên đầy tham vọng và cung cấp nền tảng để phát triển kỹ năng và cộng tác.",
    icons: {
      icon: "/icons/layout/logo.png",
    },
    openGraph: {
      images: [user?.avatar],
      title: `FU-DEVER | ${user?.firstname} ${user?.lastname}`,
      description: `${user?.firstname} ${user?.lastname} là một người cực kì nhiệt huyết trong câu lạc bộ Dever`,
    },
  };
}

const Member = async ({ params: { id } }: { params: { id: string } }) => {
  const user: any = await fetchUser(id);

  if (!user?.data?.data) {
    notFound();
  }
  return <MainMemberDetail user={user?.data?.data ?? {}} />;
};

export default Member;
