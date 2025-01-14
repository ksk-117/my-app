"use client";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faLeaf, faSignInAlt, faSignOutAlt, faCog } from "@fortawesome/free-solid-svg-icons"; // faCogを追加
import Link from "next/link";
import { supabase } from "@/utils/supabase";
import { useAuth } from "@/app/_hooks/useAuth";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();
  const { isLoading, session } = useAuth();
  const logout = async () => {
    await supabase.auth.signOut();
    router.replace("/");
  };
  return (
    <header>
      <div className="bg-slate-800 py-3">
        <div
          className={twMerge(
            "mx-4 max-w-2xl md:mx-auto",
            "flex items-center justify-between",
            "text-lg font-bold text-white"
          )}
        >
          <div>
            <Link href="/">
              <FontAwesomeIcon icon={faLeaf} className="mr-1 text-green-500" />
              MyBlogApp
            </Link>
          </div>
          <div className="flex items-center gap-x-6">
            {!isLoading &&
              (session ? (
                <>
                  <Link href="/admin" className="flex items-center rounded border border-red-500 bg-red-500 p-1 text-sm text-white">
                    <FontAwesomeIcon icon={faCog} className="mr-1" />
                    管理者機能
                  </Link>
                  <button onClick={logout} className="flex items-center">
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login" className="flex items-center">
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
                  Login
                </Link>
              ))}
            <Link href="/about">About</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;