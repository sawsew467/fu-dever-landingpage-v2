import LeaderboardModule from "@components/modules/Leaderboard/Main";
import axios from "axios";

export const metadata = {
  title: "FU-DEVER | Bảng xếp hạng",
  description:
    "Kiểm tra bảng xếp hạng FU-DEVER! Xem những người có thành tích cao nhất và theo dõi tiến trình của bạn khi bạn cạnh tranh trong các thử thách lập trình và đóng góp cho các dự án thú vị. Hãy tham gia cùng chúng tôi và thăng hạng trong cộng đồng lập trình sôi động của chúng tôi.",
  icons: {
    icon: "/icons/layout/logo.png",
  },
  openGraph: {
    images: ["/images//layouts/leaderboard.png"],
    title: "FU-DEVER | Câu lạc bộ lập trình FU-DEVER",
    description:
      "Chào mừng bạn đến với FU-DEVER, câu lạc bộ lập trình của Đại học FPT! . Tại FU-DEVER, chúng tôi cố gắng thúc đẩy một cộng đồng sôi động gồm các lập trình viên đầy tham vọng và cung cấp nền tảng để phát triển kỹ năng và cộng tác.",
  },
};

const getLeaderboard = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://dever-dashboard-api-v2.onrender.com/api/v1/leetcode",
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return error;
  }
};

export default async function LeaderBoardPage() {
  const leaderboard: any = await getLeaderboard();

  return (
    <>
      <LeaderboardModule leaderboardData={leaderboard?.data?.data} />;
    </>
  );
}
export const revalidate = 20;
