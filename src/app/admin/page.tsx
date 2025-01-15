"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons"; // faPlus, faEditを追加

const Page: React.FC = () => {
  return (
    <main>
      <div className="mb-4 text-2xl font-bold">管理者用の機能</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Link href="/admin/posts">
          <button className="relative w-full rounded-lg border border-black bg-white p-4 text-left text-black hover:bg-gray-100">
            <div className="absolute left-0 top-0 h-full w-5 rounded-l-lg bg-yellow-500"></div>
            <span className="ml-8">
              <FontAwesomeIcon icon={faEdit} className="mr-2" />
              投稿記事の一覧表示と編集
            </span>
            <FontAwesomeIcon icon={faArrowRight} className="absolute right-4 top-1/2 -translate-y-1/2" />
          </button>
        </Link>
        <Link href="/admin/posts/new">
          <button className="relative w-full rounded-lg border border-black bg-white p-4 text-left text-black hover:bg-gray-100">
            <div className="absolute left-0 top-0 h-full w-5 rounded-l-lg bg-yellow-500"></div>
            <span className="ml-8">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              新しい投稿記事の作成
            </span>
            <FontAwesomeIcon icon={faArrowRight} className="absolute right-4 top-1/2 -translate-y-1/2" />
          </button>
        </Link>
        <Link href="/admin/categories">
          <button className="relative w-full rounded-lg border border-black bg-white p-4 text-left text-black hover:bg-gray-100">
            <div className="absolute left-0 top-0 h-full w-5 rounded-l-lg bg-yellow-500"></div>
            <span className="ml-8">
              <FontAwesomeIcon icon={faEdit} className="mr-2" />
              カテゴリの一覧表示と編集
            </span>
            <FontAwesomeIcon icon={faArrowRight} className="absolute right-4 top-1/2 -translate-y-1/2" />
          </button>
        </Link>
        <Link href="/admin/categories/new">
          <button className="relative w-full rounded-lg border border-black bg-white p-4 text-left text-black hover:bg-gray-100">
            <div className="absolute left-0 top-0 h-full w-5 rounded-l-lg bg-yellow-500"></div>
            <span className="ml-8">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              新しいカテゴリの作成
            </span>
            <FontAwesomeIcon icon={faArrowRight} className="absolute right-4 top-1/2 -translate-y-1/2" />
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Page;
