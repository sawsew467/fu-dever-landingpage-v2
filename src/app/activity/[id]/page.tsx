import MainAlbum from "@/src/components/modules/Album/Main";
import { activityEndpointer } from "@/src/services/endpoint";
import axios from "axios";
import { notFound } from "next/navigation";

const getAlbumBySlug = async (slug: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: activityEndpointer.GET_ALBUM_BY_SLUG.replace("{slug}", slug),
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
  const data: any = await getAlbumBySlug(id);
  const album = data?.data?.data?.album;
  return {
    title: `FU-DEVER | ${album?.name}`,
    description:
      "Chào mừng bạn đến với FU-DEVER, câu lạc bộ lập trình của Đại học FPT! . Tại FU-DEVER, chúng tôi luôn tổ chức các hoạt động với các thành viên đầy nhiệt huyết để tạo nên những phút giây tuyệt vơi và tại đây sẽ lưu giữ những kỉ niệm đó.",
    icons: {
      icon: "/icons/layout/logo.png",
    },
    openGraph: {
      images: [album?.imageList[0]],
      title: `FU-DEVER |  ${album?.name}`,
      description: `${album?.description}`,
    },
  };
}

const Album = async ({ params: { id } }: { params: { id: string } }) => {
  const data: any = await getAlbumBySlug(id);
  if (!data?.data?.data?.album) {
    notFound();
  }
  return <MainAlbum album={data?.data?.data?.album ?? []} />;
};

export default Album;
