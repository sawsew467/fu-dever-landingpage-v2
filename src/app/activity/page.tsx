import MainActivy from "@components/modules/Activity/Main";
import { activityEndpointer } from "@/src/services/endpoint";
import axios from "axios";

export const metadata = {
  title: "FU-DEVER | Hoạt động của chúng tôi",
  description:
    "Khám phá những hoạt động sôi nổi tại câu lạc bộ lập trình của FU-DEVER. Cộng tác trong các dự án đổi mới, nâng cao kỹ năng lập trình của bạn và kết nối với cộng đồng những người đam mê công nghệ. Hoàn hảo cho cả người mới bắt đầu và lập trình viên có kinh nghiệm.",
  icons: {
    icon: "/icons/layout/logo.png",
  },
  openGraph: {
    images: ["/images/layouts/activity.png"],
    title: "FU-DEVER | Câu lạc bộ lập trình FU-DEVER",
    description:
      "Chào mừng bạn đến với FU-DEVER, câu lạc bộ lập trình của Đại học FPT! . Tại FU-DEVER, chúng tôi cố gắng thúc đẩy một cộng đồng sôi động gồm các lập trình viên đầy tham vọng và cung cấp nền tảng để phát triển kỹ năng và cộng tác.",
  },
};
const getActivity = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: activityEndpointer.GET_IMAGE_ACTIVITY,
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return error;
  }
};
const getAlbum = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: activityEndpointer.GET_ALL_ALBUM,
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return error;
  }
};
async function Activity() {
  const data: any = await getActivity();
  return <MainActivy data={data?.data?.data} />;
}

export default Activity;
export const revalidate = 60;
