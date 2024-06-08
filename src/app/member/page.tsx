import axios from "axios";

import { userEndpoint } from "@/src/services/endpoint";

import MainMember from "@components/modules/Member/Main";

export const metadata = {
  title: "FU-DEVER | Thành viên",
  description:
    "Gặp gỡ các thành viên tài năng của FU-DEVER. Cộng đồng lập trình viên đa dạng của chúng tôi, từ người mới bắt đầu đến chuyên gia, cộng tác trong các dự án đổi mới, chia sẻ kiến thức và cùng nhau phát triển trong thế giới công nghệ.",
  icons: {
    icon: "/icons/layout/logo.png",
  },
  openGraph: {
    images: ["/images/layouts/member.png"],
    title: "FU-DEVER | Câu lạc bộ lập trình FU-DEVER",
    description:
      "Chào mừng bạn đến với FU-DEVER, câu lạc bộ lập trình của Đại học FPT! . Tại FU-DEVER, chúng tôi cố gắng thúc đẩy một cộng đồng sôi động gồm các lập trình viên đầy tham vọng và cung cấp nền tảng để phát triển kỹ năng và cộng tác.",
  },
};

const getLeader = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${userEndpoint.GET_ALL_USERS}?filter={"isLeader":  true}`,
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return error;
  }
};
const getExcellent = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${userEndpoint.GET_ALL_USERS}?filter={"isExcellent":  true}`,
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return error;
  }
};
const getUser = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${userEndpoint.GET_ALL_USERS}?page=1&limit=8&filter={"isLeader":false}`,
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return error;
  }
};
async function Member() {
  const leaderData: any = await getLeader();
  const excellentData: any = await getExcellent();
  const memberData: any = await getUser();
  return (
    <MainMember
      leaderData={leaderData?.data?.data?.users ?? []}
      excellentData={excellentData?.data?.data?.users ?? []}
      memberData={memberData?.data?.data?.users ?? []}
    />
  );
}
export default Member;
export const revalidate = 60;
