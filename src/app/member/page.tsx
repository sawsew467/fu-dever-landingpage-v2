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

const getUser = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: userEndpoint.GET_ALL_USERS,
    
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return error;
  }
};
async function Member() {
  const data: any = await getUser();
  const adminData = data?.data?.data?.users?.filter(
    (user: any) => user?.isAdmin
  );
  const excellentData = data?.data?.data?.users?.filter(
    (user: any) => user?.isExcellent
  );
  const memberData = data?.data?.data?.users?.filter(
    (user: any) => !user?.isAdmin
  );
  const user = { adminData, excellentData, memberData };
  return <MainMember data={user ?? []} />;
}
export default Member;
