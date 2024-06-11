import MainProject from "@components/modules/Project/Main";
import { projectEndpoint } from "@/src/services/endpoint";
import axios from "axios";
import { Metadata } from "next";
const getAllProject = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: projectEndpoint.GET_ALL_PROJECT,
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return error;
  }
};
export const metadata = {
  title: "FU-DEVER | Dự án",
  description:
    "Hãy tham khảo dự án FU-DEVER! Xem những người có thành tích cao nhất và theo dõi tiến trình của bạn khi bạn cạnh tranh trong các thử thách viết mã và đóng góp cho các dự án thú vị. Hãy tham gia cùng chúng tôi và thăng hạng trong cộng đồng lập trình sôi động của chúng tôi.",
  icons: {
    icon: "/icons/layout/logo.png",
  },
  openGraph: {
    images: ["/images/layouts/project.png"],
    title: "FU-DEVER | Câu lạc bộ lập trình FU-DEVER",
    description:
      "Chào mừng bạn đến với FU-DEVER, câu lạc bộ lập trình của Đại học FPT! . Tại FU-DEVER, chúng tôi cố gắng thúc đẩy một cộng đồng sôi động gồm các lập trình viên đầy tham vọng và cung cấp nền tảng để phát triển kỹ năng và cộng tác.",
  },
};
export default async function Project() {
  const data: any = await getAllProject();
  return <MainProject data={data?.data?.data ?? []} />;
}
export const revalidate = 20;
