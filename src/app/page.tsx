import { Metadata } from "next";

import Banner from "@components/modules/Home/Banner";
import Product from "@components/modules/Home/Product";
import Introduction from "@components/modules/Home/Introduction";
import Join from "@components/modules/Home/Join";

export const metadata: Metadata = {
  title: "FU-DEVER | Trang chủ",
  description:
    "Chào mừng bạn đến với FU-DEVER, câu lạc bộ lập trình của Đại học FPT! . Tại FU-DEVER, chúng tôi cố gắng thúc đẩy một cộng đồng sôi động gồm các lập trình viên đầy tham vọng và cung cấp nền tảng để phát triển kỹ năng và cộng tác.",
  icons: {
    icon: "/icons/layout/logo.png",
  },
  openGraph: {
    images: ["/images/meta.jpg"],
    title: "FU-DEVER | Câu lạc bộ lập trình FU-DEVER",
    description:
      "Chào mừng bạn đến với FU-DEVER, câu lạc bộ lập trình của Đại học FPT! . Tại FU-DEVER, chúng tôi cố gắng thúc đẩy một cộng đồng sôi động gồm các lập trình viên đầy tham vọng và cung cấp nền tảng để phát triển kỹ năng và cộng tác.",
  },
};

export default function Home() {
  return (
    <>
      <Banner />
      <Introduction />
      <Product />
      <Join />
    </>
  );
}
